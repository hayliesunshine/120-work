function setup() {
  createCanvas( windowWidth, windowHeight);
  frameRate(3);
}

function draw() {
  background (0);

var r = random (50, 100);
var dX = 24;
var dY = 24;
var x = random(0, 1);
var y = random(0, 1);
var radius1 = random(30, 100);
var radius2 = random (30, 100);

var quoteArray = [ 'Sweet Dreams', 'Sleepy Time', 'The Stars Dance' ];


textSize(100);
stroke(218, 112, 214);
fill(218, 112, 214);
text(random(quoteArray), width/4, height/2);

fill(255);
  push();
  translate ( x*windowWidth, y*windowHeight );
  star( (x+100), (y+100), radius1, radius2, 5 );
  pop();

  push();
  translate ( x*windowWidth, y*windowHeight );
  star( (x+100), (y+100), radius1, radius2, 5 );
  pop();

  push();
  translate ( x*windowWidth, y*windowHeight );
  star( (x+100), (y+100), radius1, radius2, 5 );
  pop();

  push();
  translate ( x*windowWidth, y*windowHeight );
  star( (x+100), (y+100), radius1, radius2, 5 );
  pop();

  push();
  translate ( x*windowWidth, y*windowHeight );
  star( (x+100), (y+100), radius1, radius2, 5 );
  pop();

  push();
  translate ( x*windowWidth, y*windowHeight );
  star( (x+100), (y+100), radius1, radius2, 5 );
  pop();

  push();
  translate ( x*windowWidth, y*windowHeight );
  star( (x+100), (y+100), radius1, radius2, 5 );
  pop();


}

//the following function star code is from p5js.org. In order to create a star, you have to rotate triangles around a center point, or circle, as there is no built in star shape.
//this function uses pi values to dictate the angle that the points of the star should appear, as well as the radian values of cos(a) and sin(a).
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function planet(r) {
  fill(57, 255, 20);
  sphere(r);
  endShape(CLOSE);
}
