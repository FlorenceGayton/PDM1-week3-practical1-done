let x = 300;
let y = 300;
let colour = 255;

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(0);
    rectMode(CENTER);
    fill(colour);
    rect(x, y, 300, 200);
}  

function mouseDragged(){
    if( mouseX > x-150 &&
        mouseX < x+150 &&
        mouseY > y-100 &&
        mouseY < y+100
    ){
        colour = 100;
        x = mouseX;
        y = mouseY;
    }
    else{
        colour = 255;
    }
}

function mouseReleased(){
    colour = 255;
}
