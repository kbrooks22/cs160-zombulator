// Zombulator by Kai Brooks

var zombiex = 80; 
var zombie2 = 200; 

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255)
	strokeWeight(8);
	stroke(79, 70, 80)
	fill(150, 20, 20);
	ellipse(zombiex, 50, 80,80);
	fill(200, 200, 15);
	ellipse(zombie2, 70, 80, 80);
	zombiex = zombiex + 1; 
	zombie2 = zombie2 + 6; 
if (zombie2 >= 800 ) {
		zombie2 = 0; 
if (zombiex >= 400) {
	zombiex = 0; 
}
	}}
