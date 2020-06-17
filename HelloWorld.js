

//Circulo movendo ao longo da tela

function setup() {
    background(500);
}

let x = 0;

function draw() {
    ellipse(x, height/2, 20, 20);
    x=x+1;
}


/*

Criando o primeiro Canvas e colocando dentro de um container

function setup() {
    let myCanvas = createCanvas(600,400);
    myCanvas.parent('#myContainer');
    line(15, 25, 70, 90);
}

*/

/*

//aplicando sombra

function setup() {
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "black";
    background(200);
    ellipse(width/2, height/2, 50, 50);
}


 */