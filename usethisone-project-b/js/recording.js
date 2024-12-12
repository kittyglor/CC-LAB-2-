let img;
let sound;


let captions = [
  { start: 0, end: 1, text: "Layan: HELLO" },
  { start: 1, end: 3, text: "Dispatcher: Hello dear" },
  { start: 3, end: 5, text: "Layan: THEY ARE SHOOTING AT US" },
  { start: 5, end: 7, text: "Dispatcher: Hello" },
  { start: 7, end: 9, text: "Layan: THEY ARE SHOOTING AT US" },
  { start: 9, end: 10, text: "Layan: THE TANK IS NEXT TO ME" },
  { start: 10, end: 12, text: "Dispatcher: Are you hiding?" },
  { start: 12, end: 15, text: "Layan: YES, IN THE CAR, WE'RE RIGHT NEXT TO THE TANK" },
  { start: 15, end: 17, text: "Dispatcher: Are you inside the car?" },
  { start: 23, end: 24, text: "Dispatcher: …hello?" },
  { start: 25, end: 28, text: "Dispatcher: …hello?" }
];


let bulletHoles = [];
let holeIndex = 0;

function preload() {
  sound = loadSound('assets/audio/redcrossrecordinglayan.mp3');
  img = loadImage('assets/layancar.png');
}

function setup() {
  createCanvas(1000, 800);
  sound.play();

  generateBulletHoles(335);
}

function draw() {
  background('#5e0505');

  // scale image size
  let newWidth = img.width * 0.6;
  let newHeight = img.height * 0.6;

  let x = (width - newWidth) / 2;
  let y = height - newHeight - 100;

  image(img, x, y, newWidth, newHeight);

  displayCaptions();
  displayBulletHoles();

  if (!sound.isPlaying()) {
    // console.log("test");
    let elt = document.getElementById("link-recording");
    elt.style.display = "block";
  }
}

function displayCaptions() {
  let currentTime = sound.currentTime();

  // Lloop through captions array
  for (let i = 0; i < captions.length; i++) {
    let caption = captions[i];

    if (currentTime >= caption.start && currentTime <= caption.end) {
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text(caption.text, width / 2, 250);
    }
  }
}

function generateBulletHoles(num) {
  // Generate exactly num bullet holes with random positions
  for (let i = 0; i < num; i++) {
    let x = random(width / 2 - 250, width / 2 + 250);
    let y = random(height - 420, height - 150);
    let size = random(10, 30);

    // Store each bullet hole's properties
    bulletHoles.push({ x: x, y: y, size: size });
  }
}

function displayBulletHoles() {
  let currentTime = sound.currentTime(); // Get the current time of the audio

  //  start displaying bullet holes at 17 seconds
  if (currentTime >= 17 && currentTime <= 23) {
    // Show bullet holes one by one, at a fast pace
    let timeSinceStart = currentTime - 17; // Time passed since 17 seconds
    let holesToShow = Math.floor(timeSinceStart * 50); // Show 50 bullet holes per second 

    // don't exceed total number of bullets
    holesToShow = min(holesToShow, bulletHoles.length);

    // Display the bullet holes up to the current index
    for (let i = holeIndex; i < holesToShow; i++) {
      let hole = bulletHoles[i];
      fill(255, 0, 0); // Red color for the bullet hole
      noStroke();
      ellipse(hole.x, hole.y, hole.size); // Draw the bullet hole (red circle)
    }

    // Update the hole index to the current hole
    holeIndex = holesToShow;
  }

  // Draw all the bullet holes continuously after they have been shown ( after 23 seconds)
  if (currentTime > 23) {
    for (let i = 0; i < bulletHoles.length; i++) {
      let hole = bulletHoles[i];
      fill(255, 0, 0); // Red color for the bullet 
      noStroke();
      ellipse(hole.x, hole.y, hole.size * 0.5); // Draw the bullet 
    }
  }
}