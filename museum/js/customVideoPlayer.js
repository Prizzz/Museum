const video = document.querySelector(".main-video");
const mainPlayButton = document.querySelector(".main-play");
const playButton = document.querySelector(".play");

function toggle() {
  if (video.paused) {
    mainPlayButton.style.display = "none";
    playButton.style.backgroundImage = "url(assets/img/pause.png)";
    video.play();
  } else {
    mainPlayButton.style.display = "block";
    playButton.style.backgroundImage = "url(assets/svg/play.svg)";
    video.pause();
  }
}

video.addEventListener("click", toggle);
mainPlayButton.addEventListener("click", toggle);
playButton.addEventListener("click", toggle);
