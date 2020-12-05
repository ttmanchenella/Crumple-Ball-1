const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup() {
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,480,200,20);
    box2 = new Box(500,450,20,200);
    box3 = new Box(700,450,20,200);
    ground = new Ground(500,500,1000,20);
    paper = new Paper(100,480,20); 
}

function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    paper.display();
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-20});
    }
}