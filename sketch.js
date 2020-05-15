var sticks,sticks2,sticks3,sticks4,sticks5;
var stones,triangle;


function setup() {
  createCanvas(800,400);
  

  sticks=createSprite(100,395,40,600);
  sticks.shapeColor="black";
  
  sticks2=createSprite(140,380,40,155);
  sticks2.shapeColor="red";

  sticks2=createSprite(180,395,40,500);
  sticks2.shapeColor="orange";
  
  sticks3=createSprite(220,370,40,199);
  sticks3.shapeColor="green";

  sticks4=createSprite(260,395,40,400);
  sticks4.shapeColor="yellow";
  
  sticks5=createSprite(300,380,40,155);
  sticks5.shapeColor="brown";

  sticks5=createSprite(340,380,40,600);
  sticks5.shapeColor="violet";


}

function draw() {
  background("blue");  


  fill ('orange');

  triangle(75, 100, 100, 10, 140, 100);

  triangle(336, 130, 340, 10, 360, 110);

  drawSprites();


}