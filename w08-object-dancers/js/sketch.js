let dancer;

function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  dancer = new DumplingDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor();

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class DumplingDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // Dumpling properties
    this.size = 80; // 
    this.thickness = 150;
    this.angle = 0;
    this.color = color(255, 230, 180);

    // Leg kicking properties
    this.leftLegAngle = 0;
    this.rightLegAngle = 0;
    this.kickSpeed = 0.1;
  }

  update() {
    // Bobbing up and down
    this.y += sin(this.angle) * 1.5;
    this.angle += 0.05;

    // Update leg angles for kicking effect
    this.leftLegAngle = sin(this.angle * 2) * 0.5; // Left leg kicks back and forth
    this.rightLegAngle = cos(this.angle * 2) * 0.5; // Right leg kicks with opposite timing
  }

  display() {
    push();
    translate(this.x, this.y);

    // Draw main dumpling body
    fill(this.color);
    noStroke();
    arc(0, 0, this.size * 2, this.thickness, PI, TWO_PI); // shape

    // Draw dumpling folds 
    stroke(200, 150, 100);
    strokeWeight(2);
    for (let i = -this.size + 10; i < this.size - 10; i += 15) {
      arc(i, -this.thickness / 2 + 5, 20, 15, PI, TWO_PI);
    }

    // Draw legs with kicking animation
    fill(this.color);
    noStroke();

    // Left leg
    push();
    translate(-30, 0); // Position left leg
    rotate(this.leftLegAngle); // Apply kicking motion
    rect(0, -5, 10, 50); // Left leg rectangle
    pop();

    // Right leg
    push();
    translate(30, 0); // Position right leg
    rotate(this.rightLegAngle); // Apply kicking motion
    rect(0, -5, 10, 50); // Right leg rectangle
    pop();

    // Draw eyes
    fill(0);
    noStroke();
    ellipse(-this.size / 3, -this.thickness / 4, 10, 10); // Left eye
    ellipse(this.size / 3, -this.thickness / 4, 10, 10); // Right eye

    // Draw smile
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(0, -this.thickness / 5, 20, 10, 0, PI); // Smile arc

    pop();
  }


  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}


