function setup() {
  createCanvas( windowWidth, 600);
}

function draw() {
  let rectH = 20;
  let rectW = windowWidth;

  background(0);

  for ( let y = 0; y < height; y += rectH) {
    fill( random (255), random(255), random (255) );
    rect( 0, y, rectW, y, rectW, y+20, 0, y+20);
  }

  textSize(100);
  fill(0);
  text ('FREE TO BE ME', width/9, height/2);
}
