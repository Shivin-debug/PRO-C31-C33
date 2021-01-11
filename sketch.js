const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var world, engine;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 795, 500, 10);

  for(var k = 0; k <width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 15; j <width; j = j + 50){
    plinkos.push(new Plinko(j, 50));
  }

  for(var j = 30; j <width; j = j + 50){
    plinkos.push(new Plinko(j, 100));
  }

  for(var j = 15; j<width; j = j + 50){
    plinkos.push(new Plinko(j, 150));
  }

  for(var j = 30; j<width; j = j + 50){
    plinkos.push(new Plinko(j, 200))
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
}

function draw() {
  Engine.update(engine);
  background("black");  
  
  for(var k = 0; k <divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for(var h = 0; h<particles.length; h++){
    particles[h].display();
  }

  ground.display();
}
