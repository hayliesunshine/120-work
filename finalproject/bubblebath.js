
class bubblebath {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.color = color(0,0,0);
    if( this.r < 25 ){
      this.color = color(230, 230, 250);
    }
    else {
      this.color = color(255, 240, 245);
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


}
