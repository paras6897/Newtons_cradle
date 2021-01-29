const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, body;

//var bob1;

function preload(){

}

function setup(){
  var canvas = createCanvas(windowWidth/1, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  //fill("black");
  bob1 = new Bob(300,150);
  rope1 = new Sling(bob1.body,{x:300,y:75});
  bob2 = new Bob(350,150);
  rope2 = new Sling(bob2.body,{x:350,y:75});
  bob3 = new Bob(400,150);
  rope3 = new Sling(bob3.body,{x:400,y:75});
  bob4 = new Bob(450,150);
  rope4 = new Sling(bob4.body,{x:450,y:75});
  bob5 = new Bob(500,150);
  rope5 = new Sling(bob5.body,{x:500,y:75});
  Engine.run(engine);
}

function draw(){
  background("lightGray");
  Engine.update(engine);
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  bobMove();

}

function bobMove(){
  if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:0}); 
	}
}