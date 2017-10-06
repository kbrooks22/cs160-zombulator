// Zombulator by Kai Brooks

var zombiex = 80; 
var zombie2 = 80; 

function setup() {
	createCanvas(800, 800);
}

function draw() {
	fill(150, 20, 20);
	ellipse(zombiex, 50, 80,80);
	fill(200, 200, 15);
	ellipse(zombie2, 70, 80, 80);
	zombiex = zombiex + 1; 
	zombie2 = zombie2 + 6;
}
