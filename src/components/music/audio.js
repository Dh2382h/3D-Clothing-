import { styles, applyStyles } from "./audioStyles";

function addBgMusic() {
  // Create music element
  const bgMusic = new Audio("/music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.5;
  bgMusic.autoplay = true;

  const musicButton = document.createElement("button");
  musicButton.textContent = "🔊 Mute Music";
  applyStyles(musicButton, styles.musicButton);
  document.body.appendChild(musicButton);

  // Toggle music on botton click
  let isMusicPlaying = true;
  musicButton.addEventListener("click", () => {
    if (isMusicPlaying) {
      bgMusic.pause();
      musicButton.textContent = "🔇Play Music";
    } else {
      bgMusic.play();
      musicButton.textContent = "🔊 Mute Music";
    }

    isMusicPlaying = !isMusicPlaying;
  });
}

export { addBgMusic };
