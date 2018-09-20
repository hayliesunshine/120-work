function setup( ){
  // create a canvas to draw my self portrait on
  createCanvas( 600, 900);
}

function draw( ){

  // create a background for my canvas

  background( 'rgb( 160, 210, 16 )' );

  // create a sandbox for the entire character

  push();

    //move the entire grid for the character to the center of the canvas

    translate( 300, 450 );

push();{
  //hair
  strokeWeight(0);
  fill( 'rgb(100, 70, 50)');
  ellipse(0, -300, 200, 200);
  rect( -100, -300, 200, 500);

  pop();
  //end hair
}



    push();{

// legs
//left thigh
stroke( 0, 0, 0);
strokeWeight(30);
line( -10, 20, -20, 100);
//left knee
strokeWeight(40);
point( -21, 101);
//left shin
strokeWeight(30);
line( -21, 101, -21, 300);
//left foot
ellipse( -30, 300, 30, 20);
//right thigh
strokeWeight(30);
line( 10, 20, 20, 100);
//right knee
strokeWeight( 40);
point( 21, 101);
//right shin
strokeWeight(30);
line( 21, 101, 21, 300);
//right foot
ellipse( 30, 300, 30, 20);

pop( );
//legs end
}

push();{
  //arms
  //left upper arm
  stroke( 'rgb(0, 0, 0)');
  strokeWeight(20);
  line( -70,-115, -100, 0 );
  //left elbow
  strokeWeight( 30);
  point(-100, 0 );
  //left lower arm
  strokeWeight(20);
  line(-100, 0, -125, -60);
  //left hand
  strokeWeight(40);
  point(-125, -60);

  //right arm
  strokeWeight(20);
  line( 70, -115, 150, 20);
  //right hand
  strokeWeight(40);
  point(150, 20);

  pop();
  //arms end
}

push();{
  //neck
  fill( 'rgb(255, 218, 185)');
  strokeWeight(0);
  rect( -20, -300, 40, 150);
  pop();
  //end neck
}

push();{
//body
//shirt
stroke(0);
strokeWeight(0);
fill( 'rgb( 150, 90, 100)');
rect( -70, -150, 140, 170);
//shirt stripes
strokeWeight(7);
stroke(275, 275, 275);
line( -70, -125, 70, -125);
line( -70, -115, 70, -115);
line( -70, -105, 70, -105);

pop();
//body ends
}

push();{
  //head
  fill( 'rgb(255, 218, 185)');
  strokeWeight(0);
  ellipse(0, -300, 150, 175);
  pop();
  //end head
}

push();{
  //facial features
  //left eye
  strokeWeight(30);
  stroke( 'rgb(275, 275, 275)');
  point(-25, -315);
  strokeWeight(20);
  stroke( 'rgb(50, 255, 100)');
  point(-25, -315);
  strokeWeight(10);
  stroke( 'rgb(0,0,0)');
  point( -25, -315);

  //right eye
  strokeWeight(30);
  stroke( 'rgb(275, 275, 275)');
  point(25, -315);
  strokeWeight(20);
  stroke( 'rgb(50, 255, 100)');
  point( 25, -315);
  strokeWeight(10);
  stroke( 'rgb(0,0,0)');
  point( 25, -315);

  //left eyebrow
  strokeWeight(5);
  stroke( 'rgb(100, 70, 50)');
  line(-50, -335, -15, -345);
  //right eyebrow
  strokeWeight(5);
  stroke( 'rgb(100, 70, 50)');
  line(15, -345, 50, -335);

  //mouth
  fill(255, 0, 0);
//line 163 is from the p5.js reference page for a chord arc. This is creating the smile shape. It is a chord cut off of a circle, at a quarter pi.
  arc(0, -260, 80, 80, 0, PI + QUARTER_PI, CHORD);




}


}
