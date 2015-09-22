class Vector {
  
  float x = 0;
  float y = 0;
  
  Vector(float x, float y) {
    this.x = x;
    this.y = y;
  }
  
  void add(Vector v)  { 
    x += v.x; y += v.y;
  }
  
  boolean xIsWithin (float min, float max) { return isWithin(this.x, min, max); }
  boolean yIsWithin (float min, float max) { return isWithin(this.y, min, max); }

  void flipX() { this.x = flip(this.x); }
  void flipY() { this.y = flip(this.y); }
  
  boolean isWithin(float value, float min, float max) { 
    return value < min || value > max;
  }
  
  float flip(float value) { 
    return value * -1;
  }
  
}