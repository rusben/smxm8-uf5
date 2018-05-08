var track = document.getElementById("track");
var playButton = document.getElementById("btn-play");
var pauseButton = document.getElementById("btn-pause");
var stopButton = document.getElementById("btn-stop");

playButton.addEventListener("dblclick", play);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", stop);

function play() { track.play(); }
function pause() { track.pause(); }
function stop() {
  pause();
  track.currentTime = 0;
 }
