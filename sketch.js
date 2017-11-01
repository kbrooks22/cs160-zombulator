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
  zombies[i] = initializeZombie();
  }
}


function initializeZombie() {  
return{
  	x: random(0, windowWidth),
  	y: random(0, 200),
  	size: random(MIN_SIZE, MAX_SIZE),
  	color: color(random(0, 150), random(0, 255), random(0, 255), 150)
 	draw: function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
   };
}
}

function drawZombies() {
 for (var i = 0; i <Number_Of_Zombies; ++i) {
	 zombies[i].draw();
 }
 }


function initializeHumans() {
   humans = [];
for (var i = 0; i < Number_Of_Humans; ++i) {
	humans[i] = initializeHuman();
 }
 }

 function initializeHuman () {
 return{
 	x:random(0, windowWidth),
 	y:random(400, 500),
 	size:random(MIN_SIZE, MAX_SIZE),
 	color:color(random(255), random( 150, 255), random(150, 255), 150),
 	speed: 0.1,
 	draw: function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
   },
    move: function() {
    var VY = this.y + this.speed;
    var NY = noise(VY);
    this.y -= NY;

    }
 }
}


function drawHumans() {
for (var i = 0; i <Number_Of_Humans; ++i) {
	humans[i].draw();
}
}

function moveHumans() {
for (var i = 0; i <Number_Of_Humans; ++i) {
	humans[i].move();
} 
  }

