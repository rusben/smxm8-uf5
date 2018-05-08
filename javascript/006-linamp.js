var track = document.getElementById("track");
var playButton = document.getElementById("btn-play");
var pauseButton = document.getElementById("btn-pause");
var stopButton = document.getElementById("btn-stop");

var fileButton = document.getElementById("btn-file");

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", stop);
fileButton.addEventListener("change", changeFile);

function play() { track.play(); }

function pause() { track.pause(); }

function stop() {
  pause();
  track.currentTime = 0;
 }

function changeFile() {
//  console.log(this.value);
  track.src = this.value;
}

//http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Queen/Queen%20'Barcelona'.mp3
