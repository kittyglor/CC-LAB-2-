let sound;

function preload() {
  sound = loadSound('assets/audio/beardialogue.mp3');
}

function setup() {
  noCanvas();

  // Attempt autoplay
  getAudioContext()
    .resume()
    .then(() => {
      sound.setVolume(0.1);
      sound.play();
    })
    .catch(() => {
      console.log("Autoplay blocked. Adding user interaction.");
      createButton('Play Audio').mousePressed(() => {
        sound.play();
      });
    });
}
