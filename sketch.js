const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var backimg,bg;
var gameState="onsling";

function preload(){
getTime();
}

function setup(){
   createCanvas(1200,500);
   myEngine = Engine.create(); //myEngine.world
   myWorld = myEngine.world;
   
   box1=new Box(1000,445);
   box2=new Box(800,445);
   pig1=new Pig(900,447);
   log1=new Log(900,400,300,PI/2);

   box3=new Box(1000,355);
   box4=new Box(800,355);
   pig2=new Pig(900,357);
   log2=new Log(900,310,300,PI/2);

   box5=new Box(900,265);
   log3=new Log(820,265,150,PI/7);
   log4=new Log(980,265,150,-PI/7);

   ground1=new Ground(600,490,1200,20);
   ground2=new Ground(200,398,350,250);

   bird=new Bird(500,200);

   sling1=new Slingshot(bird.body,{x:300,y:100});
  
}
function draw(){
    if(backimg){
     background(backimg);
    } 
    else{
     background("lightblue");    
    }
    
    Engine.update(myEngine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground1.display();
    ground2.display();

    pig1.display();
    pig2.display();

    bird.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    sling1.display();
    
}

function mouseDragged(){
     if(gameState !== "launched"){
     Matter.Body.setPosition(bird.body,{x: mouseX,y: mouseY});  
} 
}

function mouseReleased(){
     sling1.fly();
     gameState="launched";
}

function keyPressed(){
     if(keyCode===32){
          sling1.attach(bird.body);
          Matter.Body.setPosition(bird.body,{x:300,y:200});
     }
}

async function getTime(){
     var link1= await fetch("http://worldclockapi.com/api/json/est/now");
     var link1j= await link1.json();
     var dt= link1j.currentDateTime;
     var hr= dt.slice(11,13);

     if(hr>=06 && hr<=18){
         bg="sprites/bg2.jpg"; 
     }
     else{
          bg="sprites/bg.png";
     }
     backimg=loadImage(bg);
}