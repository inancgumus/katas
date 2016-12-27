#include <stdio.h>
#include <stdlib.h>
#include "mathish.h"

int main(int argc, char **argv) {
  if (argc == 1) {
    printf("%s <integer>\n", argv[0]);
    exit(1);
  }

  int n = atoi(argv[1]);

  printf("is %d an odd? %s\n", n, odd(n) ? "yes" : "no");
}
