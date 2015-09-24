int[]      randomCounts;
Randomizer randomizer;
boolean    stop = false;

void setup() {
  size(800, 125);
  frameRate(2500);
  randomCounts = new int[100];
  //randomizer   = new UniformRandomizer();
  randomizer   = new GaussianRandomizer();
  //randomizer   = new MonteCarloRandomizer();
}

void draw() {
  background(255);
  
  int len = randomCounts.length;
    int index = randomizer.randomize(len);
  
  if (randomCounts[index] > height - 25) { stop = true;           }
  if (!stop)                             { randomCounts[index]++; }

  int w = width / len;
  for (int x = 0; x < len; x++) {
    int count = randomCounts[x];
    
    fill(count * 2, count, count * 3);
    rect(x * w, height - count, w - 1, count);
  }
}