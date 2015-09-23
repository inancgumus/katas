class Vector3D {
  
  float x = 0;
  float y = 0;
  float z = 0;
  
  Vector3D() {
  }
  
  Vector3D(float x, float y, float z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  Vector3D add(Vector3D v)  { 
    x += v.x; y += v.y; z += v.z;
    return this;
  }
  
}