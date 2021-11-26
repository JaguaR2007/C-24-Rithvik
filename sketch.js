const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var box1,box2,box3,box4;
var log1,log2,log3,log4;

var pig1, pig2;

var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(715,390,70,70);
    box2 = new Box(885,390,70,70);
    box3 = new Box(715,350,70,70);
    box4 = new Box(885,350,70,70);

    log1 = new Log(805,300,230,PI/2);
    log2 = new Log(805,220,230,PI/2);
    log3 = new Log(790,210,210,PI/7);
    log4 = new Log(835,210,210,-PI/7);

    pig1 = new Pig(810,390);
    pig2 = new Pig(810,280);

    console.log(pig2.positionY);    

    bird = new Bird(100,100);
    ground = new Ground(600,height,windowWidth,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}