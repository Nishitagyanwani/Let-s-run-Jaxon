var Runner;
var path;
var coin;
var energyDrink;
var bomb;

function preload(){
  //pre-load images
  pathimg=loadImage("path.png");
  runner= loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
path.addImage(pathimg);
path.velocityY = 4;
path.scale = 1.2;

Runner = createSprite(100,340,30,30);
Runner.scale = 0.08;
Runner.addAnimation("jack running",runner);

leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;
// coin = createSprite(50,30);
// energy = createSprite(100,50);
// bomb= createSprite(100,70);
}

function draw() {
  background(0);
if(path.y > 400){
 path.y = height/2;
}
Runner.x = World.mouseX;
edges = createEdgeSprites();
Runner.collide(leftBoundary);
Runner.collide(rightBoundary);
Runner.collide(edges[3]);
drawSprites();
}
