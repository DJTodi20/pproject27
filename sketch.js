
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1
var bobObject2
var roof
var bobObject3
var bobObject4
var bobObject5
var rope
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bobObject1=new Bob (100,200)
bobObject2=new Bob (200,200)
bobObject3=new Bob (300,200)
bobObject4=new Bob (400,200)
bobObject5=new Bob (500,200)
roof=new Roof(350,100,500,10)
rope1= new Rope(bobObject1,roof,350,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  drawSprites();
 
}



 