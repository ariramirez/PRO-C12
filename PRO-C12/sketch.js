var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  
  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,600);
 //crear sprite de path (camino) 
 path = createSprite(400,400,20,20);
 //agregar imagen de path
 path.addImage("pathImg",pathImg);
 //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.scale=1.2;
 path.velocityY = -4;
 
 //crear sprite de boy (niño)
 boy = createSprite (200,460,20,20);
 //agregar animación para boy
 boy.addAnimation("boyImg",boyImg);
 boy.scale=0.08;
  
 // crear  left Boundary (límite izquierdo)
 leftBoundary=createSprite(0,0,100,800);
 //establecer visibilidad como false (falso) para límite izquierdo
 invisibleLeft = createSprite(200,180,400,10);
 invisibleLeft.visible = false;
 //crear right Boundary (límite derecho)
 rightBoundary=createSprite(410,0,100,800);
 //establecer visibilidad como false (falso) para límite derecho
 invisibleRight = createSprite(200,180,400,10);
 invisibleRight.visible = false;
}

function draw() {
  background(180);
  
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x=World.mouseX;
  
 
  // colisión de boy con los límites derecho e izquierdo invisibles 
   boy.collide(edges[3]);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
 
  edges= createEdgeSprites();
  drawSprites();
}
