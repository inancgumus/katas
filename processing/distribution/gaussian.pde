class GaussianRandomizer implements Randomizer {
  
  int randomize(int len) {
    float mean = len / 2;
    float sd   = mean / 4;
    
    float x = (float) randomGaussian();
    float y = (x * sd + mean);
    
    return int(abs(y % len));
  }
  
}