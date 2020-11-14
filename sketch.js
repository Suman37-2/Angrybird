const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){
   createCanvas(400,400);
   myEngine = Engine.create(); //myEngine.world
   myWorld = myEngine.world;
   
   box1=new Box(120,110,50,100);
   box2=new Box(100,200,50,40);

   ground1=new Ground(200,395,400,10);
}
function draw(){
    background(0);
    Engine.update(myEngine);
    
    box1.display();
    box2.display();

    ground1.display();
}