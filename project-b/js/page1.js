

const grid = document.querySelector('.grid');
let imageUrl1 = 'assets/tb1.png'; // Replace with your image URL
let imageUrl2 = 'assets/tb2.png'; // alt image

for (let i = 0; i < 20_000; i++) {
  if (i < 10_000) {
    const img = document.createElement('img');
    img.src = imageUrl1;
    img.alt = 'Teddy Bear';
    grid.appendChild(img);
  } else {
    const img = document.createElement('img');
    img.src = imageUrl2;
    img.alt = 'Teddy Bear';
    grid.appendChild(img);
  }

}


const link = document.querySelector('.main-link-box');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || window.innerHeight;

  const scrollPercent = (scrollTop / (scrollHeight - clientHeight));

  // Update the text inside the <a> tag
  link.textContent = `${(scrollPercent * 20_000).toFixed()} bears`;
});

// let soundFiles = [
//   "assets/beat.mp3",
//   "assets/kick.mp3",
//   // feel free to add more!
// ];
// let sounds = [];
// let particles = [];

// function preload() {
//   for (let i = 0; i < soundFiles.length; i++) {
//     let eachSound = loadSound(soundFiles[i]);
//     sounds.push(eachSound);
//   }
// }

// function setup() {
//   let canvas = createCanvas(800, 500);
//   canvas.parent("p5-canvas-container");
//   background(220);
// }

// function draw() {
//   background(220);

//   // generate a particle with a 3% chance
//   if (random() < 0.03) {
//     let sound = random(sounds); // pick a random sound from the array
//     particles.push(new Particle(random(width), random(height), random(50, 80), sound));
//   }

//   // update, compare and display
//   for (let i = 0; i < particles.length; i++) {
//     let p = particles[i];
//     p.move();
//     p.adjustSpeed(-0.02);
//     //p.fall();
//     p.age();
//     p.checkMouse();
//     p.display();
//   }

//   // remove a particle if it's done!
//   // ensure you flip the loop!!!
//   for (let i = particles.length - 1; i >= 0; i--) {
//     let p = particles[i]; // each element
//     if (p.isDone == true) {
//       particles.splice(i, 1); // (index, quantity)
//     }
//   }

//   // limit the total number
//   while (particles.length > 500) {
//     particles.splice(0, 1); // (index, quantity)
//   }
// }


// class Particle {
//   constructor(x, y, rad, sound) {
//     this.sound = sound;
//     this.soundRate = random(0.50, 2.00);

//     this.x = x;
//     this.y = y;
//     this.xSpeed = random(-3, 3);
//     this.ySpeed = random(-3, 3);
//     this.rad = rad;

//     this.r = 255;
//     this.g = 255;
//     this.b = 255;

//     this.lifespan = 1.0; // 100%
//     this.lifeReduction = 0.01; // 1%
//     this.isDone = false;
//   }
//   display() {
//     push();
//     translate(this.x, this.y);

//     noStroke();
//     // fill(this.r, this.g, this.b, 255 * this.lifespan); // reduce the alpha by the lifespan  
//     fill(this.r, this.g, this.b);
//     circle(0, 0, this.rad * 2 * this.lifespan); // reduce the size by the lifespan

//     pop();
//   }
//   move() {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
//   }
//   fall() {
//     this.ySpeed += 0.1;
//   }
//   adjustSpeed(amount = 0) {
//     this.xSpeed = this.xSpeed * (1 + amount);
//     this.ySpeed = this.ySpeed * (1 + amount);
//   }
//   age() {
//     if (this.lifespan > 0) {
//       this.lifespan -= this.lifeReduction
//     } else {
//       this.lifespan = 0;
//       this.isDone = true;
//     }
//   }
//   checkMouse() {
//     let distance = dist(this.x, this.y, mouseX, mouseY);
//     if (distance < this.rad) {
//       // in
//       this.r = 255;
//       this.g = 255;
//       this.b = 0; // yellow

//       if (mouseIsPressed) {
//         // change the color
//         this.r = 255;
//         this.g = 0;
//         this.b = 0; // red 
//         this.isDone = true;

//         // play the sound
//         this.sound.rate(this.soundRate);
//         this.sound.play();
//       }
//     } else {
//       // out
//       this.r = 255;
//       this.g = 255;
//       this.b = 255; // white
//     }
//   }
// }