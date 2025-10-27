
let xpos;
let speed;


function setup() {
    createCanvas(600, 400);
    background("lightblue");
    speed = 5;
    xpos = width/2;
}

function draw() {
    fill("limegreen");
    circle(xpos, height/2, 50);

    xpos = xpos + speed;
}