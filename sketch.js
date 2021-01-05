const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,pig3;
var log1;
var box3,box4,log2,pig2,log3,log4,log5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //angleMode(RADIANS)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(200,height,2000,20)
    pig1=new Pig(810,350);
    log1=new Log(810,300,300,PI/2);

    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig2=new Pig(810,240);

    log2=new Log(810,180,300,PI/2);

    pig3=new Pig(810,170)
    log4=new Log(760,120,150,PI/4)
    log5=new Log(870,120,150,-PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    pig3.display();
    log4.display();
    log5.display();
}