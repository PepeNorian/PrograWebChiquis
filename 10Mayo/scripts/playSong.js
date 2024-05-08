let audioElement;

function playSong() {
  audioElement = new Audio('../recursos/cancion.mp3');
  audioElement.play();
}

function pauseSong() {
  if (audioElement) {
    audioElement.pause();
  }
}