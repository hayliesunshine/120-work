let img;
var song;


//loading image
function preload() {
  img = loadImage('tub.jpg');
  song = loadSound('song.mp3', loaded);
}

//creating canvas,
function setup() {
  createCanvas(1280, 1080);

}

function loaded() {
  song.play();
  song.loop();
}


//draw background and candles
function draw() {
  background(img);

  fill(215, 161, 237);
  noStroke();
  rect(360, 320, 20, 40);
  rect(920, 320, 20, 40);

  fill(226, 173, 74);
  ellipse(370, 310, 20);
  ellipse(930, 310, 20);

  fill(109, 183, 186);
  textSize(35);
  text('Close your eyes, take a deep breathe, and relax your muscles.', 200, 200);

  text('Enjoy your candle-lit bath.', 450, 900);
}
