
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var hammer1,plane1,stone1,rubber1,iron1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function setup() {
	 var canvas = createCanvas(1200, 600);
   engine = Engine.create();
	 world = engine.world;
	
	//Create the Bodies Here.
  plane1 = new plane(600,height,1200,50);
	hammer1 = new hammer(100,100);
	stone1 = new Stone(700,320,100,100);
  rubber1 = new Rubber(900,450,70);

  sand1 = new Sand(500,100,10);
  sand2 = new Sand(82,82,10);
  sand3 = new Sand(170,350,10);
  sand4 = new Sand(450,65,10);
  sand5 = new Sand(510,100,10);
  sand6 = new Sand(650,100,10);
  sand7 = new Sand(690,100,10);
  sand8 = new Sand(75,100,10);
  sand9 = new Sand(700,220,10);
  sand10 = new Sand(500,50,10);

  iron1 = new iron(350,300);

	//Engine.run(engine);
}


function draw() {
  
  background("black");
  //rectMode(CENTER);

  Engine.update(engine);

  hammer1.display();

  plane1.display();

  stone1.display();

  rubber1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
  iron1.display();

 //drawSprites();
 
}



