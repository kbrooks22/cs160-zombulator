// Zombulator by Kai Brooks

var backgroundColor;

const MIN_SIZE = 25; 
const MAX_SIZE = 50;
const Number_Of_Zombies = 100;
const Number_Of_Humans = 100;

var zombies;

var humans;

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
  moveHumans();
}

function initializeZombies() {
zombies = [];
for (var i = 0; i < Number_Of_Zombies; ++i) {
  initializeZombie(i);
  }
}


function initializeZombie(index) {
  zombies[index] = {
  	x: random(0, windowWidth),
  	y: random(0, 200),
  	size: random(MIN_SIZE, MAX_SIZE),
  	color: color(random(0, 150), random(0, 255), random(0, 255), 150)
  };
}

function drawZombies() {
for (var i = 0; i <Number_Of_Zombies; ++i) {
	drawZombie(i);
}
}

function drawZombie(index) {
var zombie = zombies[index];
    fill(zombie.color);
    ellipse(zombie.x, zombie.y, zombie.size, zombie.size);
}


function initializeHumans() {
   humans = [];
 for (var i = 0; i < Number_Of_Humans; ++i) {
	initializeHuman(i);
 }
 }

 function initializeHuman (index) {
 	humans[index] = {
 	x:random(0, windowWidth),
 	y:random(400, 500),
 	size:random(MIN_SIZE, MAX_SIZE),
 	color:color(random(255), random( 150, 255), random(150, 255), 150),
 	speed: random(.25, 1.1)
    };
 }


function drawHumans() {
for (var i = 0; i <Number_Of_Humans; ++i) {
	drawHuman(humans[i]);
}
}

function drawHuman(human) {
    fill(human.color);
    ellipse(human.x, human.y, human.size, human.size);
 }

function moveHumans() {
for (var i = 0; i <Number_Of_Humans; ++i) {
	moveHuman(humans[i]);
} 
  }

function moveHuman(human) {
  human.y -= human.speed;
  human.x -= random(-1, .9);
}