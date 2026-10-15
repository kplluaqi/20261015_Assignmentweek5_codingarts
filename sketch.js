
let x, y, d, xDir, yDir, speed;
let r, g, b;
let angle, angleSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);


  x = random(width);
  y = random(height);
  d = 20;

  xDir = random(-2, 2);
  yDir = random(-2, 2);
  speed = 10;

  angle = 0;
  angleSpeed = 5;

  r = 100;
  g = 200;
  b = 100;
}

function draw() {

  background(255, 60, 100, 20);


  colorInvert();


  x += xDir * speed;
  y += yDir * speed;


  keepInCanvas();


  angle += angleSpeed;
  let dynamicDiam = mapSin(angle, 10, 150);

  display(7, dynamicDiam, r, g, b);
}


function mapSin(a, target1, target2) {
  let myMap = map(sin(a), -1, 1, target1, target2);
  return myMap;
}


function keepInCanvas() {
  if (x > width || x < 0) {
    randomColor();
    xDir = -xDir;
  }
  if (y > height || y < 0) {
    randomColor();
    yDir = -yDir;
  }
}


function randomColor() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}


function colorInvert() {
  r = 100;
  g = 200;
  b = 100;

  if (mouseIsPressed) {
    background(0, 195, 155, 20); 
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
  }
}


function display(numShapes, diam, cr, cg, cb) {
  for (let i = numShapes; i > 0; i--) {
    let offSetX = mapSin(angle, -5, 5);
    let offSetY = mapSin(angle, -7, 7);
    fill(cr, cg, cb);
    stroke('yellow');
    circle(x + offSetY * i, y + offSetX * i, diam * i);
  }
}