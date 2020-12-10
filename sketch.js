var movingRect, fixedRect;
var gameObject, gameObject2, gameObject3;


function setup() {
  createCanvas(1200,800);
  

  fixedRect = createSprite(600,400,50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject = createSprite(100,100,50,50);
  gameObject.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  
}

function draw() {
  background(0); 
movingRect.x = mouseX; 
movingRect.y = mouseY; 

console.log(movingRect.x - fixedRect.x);
 
if(isTouching(movingRect, gameObject)){

movingRect.shapeColor = "red";
gameObject.shapeColor = "red";
}
else{

movingRect.shapeColor = "green";
gameObject.shapeColor = "green";
}

  drawSprites();
}

