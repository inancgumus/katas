Walker[] walkers;

void setup() {
  size(640, 480);
  background(255);
  frameRate(2000);
  init();
}

void init() {
  Position p1 = new Position(width / 2, height / 2);
  Position p2 = new Position(width / 2, 50);
  Position p3 = new Position(width / 2, 150);
  Position p4 = new Position(width / 4, 150);
  Position p5 = new Position(width / 4, 200);
  
  walkers = new Walker[5];
  walkers[0] = new Walker(p1, new DownRightWalkingStrategy(p1));
  walkers[1] = new Walker(p2, new RandomWalkingStrategy(p2));
  walkers[2] = new Walker(p3, new SinusWalkingStrategy(p3));
  walkers[3] = new Walker(p4, new MouseBasedWalkingStrategy(p4));
  walkers[4] = new Walker(p5, new MonteCarloWalkingStrategy(p5));
}

void draw() {
  for (int i = 0; i < walkers.length; i++) {
    Walker w = walkers[i];
    
    w.step();
    w.display();
  }
}