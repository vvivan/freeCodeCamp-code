function factorialize(num) {
    res = 1;
    for (i = num; i > 0; i--) {
      res*= i;
    }
    return res;
  }
  
  factorialize(5);