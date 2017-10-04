// Zombulator by Kai Brooks
 var zombieX = 50;
 var zombie2X = 100; 

function setup() {
createCanvas(800,800)
}

// function draw() {
// 	if (mouseIsPressed) {
// 		fill(0);
// 	} else {
// 		fill(255);
// 	}
// 	ellipse(mouseX, mouseY, 20,20);


function draw() {
	 background(255, 255, 255);
	 fill(134, 10, 127);
	 ellipse(50, 50, 80, 80);
	 fill(150, 150, 150);
	 ellipse(200, 100, 80, 80);
	 zombieX = zombieX + 1; 
	 zombie2X = zombie2X + 3; 
}