Vector location;
Vector velocity;

void setup() {
  size(640, 480, P3D);
  frameRate(60);
  surface.setResizable(true);
  clear();
  
  location = new Vector(100, 100);
  velocity = new Vector(2.5, 5); 
} 

void draw() {
  clear();
  
  if (location.xIsWithin(0, width)) {
    velocity.flipX();
  }
  if (location.yIsWithin(0, height)) {
    velocity.flipY();
  }
  
  location.add(velocity);
  
  stroke(0);
  fill(175);
  
  ellipse(location.x, location.y, 30, 30);
}
  
void clear() {
  background(100);
}