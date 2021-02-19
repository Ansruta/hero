const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

function preload() {
//preload the images here
bg=loadImage('images/GamingBackground.png');
}

function setup() {
  createCanvas(1000, 700);
  engine=Engine.create();
  world=engine.world;
  // create sprites here
g=new ground(600,600,1200,10);
h=new hero(220,470);
a=new fly(h.body,{x:220,y:150})
m=new monster(770,300)
b1=new box(500,620)
b2=new box(500,560)
b3=new box(500,500)
b4=new box(500,430)
b5=new box(500,370)

a1=new box(430,620)
a2=new box(430,560)
a3=new box(430,500)
a4=new box(430,430)
a5=new box(430,370)

c1=new box(560,620)
c2=new box(560,560)
c3=new box(560,500)
c4=new box(560,430)
c5=new box(560,370)

}

function draw() {
  background(bg);
  Engine.update(engine);
 // console.log(mouseX);
  //console.log(mouseY)

g.display();
h.display();
a.display();
m.display();

b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
   
    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();
    
    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();
    
   
}
function mouseDragged(){
  Matter.Body.setPosition(h.body,{x:mouseX,y:mouseY})
}

