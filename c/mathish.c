#include <stdio.h>

int odd(int n)  { return n & 0x1; }
int half(int n) { return n >> 1;  }

int egyptian(int n, int a) { 
  // printf("called with n=%d a=%d\n", n, a);  
  
  if (n == 1) {
    return a;
  }
  
  int result = egyptian(half(n), a + a);
  
  if (odd(n)) {
    result += a;
  }
  
  return result;
}
