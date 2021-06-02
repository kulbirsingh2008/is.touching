var a,b;


function setup() {
  createCanvas(800,400);

 a = createSprite(400, 200, 50, 50);
 a.shapeColor = "green";

 b = createSprite(600,400,100,50);
 b.shapeColor = "green";

}

function draw() {
  background(0);  

b.x = World.mouseX;
b.y = World.mouseY;

if (b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 && a.y-b.y<50 && b.y-a.y < 50){
  a.shapeColor = "blue";
  b.shapeColor = "blue";
}
else{
  a.shapeColor = "green"
  b.shapeColor = "green"
}

console.log(b.y-a.y);
  drawSprites();
}