let sound;

function preload() {
    sound = loadSound('assets/audio/dokidoki.mp3');
}

function setup() {
    noCanvas();

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
