const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){
   createCanvas(1200,500);
   myEngine = Engine.create(); //myEngine.world
   myWorld = myEngine.world;
   
   box1=new Box(1000,400);
   box2=new Box(800,400);
   box3=new Box(1000,300);
   box4=new Box(800,300);
   box5=new Box(900,200);

   ground1=new Ground(600,490,1200,20);

   pig1=new Pig(900,400);
   pig2=new Pig(900,300);

   bird=new Bird(500,200);

   log1=new Log(900,380,300,PI/2);
   log2=new Log(900,280,300,PI/2);
   log3=new Log(800,150,150,PI/7);
   log4=new Log(1000,150,150,-PI/7);
}
function draw(){
    background(0);
    Engine.update(myEngine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground1.display();

    pig1.display();
    pig2.display();

    bird.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
}