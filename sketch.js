// Zombulator by Kai Brooks

var zombieY = 15;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.8;
var zombieColor;
var backgroundColor; 
var zombiesize = 80; 
var humanY =550;
var humanColor;
var humanSize = 60;
var humanV = 0;
var humanA = 0.2;
var humanDamping = -0.7;

function setup() {
	createCanvas(windowWidth , windowHeight);
	backgroundColor = color(random(255), random(255), random(255));
	zombieColor = color(255, 255, 255);
	humanColor = color(random(255), random(255), random(255));
}

function draw() {
	background(backgroundColor);
	noStroke();
	fill(zombieColor);
	ellipse( windowWidth / 2, zombieY, zombiesize, zombiesize);
	fill(humanColor);
	ellipse( windowWidth / 2, humanY, humanSize, humanSize);
	humanY -= humanV;
	humanV += humanA;
	if (humanY - (humanSize / 2) <= windowHeight * 0) {
		humanY = (windowHeight * 0) + (humanSize / 2);
		humanV *= humanDamping;
	}
	zombieY += zombieV;
	zombieV += zombieA;
	if (zombieY + (zombiesize / 2) >= windowHeight) {
		zombieY = windowHeight - (zombiesize / 2); 
		zombieV = zombieV * -.8;
	} 
	}



