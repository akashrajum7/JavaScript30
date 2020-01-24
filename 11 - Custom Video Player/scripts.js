// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Write functions
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}
function toggleButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
function skip(){
  this.
}

// Hook event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", toggleButton);
video.addEventListener("pause", toggleButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));