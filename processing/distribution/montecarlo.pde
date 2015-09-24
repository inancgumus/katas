class MonteCarloRandomizer implements Randomizer {
  
  int randomize(int len) {
    return int(montecarlo(len));
  }
  
  float montecarlo(int len) {
    while (true) {
      
      float r1 = random(len);
      float probability = r1;
      float r2 = random(len);
      
      if (r2 < probability) {
        return r1;
      }
    }
  }
  
}