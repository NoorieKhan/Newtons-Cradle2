
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;
var roof;
var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight /1.1);
  engine = Engine.create();
  world = engine.world;

 let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  var r_options={
    isStatic:true
  }
  roof = Bodies.rectangle(215,180,300,20,r_options);
  World.add(world, roof);

  pendulum1 = new Pendulum(240, 450, "red");
  pendulum2 = new Pendulum(300, 450, "green");
  pendulum3 = new Pendulum(360, 450, "blue");
  pendulum4 = new Pendulum(420, 450, "yellow");
  pendulum5 = new Pendulum(480, 450, "purple");

  sling1 = new Sling(pendulum1.body, { x: 240, y: 200 });
  sling2 = new Sling(pendulum2.body, { x: 300, y: 200 });
  sling3 = new Sling(pendulum3.body, { x: 360, y: 200 });
  sling4 = new Sling(pendulum4.body, { x: 420, y: 200 });
  sling5 = new Sling(pendulum5.body, { x: 480, y: 200 });
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  push();
  translate(roof.position.x, roof.position.y);
  
  noStroke();
  fill("brown");
  rect(0, 0, 300, 20);
  pop();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}