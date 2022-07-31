const player = document.querySelector(".main-video-wrapper");
const video = document.querySelector(".main-video");
const mainPlayButton = document.querySelector(".main-play");
const playButton = document.querySelector(".play");
const progressBar = document.querySelector(".progressbar");
const volumeBar = document.querySelector(".volumebar");
const volumeIcon = document.querySelector(".volume");
const fullscreenButton = document.querySelector(".fullscreen");
let volume = volumeBar.value;
let volumeToggled = false;
let fullscreened = false;

function toggle() {
  if (video.paused) {
    mainPlayButton.style.display = "none";
    playButton.style.backgroundImage = "url(assets/svg/pause.svg)";
    video.play();
  } else {
    mainPlayButton.style.display = "block";
    playButton.style.backgroundImage = "url(assets/svg/play.svg)";
    video.pause();
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;
  progressBar.value = percent || 0;
  if (percent == 100) {
    mainPlayButton.style.display = "block";
    playButton.style.backgroundImage = "url(assets/svg/play.svg)";
  }
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function volumeControl() {
  volume = this.value;
  video.volume = volume / 100;

  if (volume == 0) {
    volumeIcon.style.backgroundImage = "url(assets/svg/mute.svg)";
  } else {
    volumeIcon.style.backgroundImage = "url(assets/svg/volume.svg)";
  }
}

function volumeToggle() {
  if (volume == 0) return;
  if (volumeToggled) {
    volumeBar.value = volume;
    video.volume = volume / 100;
    volumeIcon.style.backgroundImage = "url(assets/svg/volume.svg)";
    volumeBar.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${volume}%, rgb(196, 196, 196) ${volume}%, rgb(196, 196, 196) 100%)`;
    volumeToggled = false;
  } else {
    volume = volumeBar.value;
    volumeBar.value = 0;
    video.volume = 0;
    volumeIcon.style.backgroundImage = "url(assets/svg/mute.svg)";
    volumeBar.style.background =
      "linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) 0%, rgb(196, 196, 196) 0%, rgb(196, 196, 196) 100%)";
    volumeToggled = true;
  }
}

function fullscreen() {
  if (fullscreened) {
    document.exitFullscreen();
    fullscreened = false;
  } else {
    player.requestFullscreen();
    fullscreened = true;
  }
}

function keyController(e) {
  if (e.keyCode === 32) toggle();
  if (e.keyCode === 77) volumeToggle();
  if (e.keyCode === 70) fullscreen();
}

video.addEventListener("click", toggle);
mainPlayButton.addEventListener("click", toggle);
playButton.addEventListener("click", toggle);
video.addEventListener("timeupdate", handleProgress);

let mousedown = false;
progressBar.addEventListener("click", scrub);
progressBar.addEventListener("mousemove", (e) => mousedown && scrub(e));
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mouseup", () => (mousedown = false));

volumeBar.addEventListener("input", volumeControl);
volumeIcon.addEventListener("click", volumeToggle);

fullscreenButton.addEventListener("click", fullscreen);

document.addEventListener("keydown", keyController);
