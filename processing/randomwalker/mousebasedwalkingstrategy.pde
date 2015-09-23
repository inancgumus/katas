class MouseBasedWalkingStrategy extends WalkingStrategy {
  
  MouseBasedWalkingStrategy(Position pos) {
    super(pos);
  }
  
  void step() {
    float mouseXDirection = 0,
          mouseYDirection = 0;
    
    if (random(0, 1) <= 0.5) {
      mouseXDirection = mouseX - this.pos.x > 0 ? 1 : -1;
      mouseYDirection = mouseY - this.pos.y > 0 ? 1 : -1;
    }
    
    this.pos.x += random(-1, 1) + mouseXDirection;
    this.pos.y += random(-1, 1) + mouseYDirection;
  }
  
}