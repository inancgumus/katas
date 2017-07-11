package main

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"net/http"
)

// ============================================================================
// Server example which supports RequestID for each request
//
//
// Test (I'm sending a request ID from the client to the server):
//
// curl -i -H "X-Request-ID: a845470c405a38e8800975a915b04fae" :3000
//
// 1. This sends a request ID to the server
// 2. Server catches this ID from http request header X-Request-ID
// 3. Derives a new context by setting this ID into request's context
// 4. The other middlewares and the handlers can get this ID from,
//    request's Context()
//
//
// If no ID is set, the server will generate a new unique ID for the request
//
// Test (this time, with no ID):
// Steps from above, 3th and 4th still apply.
//
// curl -i :3000
//
// ============================================================================

func main() {
	http.ListenAndServe(":3000", WithRequestID(handler()))
}

func handler() http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		rid, _ := req.Context().Value(RequestIDKey).(string)
		if rid == "" {
			rid = "empty"
		}
		fmt.Fprintf(rw, "This request's ID is \"%v\"\n.", rid)
	})
}

// ============================================================================
// X-Request-ID middleware (probably will be in its own package)
// ============================================================================

type key string

// RequestIDKey is just a key for writing to and reading from Context
const RequestIDKey key = "RequestID"

// WithRequestID adds X-Request-ID to the request's context
func WithRequestID(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		// Get the Request ID from client
		rid := req.Header.Get("X-Request-ID")

		// Generate a new Request ID since client didn't send one
		if rid == "" {
			rid, _ = genUUID()
		}

		ctx := context.WithValue(req.Context(), RequestIDKey, rid)

		next.ServeHTTP(rw, req.WithContext(ctx))
	})
}

// ============================================================================
// Random ID generation
// ============================================================================

// genUUID is a utility function to create an UUID
// just for creating a unique id for each request
// you can use any other function too of generating request ids
func genUUID() (string, error) {
	uuid := make([]byte, 16)
	n, err := rand.Read(uuid)

	if n != len(uuid) || err != nil {
		return "", err
	}

	uuid[8] = 0x80
	uuid[4] = 0x40

	return hex.EncodeToString(uuid), nil
}
