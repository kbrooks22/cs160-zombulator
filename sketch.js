// Zombulator by Kai Brooks

var backgroundColor;

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 100;
const Number_Of_Zombies = 10;
const Number_Of_Humans = 10;

var zombiesX;
var zombiesY;
var zombieSizes;
var zombieColors;

var humansX;
var humansY;
var humanSizes;
var humanColors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();

  drawZombies();
  drawHumans();

}

function initializeZombies() {
zombiesX = [];
zombiesY = [];
zombieSizes = [];
zombieColors = [];
for (var i = 0; i < Number_Of_Zombies; ++i) {
  zombiesX[i] = random(0, windowWidth);
  zombiesY[i] = random(0, 200);
  zombieSizes[i] = random(MIN_SIZE, MAX_SIZE);
  zombieColors[i] = color(random(0, 150), random(0, 255), random(0, 255), 150);
}
}

function initializeHumans() {
 humansX = [];
 humansY = [];
 humanSizes = [];
 humanColors = [];
 for (var i = 0.; i < Number_Of_Humans; ++i) {
   humansX[i] = random(0, windowWidth);
   humansY[i] = random(400, 500);
   humanSizes[i] = random(MIN_SIZE, MAX_SIZE);
   humanColors[i] = color(random(150, 255), random( 150, 255), random(150, 255),150);   }
 }

function drawZombies() {
for (var i = 0; i <Number_Of_Zombies; ++i) {
  fill(zombieColors[i]);
  ellipse(zombiesX[i], zombiesY[i], zombieSizes[i], zombieSizes[i]);
}
}

function drawHumans() {
for (var i = 0; i <Number_Of_Humans; ++i) {
  fill(humanColors[i]);
  ellipse(humansX[i], humansY[i], humanSizes[i], humanSizes[i]);
}
}