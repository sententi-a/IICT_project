/*****꼭 index.html 파일에 import 해주세요!*****/

class People {
  constructor(_x, _y, _d, _s, _a) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.s = _s;
    this.a = _a;
  }
  
  display() {
    fill(0, this.a);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }
  
  move() {
    this.x += this.s;
    if(this.x >= width ) {
      this.x = 0;
    }

  }
}