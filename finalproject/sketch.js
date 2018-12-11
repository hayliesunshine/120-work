let img;

function preload() {
  img = loadImage('G:\tub.jpg');
}

function setup() {
  createCanvas(1280, 1080);
}

function draw() {
  image(img, 0,0);
}
