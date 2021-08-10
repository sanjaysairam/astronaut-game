var bg,bgImg;
var sleepImg;
var brushImg;
var gymImg;
var eatImg;
var drinkImg;
var moveImg;
var astro;

function preload(){
  bgImg = loadImage("images/iss.png");
  sleepImg = loadAnimation("images/sleep.png");
  brushImg = loadAnimation("images/brush.png");
  gymImg = loadAnimation("images/gym11.png","images/gym12.png");
  eatImg = loadAnimation("images/eat1.png","images/eat2.png");
  drinkImg = loadAnimation("images/drink1.png","images/drink2.png");
  bathImg = loadAnimation("images/bath1.png","images/bath2.png");
  moveImg = loadAnimation("images/move.png","images/move1.png","images/move.png","images/move1.png");
}

function setup() {
  createCanvas(1000,600);

  bg = createSprite(475, 300, 100, 100);
  bg.addImage(bgImg);
  bg.scale = 0.250;

  astro = createSprite(500,430);
  astro.addAnimation("sleeping",sleepImg);
  astro.scale = 0.100;
}

function draw() {
  background("black");  

  edges = createEdgeSprites();
  astro.bounceOff(edges);

  drawSprites();
  
  if (keyDown("UP_ARROW")){
    astro.addAnimation("brushing",brushImg);
    astro.changeAnimation("brushing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astro.addAnimation("gymming",gymImg);
    astro.changeAnimation("gymming");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astro.addAnimation("eating",eatImg);
    astro.changeAnimation("eating");
    astro.y = 350;
    astro.velocityX = -1;
    astro.velocityY = -1;
  }
  
  
  
  if (keyDown("LEFT_ARROW")){
    astro.addAnimation("bathing",bathImg);
    astro.changeAnimation("bathing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

 

  if(keyDown("m")){
    astro.addAnimation("moving",moveImg);
    astro.changeAnimation("moving");
    astro.y = 350;
    astro.velocityX = -1;
    astro.velocityY = -1;
  }
  }

