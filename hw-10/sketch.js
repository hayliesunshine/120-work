var trafficLight = [];
var num_of_lights = 36;
var bg_color;
var x = 0;
var y = 0;
var w = 60;
var h = 90;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg_color = color(51, 51, 51);

  for (var i=0; i < num_of_lights; i++) {
    trafficLight.push( new changingLight(0, height/num_of_lights*i) );
  }
}

function draw() {
  background(bg_color);

  for (var i = 0; i< trafficLight.length; i++) {
    trafficLight[i].frame();
  }
}


class changingLight {
  constructor(loc_x, loc_y) {

    this.loc_x = 100 + loc_x;
    this.loc_y = 100 + loc_y;
    this.baseRect_color = (0);
    this.greenLight_color = color(0, 255, 0);
    this.yellowLight_color = color(255, 255, 0);
    this.redLight_color = color(255, 0, 0);
    this.base_rectX = 0;
    this.base_rectY = 0;
    this.base_rectW = 60;
    this.base_rectH = 90;
    this.lightD = this.base_rectW * 0.4;


    this.moveAmt = random(1.0);

  }
  frame() {
    this.display();
    this.move();
  }

  display() {

    push();

    translate(this.loc_x, this.loc_y);
    fill(this.baseRect_color);

    rect(this.base_rectX, this.base_rectY, this.base_rectW, this.base_rectH);

    //green light
    fill(this.greenLight_color);
    ellipse(this.base_rectW/2, this.base_rectH/6, this.lightD);

    //yellow light
    fill(this.yellowLight_color);
    ellipse(this.base_rectW/2, this.base_rectH/6*3, this.lightD);

    //red light
    fill(this.redLight_color);
    ellipse(this.base_rectW/2, this.base_rectH/6*5, this.lightD);

    pop();
  }

  move() {
    this.loc_x = this.loc_x + this.moveAmt;

  }

}
