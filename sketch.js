var form;
var weight, height, bmi;
var screen;

function setup() {
  createCanvas(displayWidth,displayHeight);
form = new Form();
}

function draw() {
  background(255,5,80); 
  form.display(); 
  
  drawSprites();
}