// Zombulator by Kai Brooks

var backgroundColor;

// var coswave = [];

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 500;

var zombieX;
var zombieY;
var zombieSize;
var zombieColor;

var humanX;
var humanY;
var humanSize;
var humanColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombie();
  initializeHuman();

  // for (var zombieX = 0; i < zombieX; i++) {
    // zombieX amount = map(i, 0, width, 0, PI);
    // coswave[i] = abs(cos(100 * PI));
  // }
}

function draw() {
  background(backgroundColor);
  noStroke();

  drawZombie();
  drawHuman();

}

function initializeZombie() {
  zombieX = random(0, windowWidth);
  zombieY = random(0, 200);
  zombieSize = random(MIN_SIZE, MAX_SIZE);
  zombieColor = color(random(50, 150), random(50, 155), random(50, 155), 150);
}

function initializeHuman() {
  humanX = random(0, windowWidth);
  humanY = random(400, 500);
  humanSize = random(MIN_SIZE, MAX_SIZE);
  humanColor = color(random(150, 255), random( 150, 255), random(150, 255),150);
}

function drawZombie() {
  fill(zombieColor);
  ellipse(zombieX, zombieY, zombieSize, zombieSize);
}

function drawHuman() {
  fill(humanColor);
  ellipse(humanX, humanY, humanSize, humanSize);
}
