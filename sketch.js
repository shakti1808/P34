const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var bg_image 
var ground 
var rope

var moneyBag
var money
var money_con

function preload(){
  bg_image = loadImage('background.png')
  moneyBag = loadImage('money.png')
}

function setup(){
  createCanvas(600,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,890,800,30)

  rope = new Rope(8,{x:300,y:50});

  money = Bodies.circle(300,500,20);
  Matter.Composite.add(rope.body,money);

  money_con = new Link(rope,money);

  ellipseMode(RADIUS)
  //btn 1
  button = createImg('cut_btn.png');
  button.position(280,30);
  button.size(50,50);
  button.mouseClicked(drop);
}

function drop()
{
  rope.break();
  money_con.dettach();
  money_con = null; 
}

function draw(){
background(bg_image)

ground.show();
rope.show()

ellipse(money.position.x,money.position.y,20)

Engine.update(engine)
}