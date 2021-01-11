const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1
var log1

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,500,70,70);
    box2 = new Box(920,500,70,70);
    
    pig1=new Pig (810,500);
    log1=new log (810,400,300,PI/2);

    box3 = new Box(700,350,70,70);
    box4 = new Box(920,350,70,70);

    pig2=new Pig (810,350);
    log2=new log (810,300 ,300,PI/2);

    box5 = new Box(810,200,70,70);
    log3=new log (750,230 ,150,PI/5);
    log4=new log (850,230 ,150, -PI/5);
}
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display()
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();

}