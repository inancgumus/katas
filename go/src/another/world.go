package another

import "fmt"

type hede struct {
	Name string
}

// Get ...
func Get() *hede {
	myhede := &hede{"it's me, hede."}
	fmt.Printf("%p\n", myhede)
	return myhede
}
