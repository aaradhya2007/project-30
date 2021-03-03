const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;

var box1;

function setup(){
   var canvas=  createCanvas(1100,500);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(700,320,30,30)
    box2=new Box(735,320,30,30)
    box3=new Box(665,320,30,30)
    box4=new Box(630,320,30,30)
    box5=new Box(770,320,30,30)
    box6=new Box(770,320,30,30)
    box7=new Box(630,320,30,30)
    box8=new Box(735,320,30,30)
    box9=new Box(700,320,30,30)
    box10=new Box(665,320,30,30)
    box11=new Box(770,320,30,30)
    box12=new Box(630,320,30,30)
    box13=new Box(735,320,30,30)
    box14=new Box(700,320,30,30)
    box15=new Box(665,320,30,30)
    box16=new Box(770,320,30,30)
    box17=new Box(630,320,30,30)
    box18=new Box(735,320,30,30)
    box19=new Box(700,320,30,30)
    box20=new Box(665,320,30,30)

polygon=new Polygon(200,200,50,50)
rope=new Rope(polygon.body,{x:400,y:150})
    ground=new Ground(700,350,200,10)
}
function draw(){
    background("cyan")
    Engine.update(engine)
    box1.display();
    box2.display(); 
    box3.display(); 
    box4.display();
    box5.display();
    box6.display(); 
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display(); 
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display(); 
    box17.display();
    box18.display();
    box19.display();
    box20.display();

   polygon.display();

rope.display();
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly()
}
function keyPressed(){
if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:200,y:200})
rope.attach(polygon.body)
}
}