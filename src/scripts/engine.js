const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio();

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (event) => {
  playTune(event.key);
});
