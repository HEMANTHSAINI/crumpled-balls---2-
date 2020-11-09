const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;

function preload() {
	dustbinImg = loadImage("DUSTBIN.png");
}

function setup() {
	createCanvas(1100,700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	dustbin1 = new Dustbin(770, 463, 10, 200);
	dustbin2 = new Dustbin(950, 463, 10, 200);
	dustbin3 = new Dustbin(305.5, 583, 260, 50);
	ground = new Ground(450, 580, 1100, 50);
	paper = new Paper(70, 540, 75);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(220);
	fill("yellow");

	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	image(dustbinImg,860,425,200,238);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 600, y: -1000 });
	}
}

