
let numX=10;
let numY=10;
let p1 = { x:150, y: 250 };
let p2 = { x:200, y: 300 };
let p3 = { x:250, y: 250 };

function setup() {
  createCanvas(400, 400);
  background(90,18,22);
  //forloop 可限定執行次數
  //for(let i=0;i<10;i=i+1){...}

}

//持續重複執行
function draw() {
background(255);
  for(let i=0; i<numX; i=i+1){
    for(let j=0; j<numY; j=j+1){
    //background(i*25,255-j*10,30)
    fill(255-i*10,i*10,i*10+j*10);
    circle(i*width/numX+width/numX/2,
           j*height/numY+height/numY/2,
           numX*2);
    line(i*width/numX + width/numX/2,
           j*height/numY + height/numY/2,
        mouseX,mouseY);
    }
  }
  if(mouseIsPressed){
    background(60,60,100);
    fill(15,240,55);
    circle(width/2,height/2,300);
    fill(0);
    circle(width*3/8,height*3/8,10);
    circle(width*5/8,height*3/8,10);
    stroke(0);
    strokeWeight(4) ;
    line(p1.x, p1.y, p2.x, p2.y);
    line(p3.x, p3.y, p2.x, p2.y);
    stroke(255);
    strokeWeight(2) ;
  }
  
}