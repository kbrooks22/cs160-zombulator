// Zombulator by Kai Brooks

var backgroundColor;

<<<<<<< HEAD
const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 100;
const Number_Of_Zombies = 10;
const Number_Of_Humans = 10;
=======
var zombieY2 = 90;
var zombieV2 = 0;
var zombieA2 = .15;
>>>>>>> a15fbd1... Balls bounce off eachother and wall until speed is to great

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

<<<<<<< HEAD
  drawZombies();
  drawHumans();
=======
	}
>>>>>>> a15fbd1... Balls bounce off eachother and wall until speed is to great

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

<<<<<<< HEAD
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
=======
function moveZombie2() {
	zombieY2 += zombieV2;
	zombieV2 += zombieA2;
	if (zombieY2 + (zombiesize / 2) >= humanY2 - (humanSize / 2)) {
	 	zombieV2 = zombieV2 * -1.1;
 }
    if (zombieY2 - (zombiesize / 2) <= windowHeight * 0) {
 	 	zombieV2 = zombieV2 * -1;
>>>>>>> a15fbd1... Balls bounce off eachother and wall until speed is to great
 }

function drawZombies() {
for (var i = 0; i <Number_Of_Zombies; ++i) {
  fill(zombieColors[i]);
  ellipse(zombiesX[i], zombiesY[i], zombieSizes[i], zombieSizes[i]);
}
}

<<<<<<< HEAD
function drawHumans() {
for (var i = 0; i <Number_Of_Humans; ++i) {
  fill(humanColors[i]);
  ellipse(humansX[i], humansY[i], humanSizes[i], humanSizes[i]);
}
=======
function drawHuman2 () {
	fill(humanColor);
	ellipse( windowWidth / 3, humanY2, humanSize + 20, humanSize + 20);
}

function moveHuman2() {
	humanY2 -= humanV2;
	humanV2 += humanA2;
	if (humanY2 - (humanSize / 2) <= zombieY2 + (zombiesize / 2)) {
		humanV2 = humanV2 * -1.2;
	 }
	if (humanY2 + (humanSize / 2) >= windowHeight) {
		humanV2 = humanV2 * - .7;
		humanY2 = windowHeight - (humanSize /2); 
	}
>>>>>>> a15fbd1... Balls bounce off eachother and wall until speed is to great
}