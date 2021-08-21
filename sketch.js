var bg,bgimage,ship,shipimage

function preload(){
  bgimage=loadImage("sea.png")
  shipimage=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  

}

function setup(){
  createCanvas(400,400);
  
  bg=createSprite(200,200)
  bg.addImage("bg",bgimage)
  bg.scale=0.3

  ship=createSprite(200,200)
  ship.addImage("ship",shipimage)
  ship.scale=0.3
  ship.x=200
  edges = createEdgeSprites();
  



}

function draw() {
  background("blue");
  console.log(ship.y)

  if(keyDown("space")){
    ship.velocityY = -10;

  }
  ship.velocityY = ship.velocityY + 0.5;
  ship.collide(edges[3])


 drawSprites()


}