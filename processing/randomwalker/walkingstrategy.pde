abstract class WalkingStrategy {
  
  Position pos;
  
  WalkingStrategy(Position pos) {
    this.pos = pos;
  }
  
  abstract void step();
  
}