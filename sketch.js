// Zombulator by Kai Brooks

var zombieY = 15;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.8;
var zombieColor;
var zombiesize = 80;

var zombieY2 = 10;
var zombieV2 = 0;
var zombieA2 = .15;

var backgroundColor; 

var humanY = 550;
var humanColor;
var humanSize = 60;
var humanV = 0;
var humanA = 0.2;
var humanDamping = -0.7;

var humanY2 = 570;
var humanV2 = 0;
var humanA2 = .23;

function setup() {
	createCanvas(windowWidth , windowHeight);
	backgroundColor = color(random(255), random(255), random(255));
	zombieColor = color(255, 255, 255);
	humanColor = color(random(255), random(255), random(255));
}

function draw() {
	background(backgroundColor);
	noStroke();

	drawZombie();
	moveZombie();
	drawZombie2();
	moveZombie2();
	drawHuman();
	moveHuman();
	drawHuman2();
	moveHuman2();

	// fill(zombieColor);
	// ellipse( windowWidth / 3, zombieY2, zombiesize, zombiesize);
	// fill(humanColor);
	// ellipse( windowWidth / 3, humanY2, humanSize, humanSize);
	// humanY2 -= humanV2;
	// humanV2 += humanA2;
	// zombieY2 += zombieV2;
	// zombieV2 += zombieA2;
	// humanY -= humanV;
	// humanV += humanA;
	// if (humanY2 - (humanSize / 2) <= zombieY2) {
		// humanV2 *= humanDamping;
	 // }
	// if (zombieY2 + (zombiesize / 2) >= humanY2) {
	 	// zombieV2 = zombieV * -.8;
 // }
	}

function drawZombie() {
	fill(zombieColor);
	ellipse( windowWidth / 2, zombieY, zombiesize, zombiesize);
}

function moveZombie() {
	zombieY += zombieV;
	zombieV += zombieA;
	if (zombieY + (zombiesize / 2) >= windowHeight) {
		zombieY = windowHeight - (zombiesize / 2); 
		zombieV = zombieV * -.8;
	} 
}

function drawZombie2() {
	fill(zombieColor);
	ellipse( windowWidth / 3, zombieY2, zombiesize, zombiesize);
}

function moveZombie2() {
	zombieY2 += zombieV2;
	zombieV2 += zombieA2;
	if (zombieY2 + (zombiesize / 2) >= humanY2) {
	 	zombieV2 = zombieV * -.8;
 }
}

function drawHuman() {
	fill(humanColor);
	ellipse( windowWidth / 2, humanY, humanSize, humanSize);
	fill(0);
	text("human", windowWidth / 2, humanY);
}

function moveHuman() {
	humanY -= humanV;
	humanV += humanA;
	if (humanY - (humanSize / 2) <= windowHeight * 0) {
		humanY = (windowHeight * 0) + (humanSize / 2);
		humanV *= humanDamping;
	}
}

function drawHuman2 () {
	fill(humanColor);
	ellipse( windowWidth / 3, humanY2, humanSize, humanSize);
}

function moveHuman2() {
	humanY2 -= humanV2;
	humanV2 += humanA2;
	if (humanY2 - (humanSize / 2) <= zombieY2) {
		humanV2 *= humanDamping;
	 }
}