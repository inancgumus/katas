int       boxSize, boxRadian;

int       ballSize     = 50;
boolean   bounced      = false;

Vector3D  ballLoc      = new Vector3D();
Vector3D  ballVelocity = new Vector3D(5, 10, 15);

Vector3D  boxLoc       = new Vector3D(-width * QUARTER_PI, height * QUARTER_PI, QUARTER_PI / 4);
Vector3D  boxVelocity  = new Vector3D(0.0005, 0.0005, 0.001);

void setup() {
  size(800, 600, OPENGL);
  frameRate(60);
  surface.setResizable(true);
  clear();
} 

void draw() {
  clear();
  
  drawBox();
  moveBall();
  drawBall();
}

void moveBall() {
  ballLoc.add(ballVelocity);
  
  bounced = false;
  
  if (shouldBounce(ballLoc.x)) { bounced = true; ballVelocity.x *= -1; }
  if (shouldBounce(ballLoc.y)) { bounced = true; ballVelocity.y *= -1; }
  if (shouldBounce(ballLoc.z)) { bounced = true; ballVelocity.z *= -1; }
}

boolean shouldBounce(float coord) {
  return coord > boxRadian - ballSize | 
         coord < ballSize  - boxRadian;
}

void drawBox() {
  boxSize   = width - ballSize;
  boxRadian = boxSize >> 1;
  
  translate(width >> 1, height >> 1, -boxSize);
  
  rotateBox();
  paintBox();
  
  box(boxSize);
}

void rotateBox() {
  rotateX(boxLoc.add(boxVelocity).x);
  rotateY(boxLoc.add(boxVelocity).y);
  rotateZ(boxLoc.add(boxVelocity).z);
}

void paintBox() {
  if (bounced) {
    stroke(255, 255, 0);
  } else {
    noFill();
    stroke(0);
  }
}

void drawBall() {
  translate(ballLoc.x, ballLoc.y, ballLoc.z);
  
  fill(255, 255, 0);
  noStroke();
    
  directionalLight(255, 255, 255, ballLoc.x, ballLoc.y, ballLoc.z);
  ambientLight(0, 0, 0, ballVelocity.x, ballVelocity.y, ballVelocity.z);

  sphere(ballSize);
}

void clear() {
  background(100);
}