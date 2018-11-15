let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let bubbleSize = random(10, 30);
  let b = new Bubble(random(width), random(height), bubbleSize);
  bubbles.push(b);
  bubbleTimer();
}

function bubbleTimer(){
  let bubbleSize = random(10, 30);
  let b = new Bubble(random(width), random(height), bubbleSize);
  bubbles.push(b);
  if(bubbles.length<=100){

    setTimeout(bubbleTimer, random(500));
  }
}




function draw() {
  background(255, 182, 193);
  for( let i=0; i<bubbles.length; i++) {
    bubbles[i].move();

    for( let otherBubble=0; otherBubble<bubbles.length; otherBubble++) {
      if(otherBubble != i){
        bubbles[i].bubbleCheck(bubbles[otherBubble]);

      }
    }


    bubbles[i].show();
  }

}
