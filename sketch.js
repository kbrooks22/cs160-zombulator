// Zombulator by Kai Brooks

var zombieY = 15;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.8;
var zombieColor;
var backgroundColor; 
var zombiesize = 80; 

function setup() {
	createCanvas(windowWidth , windowHeight);
	backgroundColor = color(random(255), random(255), random(255));
	zombieColor = color(255, 255, 255);
}

function draw() {
	background(backgroundColor);
	noStroke();
	fill(zombieColor);
	ellipse( windowWidth / 2, zombieY, zombiesize, zombiesize);
	zombieY += zombieV;
	zombieV += zombieA;
	if (zombieY + (zombiesize / 2) >= windowHeight) {
		zombieV = -10;
	}
}




