var wall,thiness



var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  thiness=createSprite(50,200,50,50);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(0,255,0);

  thiness.velocityX= 5;


  bullet=random(55,90);
speed=random(400,1500);
weight=random(22,82);

}

function draw() {
  background(0,255,0);  
if(wall.x - thiness.x < (thiness.width+wall.width)/2) 
{
  thiness.velocityX=0;

  var deformation=0.5 * width * speed * speed/22509;

  if (deformation > 180)
  {
    thiness.shapeColor=color(255,0,0);
  }

  if (deformation < 180 && deformation>100)
{
  thiness.shapeColor=color(255,0,0);
}

if (deformation > 100)
  {
    thiness.shapeColor=color(255,0,0);
  }

}

  drawSprites();
}