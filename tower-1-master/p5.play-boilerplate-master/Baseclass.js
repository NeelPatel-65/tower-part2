class Baseclass{
    constructor(x,y,width,height,option){

        

    this.body = Bodies.rectangle(x,y,width,height,option);
    this.image = loadImage("sprites/sling.png");
    this.width = width;
    this.height = height;
    World.add(world,this.body)

    
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}