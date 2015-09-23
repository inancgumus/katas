// import Vector3D;

int       boxSize, boxRadian;

int       ballSize     = 50;

Vector3D  ballLoc      = new Vector3D();
Vector3D  ballVelocity = new Vector3D(5, 6, 7);

Vector3D  boxLoc       = new Vector3D(-width * QUARTER_PI, height * QUARTER_PI, QUARTER_PI / 4);
Vector3D  boxVelocity  = new Vector3D(0.0005, 0.0005, 0.0001);

void setup() {
  size(screen.width, screen.height, OPENGL);
  frameRate(60);
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

  if (shouldBounce(ballLoc.x)) ballVelocity.x *= -1;
  if (shouldBounce(ballLoc.y)) ballVelocity.y *= -1;
  if (shouldBounce(ballLoc.z)) ballVelocity.z *= -1;
}

boolean shouldBounce(float coord) {
  return coord > boxRadian - ballSize |
         coord < ballSize  - boxRadian;
}

void drawBox() {
  boxSize   = width - ballSize;
  boxRadian = boxSize >> 1;

  translate(width >> 1, height >> 1, -boxSize);

  rotateX(boxLoc.add(boxVelocity).x);
  rotateY(boxLoc.add(boxVelocity).y);
  rotateZ(boxLoc.add(boxVelocity).z);

  noFill();
  stroke(0);

  box(boxSize);
}

void drawBall() {
  translate(ballLoc.x, ballLoc.y, ballLoc.z);

  fill(255, 255, 0);
  noStroke();
  lights();

  sphere(ballSize);
}

void clear() {
  background(100);
}
