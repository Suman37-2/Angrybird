class Slingshot{
    constructor(bodyA,pointB){
        var con={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length:25  
          }
          this.image1=loadImage("sprites/sling1.png");
          this.image2=loadImage("sprites/sling2.png");
          this.image3=loadImage("sprites/sling3.png");

          this.pointB=pointB;
          this.sling=Constraint.create(con);
          World.add(myWorld,this.sling);  
    }

    fly(){
      this.sling.bodyA=null;  
    }

    attach(body){
      this.sling.bodyA=body;
    }

    display(){

     image(this.image1,305,75);
     image(this.image2,275,75);
     

     if(this.sling.bodyA){
     var pointA=this.sling.bodyA.position;
     var pointB=this.pointB;
     push();
     stroke("#301608");
     strokeWeight(5);
     line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
     line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
     image(this.image3,pointA.x-30,pointA.y-10,15,30); 
     pop();  
    }
  }
}
