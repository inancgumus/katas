class RandomWalkingStrategy extends WalkingStrategy {
  
  RandomWalkingStrategy(Position pos) {
    super(pos);
  }
  
  void step() {
    this.pos.randomize(-1, 1);
  }
  
}