// Zombulator by Kai Brooks

var zombieY = 15;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.8;
var zombieColor;
var zombiesize = 80;

var zombieY2 = 90;
var zombieV2 = 0;
var zombieA2 = .15;

var backgroundColor;

var rougeY = 300;
var rougeX = 600;
var rougeYV = 2;
var rougeXV = -3.7;
var rougeSize;
var rougeColor;

var rougeY2 = 200;
var rougeX2 = 50;
var rougeY2V = -2.3;
var rougeX2V = 4;

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
	rougeSize = random(20, 100);
	rougeColor = color(random(140), random(255), random(199));
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
	drawRouge();
	moveRouge();
	drawRouge2();
	moveRouge2();
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
	if (zombieY2 + (zombiesize / 2) >= humanY2 - (humanSize / 2)) {
	 	zombieV2 = zombieV2 * -1;
 }
    if (zombieY2 - (zombiesize / 2) <= windowHeight * 0) {
 	 	zombieY2 = windowHeight * 0 + (zombiesize / 2);
 	 	zombieV2 = zombieV2 * -.9;
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
	ellipse( windowWidth / 3, humanY2, humanSize + 20, humanSize + 20);
}

function moveHuman2() {
	humanY2 -= humanV2;
	humanV2 += humanA2;
	if (humanY2 - (humanSize / 2) <= zombieY2 + (zombiesize / 2)) {
		humanV2 = humanV2 * -1;
	 }
	if (humanY2 + (humanSize / 2) >= windowHeight) {
		humanV2 = humanV2 * - .7;
		humanY2 = windowHeight - (humanSize /2); 
	}
}

function drawRouge() {
	fill(rougeColor);
	ellipse(rougeX, rougeY, rougeSize, rougeSize);
}

function moveRouge() {
	rougeX += rougeXV;
	rougeY += rougeYV;
	if (rougeX + (rougeSize / 2) >= windowWidth) {
		rougeXV *= -1;
	}
	if (rougeX - (rougeSize / 2) <= windowWidth * 0) {
		rougeXV *= -1;
	}
	if (rougeY + (rougeSize / 2) >= windowHeight ) {
		rougeYV *= -1;
	}
	if(rougeY - (rougeSize / 2) <= windowHeight * 0) {
		rougeYV *= -1;
	}
}

function drawRouge2() {
	fill(rougeColor);
	ellipse(rougeX2, rougeY2, rougeSize, rougeSize);
}

function moveRouge2() {             
	rougeX2 += rougeX2V;
	rougeY2 += rougeY2V;
	if (rougeX2 + (rougeSize / 2) >= windowWidth) {
		rougeX2V *= -1;
	}
	if (rougeX2 - (rougeSize / 2) <= windowWidth * 0) {
		rougeX2V *= -1;
	}
	if (rougeY2 + (rougeSize / 2) >= windowHeight ) {
		rougeY2V *= -1;
	}
	if(rougeY2 - (rougeSize / 2) <= windowHeight * 0) {
		rougeY2V *= -1;
	}

	// if (rougeX2 + (rougeSize / 2) = (rougeX - (rougeSize / 2)) {
		// rougeX2V *= -1;
	 // }

	// if (rougeX2 - (rougeSize / 2) = rougeX  + (rougeSize / 2)) {
		// rougeX2V *= -1;
	// }
	// if (rougeY2 + (rougeSize / 2) >= rougeY - (rougeSize / 2) {
		// rougeY2V *= -1;
	// }
	// if (rougeY2 - (rougeSize / 2) <= rougeY + (rougeSize / 2)) {
		// rougeY2V *= -1;
	// }

}
	