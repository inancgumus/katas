class Walker {
  
  Position pos;
  WalkingStrategy walkingStrategy;
  
  Walker(Position pos, WalkingStrategy walkingStrategy) {
    this.pos = pos;
    this.walkingStrategy = walkingStrategy;
  }
  
  void step() {
    walkingStrategy.step();
  }

  void display() {
    stroke(0);
    pos.display();
  }
  
}