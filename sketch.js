var PLAY = 1;
var END = 0;
var gameState =1;


var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var floor;
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  monkey  = createSprite (50,320,20,35);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  survivalTime = 0;
  
  floor = createSprite (200,400,400,70)
  
  Foodgroup = new Group();
  obstaclegroup = new Group();
}


function draw() {
  background("white");
  
  if (gameState === PLAY){
    
    
    
    monkey.velocityY =  monkey.velocityY + 0.5;  
    spawnBanana();
    spawnObstacle();
  
  
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 300) {
      monkey.velocityY = -12;   
    }
    
    
    
    //if (monkey.isTouching (obstacleGroup)){
      //gameState = END;
    //}
    
  
    monkey.collide (floor);
    
    survivalTime = Math.ceil (frameCount/frameRate());
    textSize (20);
    text ("Survival Time: "+ survivalTime,100, 50);    
    }
  
  if (gameState === END) {
    monkey.velocityY = 0;
    banana.velocityX = 0;
    obstacle.velocityX = 0;
    
    banana.lifetime = -1
    obstacle.lifetime = -1 
    
  } 
  
  drawSprites();

}

function spawnBanana(){
  if (frameCount % 90 === 0){
      banana = createSprite (400,200,20,35);
      banana.addImage (bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -3;
      banana.lifetime = 300;
      
      }
}

function spawnObstacle(){
  if (frameCount % 100 === 0){
    obstacle = createSprite (400,340,20,35);
    obstacle.addImage (obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    obstacle.lifetime = 300 ;
    
    }
}






