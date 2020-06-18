function setup(){
    createCanvas(400, 400);
    // loadFont('Georgia');
    // textFont('Georgia');
    // textAlign(CENTER, CENTER);
}

let numero = "10";

function draw() {
    line(10, 10, 20, 10);
    line(10, 10, 10, 60);
    line(10, 60, 20, 60);
    line(50, 10, 60, 10);
    line(60, 10, 60, 60);
    line(60, 60, 50, 60);
    // fill(50);
    text(numero, 35, 40);
    // ellipse(35,40,10,10);
}