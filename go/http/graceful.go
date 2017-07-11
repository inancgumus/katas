package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"
)

const (
	service = "fooapi"
)

var (
	port            = flag.Int("port", 3333, "http port to listen on")
	shutdownTimeout = flag.Duration("shutdown-timeout", 10*time.Second,
		"shutdown timeout (5s,5m,5h) before connections are cancelled")
)

func main() {
	flag.Parse()

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    // will cause request to hang
    // if you send ctrl+c or kill the server an interrupt will be generated
    // but, because this request takes long, the server will wait 10 seconds
    // then, cancels itself
    time.Sleep(20 * time.Second)
		w.WriteHeader(200)
	})

	srv := &http.Server{
		Addr:    fmt.Sprintf(":%d", *port),
		Handler: mux,
	}

	stop := make(chan os.Signal)
	signal.Notify(stop, os.Interrupt)

	go func() {
		log.Printf("%s listening on 0.0.0.0:%d with %v timeout", service, *port, *shutdownTimeout)
		if err := srv.ListenAndServe(); err != nil {
			if err != http.ErrServerClosed {
				log.Fatal(err)
			}
		}
	}()

	<-stop

	log.Printf("%s shutting down ...\n", service)

	ctx, cancel := context.WithTimeout(context.Background(), *shutdownTimeout)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal(err)
	}

	log.Printf("%s down\n", service)
}
