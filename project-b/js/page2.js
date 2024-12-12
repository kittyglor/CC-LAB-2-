let sound;

function preload() {
  sound = loadSound('../assets/audio.mp3'); // Replace with your sound file
}

function setup() {
  noCanvas();

  // Attempt sound playback after a short delay
  getAudioContext().resume().then(() => {
    setTimeout(() => {
      sound.play();
    }, 1000); // Adjust delay if needed
  }).catch(err => {
    console.log("Autoplay blocked until user interaction:", err);
  });
}



// function setup() {
//   let canvas = createCanvas(800, 500);
//   canvas.parent("p5-canvas-container");
//   background(220);
// }

// function draw() {
//   noStroke();
//   fill(random(255), random(255), random(255));
//   circle(random(width), random(height), random(50, 80));
// }