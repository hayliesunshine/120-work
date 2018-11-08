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
    trafficLight.push( new changingLight() );
  }
}

function draw() {
  background(bg_color);

  for (var i = 0; i< trafficLight.length; i++) {
    trafficLight[i].frame(); }
  }



class changingLight {
  constructor() {
    this.base_rect = rect(x, y, w, h);
    this.green_light = ellipse(w/2, h/4, w/2);
    this.yellow_light = ellipse(w/2, h/2, w/2);
    this.red_light = ellipse(w/2, h*(3/4), w/2);
    this.loc_x = 100 + w;
    this.loc_y = 100 + h;
    this.baseRect_color = (0);
    this.greenLight_color = (0, 255, 0);
    this.yellowLight_color = (255, 255, 0);
    this.redLight_color = (255, 0, 0);
    this.base_rectX = x;
    this.base_rectY = y;
    this.base_rectW = w;
    this.base_rectH = h;
    this.green_lightW = w;
    this.green_lightH = h;
    this.yellow_lightW = w;
    this.yellow_lightH = h;
    this.red_lightW = w;
    this.red_lightH = h;
    this.loc_x_W = w;
    this.loc_y_H = h;

  }
  frame() {
    this.display();
    this.move();
  }

  display() {

    push();

    translate(this.loc_x, this.loc_y);
    fill(this.baseRect_color);

    this.base_rect();

    //green light
    fill(this.greenLight_color);
    this.green_light();

    //yellow light
    fill(this.yellowLight_color);
    this.yellow_light();

    //red light
    fill(this.redLight_color);
    this.red_light();

    pop();
  }

  move() {
    x = x+1;

  }

}
