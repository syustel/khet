//var img;
var tablero = [[0, 0, 0], [0, 1, 1], [0, 0, 0]];

function setup() {
  createCanvas(601, 501);
  //img = loadImage('Captura.PNG');
}

function draw() {
  var x;
  var y;
  fill(100);
  strokeWeight(4);
  rectMode(CORNER);
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 8; y++) {
        rect(x*60, y*60, 60, 60);
    }
  }
  fill(200, 0, 0);
  rectMode(CENTER);
  var i;
  var j;
  for (i = 0; i < tablero.length; i++) {
    for (j = 0; j < tablero[i].length; j++) {
        if (tablero[i][j] == 1) 
            rect(j*60+30, i*60+30, 50, 50);
    }
  }

  
  //rect(50, 50, 50, 50);
  //image(img, 0, 0);
}

function mousePressed() {
    //print(mouseX);
    rect(50, 50, 50, 50);
}