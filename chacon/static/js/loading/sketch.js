function setup(){
  createCanvas(700,700);
  ran = random (1,3)
  dom = random (1,3)
  r1 = round(ran)
  r2 = round(dom)
}

// the parameter at which x and y depends is usually taken as either t or symbol of theta
let t = 0;
function draw(){
  background(0);
  translate(width/2,height/2);
  stroke(255);
  strokeWeight(1.5);
  
  //loop for adding 100 lines
  for(let i = 0;i<200;i++){
    point(x1(t+i)*0.5,x1(t+i/2)*0.5);
    
    
  }
  t+=1;
}
// function to change initial x co-ordinate of the line
function x1(t){
  return sin(t/(10*r1))*125+cos(t/(10*r2))*125;
}
