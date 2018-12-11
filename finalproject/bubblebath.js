
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.color = color(0,0,0);
    if( this.r < 25 ){
      this.color = color(152, 251, 152);
    }
    else {
      this.color = color(135, 206, 250);
    }

  }

  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);

  }

  show() {
    stroke(255);
    fill(this.color);
    ellipse(this.x, this.y, this.r*2);

  }



  bubbleCheck(b1) {
    let d = dist(b1.x, b1.y, this.x, this.y);
    let maxDist = b1.r + this.r;

    if (d<=maxDist) {
      this.color = color( random(255), random(255), random(255) );
    }
  

  }

}
