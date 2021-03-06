// Zombulator by Kai Brooks
// Program works as zombie outbreak simulator. Zombies and humans fight, all have various strengths. Humans can change into zombies, victory is declared once total population count is under 75%.
var backgroundColor;
var img;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const POPULATION_SIZE = 200;

var population = [];

var zombieCount = 0;
var humanCount = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializePopulation();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
  declareWinner();
}


function initializePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var humanoid_type = random(0, 100);
    if (humanoid_type <= 50) {
      population[i] = initializeZombie();
      ++zombieCount;
    } else {
      population[i] = initializeHuman();
      ++humanCount;
    }
  }
}

function drawPopulationCounts() {
  stroke(0);
  textSize(72);
  textAlign(CENTER);
  text("Zombies: " + zombieCount, width / 2, 100);
  text("Humans: " + humanCount, width / 2, height - 100);
}

function drawPopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].draw();
  }
}

function movePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].move();
  }
}

function handleCollisions() {
  for(var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population[j];
      if (attacker.isTouching(target)) {
        attacker.isAttacking(target);
    }
  }
}
}


function declareWinner() {
if (zombieCount * .75 > humanCount && (zombieCount + humanCount) <= POPULATION_SIZE * .75) {
  text("ZOMBIESWIN", width / 2, height / 2);
} else if (humanCount * .75 > zombieCount && (zombieCount + humanCount) <= POPULATION_SIZE * .75) {
  text("HUMANSWIN", width /2, height / 2);
} else if (zombieCount + humanCount < POPULATION_SIZE * .6 && humanCount > zombieCount) {
 text("HUMANSWIN", width /2, height / 2);

} else if (zombieCount + humanCount < POPULATION_SIZE * .6 && zombieCount > humanCount){
  text("ZOMBIESWIN", width / 2, height / 2);
}
}



function initializeZombie() {
  return {
    humanoid_type: "zombie",
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE * 1.2, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150),
    attack: random(0, this.size),
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y -= this.speed;
      } else {
        this.y += this.speed;
      }
    },
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humanoid_type == target.humanoid_type) return false;
      var distance = dist(this.x, this.y, target.x, target. y);
      if (distance <= (this.size/2 + target.size/2)) {
        return true;
      }
      else {
        return false;
      }

    },
  isAttacking: function(target) {
  if (this.attack >= target.attack && target.resistance < 4) {
    target.humanoid_type = "zombie";
    target.color = this.color;
    ++zombieCount
    } else if(this.attack >= target.attack){
    delete target.size;
    --humanCount;
  } else {
    delete this.size;
    --zombieCount;
  }
  }
}
};


function initializeHuman() {
  return {
    humanoid_type: "human",
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150),
    attack: random(0, this.size),
    move: function() {
        var direction = random(0, 100);
        if (direction < 20) {
          this.x += this.speed;
        } else if (direction < 40) {
          this.x -= this.speed;
        } else if (direction < 60) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
      },
    draw: function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    },
    isTouching: function(target) {
    if (this.humanoid_type == target.humanoid_type) return false;
    var distance = dist(this.x, this.y, target.x, target. y);
    if (distance <= (this.size/2 + target.size/2)) {
      return true;
    }
    else {
      return false;
    }
    },
    isAttacking: function(target) {
    var resistance = random(10);
    if (this.attack >= target.attack) {
      delete target.size;
      zombieCount = zombieCount - 1;
    } else if (resistance < 4){
        humanoid_type = "zombie";
        this.color = target.color;
        ++zombieCount;
      } else {
      delete this.size;
      --humanCount;
    }
    }
  }
};

