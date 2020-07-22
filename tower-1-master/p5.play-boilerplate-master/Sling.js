class Sling {

    constructor(bodyA,pointB) {
    
    var option = {
    
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    
    
    this.slingimg = loadImage("sprites/sling.png");
    
    this.pointB = pointB;
    this.sling = Constraint.create(option);
    World.add(world,this.sling);
    
    
    }
    
    attach (body){
    
    this.sling.bodyA = body;
    
    
    }
    
    fly() {
    
    this.sling.bodyA = null;
    
    
    }
    display(){
    
     image(this.slingimg,200,20);
   
    
        
      if (this.sling.bodyA){
          push();
        strokeWeight(4);
    
    
        stroke(48,22,8)
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y-3);
        image(this.slingimg,200,150);
        pop();
        
    }
    
    
        
    
    
    
    
    
    }
    
    
    }