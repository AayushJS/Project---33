const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,snowFall=[];

var bgImg,snowMan,snowManImg;

function preload(){
  bgImg = loadImage("snow1.jpg")
 snowManImg = loadImage("boy1.png")
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world  = engine.world 
  snowMan = createSprite(400, 450, 50, 50);
  snowMan.addImage(snowManImg)
  snowMan.scale=0.5

}

function draw() {
  background(bgImg);
  Engine.update(engine);
  if(frameCount%30===0)
  {
  snowFall.push(new Snow(random(200,1000),0))

  }  
console.log(snowFall)
  drawSprites();
  
  for(var i=0;i<snowFall.length;i+=1)
  {
    snowFall[i].display();
  }
}

function keyPressed(){
if(keyCode===LEFT_ARROW)
{
  snowMan.x = snowMan.x-10
}

if(keyCode===RIGHT_ARROW)
{
  snowMan.x = snowMan.x+10
}




}