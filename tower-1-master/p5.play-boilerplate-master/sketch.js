const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;
var table1,table2,block,enemy,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,sling;
var polygonimg;

function preLoad(){
  polygonimg = loadImage("sprites/polygon.png")
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  table1 = new Table(200,200,200,20);
  block = new Block(250,150);
  sling = new Sling(block.body ,{x:200,y:150});
  table2 = new Table(800,250,200,20);
  enemy = new Enemy(720,200,50,50);
  enemy2 = new Enemy(770,200,50,50);
  enemy3 = new Enemy(770,200,50,50);
  enemy4 = new Enemy(820,200,50,50);
  enemy5 = new Enemy(870,200,50,50);
  enemy6 = new Enemy(820,210,50,50);
  enemy7 = new Enemy(790,150,50,50);

}

function draw() {
  background("GREEN");  
  Engine.update(engine);
  table1.display();
  table2.display();
  block.display();
  sling.display();
  enemy.display();
  enemy2.display()
  enemy3.display()
  enemy4.display()
  enemy5.display()
  enemy6.display();
  enemy7.display();
}


function mouseDragged (){

  Matter.Body.setPosition(block.body,{ x:mouseX , y:mouseY})

}

function mouseReleased(){

sling.fly();

}

function keyPressed (){

if(keyCode === 32){

  sling.attach(block.body);

}

}


