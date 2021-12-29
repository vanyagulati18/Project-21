var PLAY = 1;
var END = 0;
var gameState = PLAY;


var girl_running,girl;
var ground,groundImage;
var backgroundImage;
var invisibleGround;
var trash,trash1,trash2,trash3,trash4,trashGroup;
var gameOver,gameOverImage;



function preload(){
girl_running = loadAnimation("girl1.png","girl 2.png","girl3.png","girl4.png","girl5.png","girl6.png","girl7.png","girl8.png","girl9.png","girl10.png");
groundImage = loadImage("ground.png")
backgroundImage = loadImage("background2.png")
trashImage1 = loadImage("trash1.png")
trashImage2 = loadImage("trash2.png")
trashImage3 = loadImage("trash3.png")
trashImage4 = loadImage("trash4.png")
gameOverImage = loadImage("gameOver.png")


}

function setup() {
 createCanvas(windowWidth,windowHeight);
 
 ground = createSprite(300,700,windowWidth,10)
 ground.addImage(groundImage)
 ground.scale = 1
 ground.velocityX = -5;

invisibleGround = createSprite(300,630,windowWidth,10);
invisibleGround.visible = false;

 girl = createSprite(50,630,20,50);
 girl.addAnimation("running",girl_running);
 girl.scale = 0.8;

 gameOver = createSprite(600,200)
 gameOver.addImage(gameOverImage)
 gameOver.scale =1
 gameOver.visible = false;

 




 trashGroup = new Group();
}

function draw() {
 background(backgroundImage);
 
 
 if(gameState === PLAY){

if(keyDown("space")&& girl.y>210){
    girl.velocityY= -10
}
 if(ground.x<0){
     ground.x = ground.width/2;
 }
 

 if(keyDown("space")){
     girl.velocityY = -15;
 }
 if(trashGroup.isTouching(girl)){
    gameState =END;
 }
 girl.velocityY = girl.velocityY +0.8;

 spawnTrash();
}

if(gameState === END){
    ground.velocityX = 0
    trashGroup.setVelocityXEach(0);
    gameOver.visible = true;
    

}
girl.collide(invisibleGround)
 drawSprites();
}


function spawnTrash(){
if(frameCount % 120 === 0){
    trash = createSprite(600,570,20,20)
    trash.velocityX = -5

    var rand = Math.round(random(1,4))

 switch(rand){
    case 1: trash.addImage(trashImage1)
    break;
   
    case 2: trash.addImage(trashImage2)
    break;
    
    case 3: trash.addImage(trashImage3)
    break;

    case 4: trash.addImage(trashImage4)
    break;
    
     default: break;

     
    }
    trashGroup.add(trash);
    trash.scale = 0.6;
    trash.lifetime = 300;
    trash.depth = girl.depth;
    girl.depth +=1; 
 }

 
}