var car,wall,speed,weight



function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
car.shapeColor="white"
wall=createSprite(600,200,20,200)
wall.shapeColor="grey"
speed=random(50,99)
weight=random(500,1600)
car.velocityX=speed
}

function draw() {
  background(0,0,0);  
  if (wall.x-car.x<car.width/2+wall.width/2){
var deformation=0.5*weight*speed*speed/22509
if(deformation>180){
  car.shapeColor="red"
}
if(deformation>180&&deformation<100){
  car.shapeColor="yellow"
}
if(deformation<100){
  car.shapeColor="green"
}


  }
  drawSprites();
}