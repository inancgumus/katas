class DownRightWalkingStrategy extends WalkingStrategy {
  
  DownRightWalkingStrategy(Position pos) {
    super(pos);
  }
  
  void step() {
    this.pos.randomizeX(-1, 1.2);
    this.pos.randomizeY(-1, 1.2);
  }
  
}