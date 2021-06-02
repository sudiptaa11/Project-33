const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BackgroundImg;

var boyJumping;

var girlJumping;

var boy, girl;

var invisibleGround;

var invisibleBarrier;

var invisibleBarrier2;

var snow= [];

var breeze;

function preload(){
  BackgroundImg = loadImage("snow1.jpg");

  boyJumping = loadImage("boyJump.png");

  girlJumping = loadImage("girlJump.png");

  breeze = loadSound("Breeze sound.mp3")

}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);

  boy = createSprite(600,200,30,30);
  boy.addImage(boyJumping);
  boy.scale = 0.05;
  boy.velocityY = 10;

  girl = createSprite(200,300,30,30);
  girl.addImage(girlJumping);
  girl.scale = 0.1;
  girl.velocityY = -10;

  invisibleGround = createSprite(400,350,800,5);
  invisibleGround.visible = false;

  invisibleBarrier = createSprite(400,10,800,5);
  invisibleBarrier.visible = false;

  invisibleBarrier2 = createSprite(400,40,800,5);
  invisibleBarrier2.visible = false;

  breeze.play();
}

function draw() {
  background(BackgroundImg);  
  Engine.update(engine);

  boy.bounceOff(invisibleGround);
  boy.bounceOff(invisibleBarrier);

  girl.bounceOff(invisibleGround);
  girl.bounceOff(invisibleBarrier2);

  if(frameCount%60 === 0){
    snow.push(new Snow((random(100,700)),0,50,50));
  }

  for(var i = 0; i<snow.length; i++){
    snow[i].display();
  }
  
  drawSprites();
}