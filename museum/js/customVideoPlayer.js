const video = document.querySelector(".main-video");
const mainPlayButton = document.querySelector(".main-play");
const playButton = document.querySelector(".play");
const progressBar = document.querySelector(".progressbar");

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
  console.dir(video);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;
  progressBar.value = percent;
  if (percent == 100) {
    mainPlayButton.style.display = "block";
    playButton.style.backgroundImage = "url(assets/svg/play.svg)";
  }
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
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
