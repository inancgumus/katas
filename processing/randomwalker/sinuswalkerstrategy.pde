class SinusWalkingStrategy extends WalkingStrategy {
  
  SinusWalkingStrategy(Position pos) {
    super(pos);
  }
  
  void step() {
    this.pos.randomizeX(-sin(1), sin(1));
    this.pos.randomizeY(-cos(1), cos(1));
  }
  
}