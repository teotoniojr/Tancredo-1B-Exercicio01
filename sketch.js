function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  
  fill("yellow");
  stroke("silver");
  
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,30,40);
  }
  
  
}