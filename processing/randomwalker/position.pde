class Position {
  
  float x;
  float y;
  int[] colour;
  
  Position(float x, float y) {
    this.x = x;
    this.y = y;
    this.colour = new int[] { int(random(0, 255)), int(random(0, 255)), int(random(0, 255)) };
  }
  
  void randomize (float min, float max) { randomizeX(min, max); randomizeY(min, max); }
  void randomizeX(float min, float max) { this.x += random(min, max); }
  void randomizeY(float min, float max) { this.y += random(min, max); }

  void display() {
    stroke(colour[0], colour[1], colour[2]);
    point(this.x, this.y);
  }

}