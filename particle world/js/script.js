// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 3; // Initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(50);

  // Continuously add new particles at the mouse 

  particles.push(new Particle(mouseX, mouseY));


  // Update and display each particle
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.display();

    // Remove particles after they move off-canvas
    if (p.isOffScreen()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia = 30;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(255, 204, 0);
    noStroke();
    this.drawStar(0, 0, this.dia * 0.5, this.dia * 0.2, 5);
    pop();
  }

  // Method to draw a star
  drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius1;
      let sy = y + sin(a) * radius1;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius2;
      sy = y + sin(a + halfAngle) * radius2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  // Check if particle is off screen
  isOffScreen() {
    return (this.x < -this.dia || this.x > width + this.dia || this.y < -this.dia || this.y > height + this.dia);
  }
}