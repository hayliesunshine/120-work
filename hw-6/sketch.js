//defining giant circle
var constraint = {};
//assigning qualities to constraint
 constraint.shape = ellipse( 0, 0, windowWidth/2, windowHeight/2);

//defining ring variable
//instantiating the variable as an object
var ring = {};

  //assigning qualities to the object
  ring.bigSize = 60;
  ring.smallSize = 40;
  ring.locX = 0;
  ring.locY = 0;
  ring.red = floor( random(256) );
  ring.green = ('0');
  ring.blue = floor( random(256) );
  ring.greenSmall = floor( random(100) );


  function setup() {
    //createCanvas
    createCanvas(windowWidth, windowHeight);
    //set frame rate
    frameRate(16);
    //black background
    background ( '0' );

    constraint.shape = ellipse( 0, 0, windowWidth/2, WindowHeight/2);

    //starting position for ring in center of screen
    ring.locX = width/2;
    ring.locY = height/2;
  }

  function draw() {
    //map function

    //properties of enclosing circle
    noFill();
    stroke(circleStroke);


    //draw the ring
    //position at ring location
    draw(constraint);
    translate( ring.locX, ring.locY);

    //fill color for big ring
    fill( rgba( ring.red, ring.green, ring.blue) );
    //set stroke to none
    stroke(0);
    //draw large circle
    ellipse(ring.locX, ring.locY, ring.bigSize);

    //fill color for small circle
    fill( rgba( ring.red, ring.greenSmall, ring.blue) );
    //draw small circle
    ellipse( ring.locX, ring.locY, ring.smallSize);

    //update pos
    ring.locX += random(width, height);
    ring.locY += random(width, height);

  }
