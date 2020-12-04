
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, dustbin, world, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	dustbin = new Dustbin(720, 390, 100, 10);
	paper = new Paper(100, 300, 10,);
	ground = bodies.rectangle(width/2, 400, width, 10,isStatic = true);
	
    World. add(world, ground);
   	}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();

  ground.display();
  paper.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		matter.Body.applyForce(paperObject, bodyObject, body.position, {x : 85, y :85});
	}
}







