var value = 0;
var shaker1;
var shaker2;
var shaker3;
function preload() {
  // put preload code here
  shaker1 = loadImage("./assets/shaker1.png");
  shaker2 = loadImage("./assets/shaker2.png");
  shaker3 = loadImage("./assets/shaker3.png");
  cocktail = loadImage("./assets/cocktail.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  setMoveThreshold(5);
}

function draw() {
  // put drawing code here
  push();
  if (value > 900){
      background('#dafdda');
        imageMode(CENTER);
        image(cocktail, width/2, height/2, windowWidth/2, windowHeight/2);
      } else if (value > 300 || value < 100) {
    background('#f5baba');
    imageMode(CENTER);
    image(shaker1, width/2, height/2, windowWidth/2, windowHeight/2);
        } else if(value > 450 || value < 250) {
            background('#dba6f3');
            imageMode(CENTER);
            image(shaker2, width/2, height/2, windowWidth/2, windowHeight/2);
          }  else if (value > 900 || value < 700){
              background('#e1fde1');
              imageMode(CENTER);
              image(shaker3, width/2, height/2, windowWidth/2, windowHeight/2);
              }
    pop();
    push();
    if(value > 900){
      textAlign(CENTER);
      textSize(200);
      fill('orange');
      text('Perfect', width/2, height/4.5);

    }
    else if (value > 400 || value < 100){
  textAlign(CENTER);
  textSize(32);
  fill('slategray');
  text('shake to create the perfect drink', width/3.5, 50);

    }
    pop();
}

function deviceShaken() {
  value = value + 10;
  if (value > 400) {
    value = 901;
  }
}
