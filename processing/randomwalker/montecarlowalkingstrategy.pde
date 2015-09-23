class MonteCarloWalkingStrategy extends WalkingStrategy {
  
  MonteCarloWalkingStrategy(Position pos) {
    super(pos);
  }
  
  void step() {
    float val = montecarlo();
    this.pos.x += val;
    this.pos.y += val;
    
    println(val);
  }
  
  float montecarlo() {
    while (true) {
      
      float r1 = random(10);
      float probability = r1;
      float r2 = random(10);
      
      if (r2 < probability) {
        return r1;
      }
    }
  }
  
}