#include <stdio.h>
#include <stdlib.h>
#include "mathish.h"

int main(int argc, char **argv) {
  if (argc < 3) {
    printf("%s <n times> <an integer>\n", argv[0]);
    exit(1);
  }

  int n = atoi(argv[1]);
  int a = atoi(argv[2]);

  if (!n || !a) {
    printf("egyptians were not aware of zero yet... sorry.\n");
    exit(1);
  }

  printf("egyptian multiplication for ===> %d * %d = %d\n", 
      n, a, egyptian(n, a));
}
