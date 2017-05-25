package main

import "fmt"
import "time"

// Here's the worker, of which we'll run several
// concurrent instances. These workers will receive
// work on the `jobs` channel and send the corresponding
// results on `results`. We'll sleep a second per job to
// simulate an expensive task.
func worker(id int, jobs <-chan int, results chan<- int) {
	fmt.Println("worker", id, "waiting for a job...")
	for j := range jobs {
		fmt.Println("worker", id, "started  job", j)
		time.Sleep(time.Second)
		fmt.Println("worker", id, "finished job", j)
		results <- j * j
	}
	fmt.Println("worker", id, "done")
}

func main() {
	// In order to use our pool of workers we need to send
	// them work and collect their results. We make 2
	// channels for this.
	jobs := make(chan int, 5)
	results := make(chan int, 5)

	// This starts up 3 workers, initially blocked
	// because there are no jobs yet.
	for w := 1; w <= 3; w++ {
		go worker(w, jobs, results)
	}

	time.Sleep(1 * time.Second)
	fmt.Println("sending jobs")

	// Here we send 5 `jobs` and then `close` that
	// channel to indicate that's all the work we have.
	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	time.Sleep(5 * time.Second)
	fmt.Println("\ncollecting results...")

	// Finally we collect all the results of the work.
	for a := 1; a <= 5; a++ {
		fmt.Println("collected result:", <-results)
	}
}
