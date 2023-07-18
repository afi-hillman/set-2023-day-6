console.log("js file loaded");

let videoPlayer = document.querySelector("#videoPlayer");
let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let volumeSlider = document.querySelector("#volumeSlider");
let volumeIcon = document.querySelector("#volumeIcon");
let volumeMute = document.querySelector("#volumeMute");
// let showControls = document.querySelector("#showControls");

// const obj = document.createElement("audio");

// console.log(obj.volume);
// obj.volume = 0.3;

function videoPlay() {
  console.log("play");
  videoPlayer.play();
}
function videoPause() {
  console.log("pause");
  videoPlayer.pause();
}

function showControls() {
  if (videoPlayer.getAttribute("controls")) {
    videoPlayer.removeAttribute("controls");
    showControls.innerText = "Disable native control";
  } else {
    videoPlayer.setAttribute("controls", true);
    showControls.innerText = "Show native control";
  }
}

function updateVolume() {
  console.log(videoPlayer.volume);
  videoPlayer.volume = volumeSlider.value;
  if (videoPlayer.volume <= 0.01) {
    volumeIcon.setAttribute("style", "display:none");
    volumeMute.setAttribute("style", "display:block");
  } else if (videoPlayer.volume > 0.01) {
    volumeMute.setAttribute("style", "display:none");
    volumeIcon.setAttribute("style", "display:block");
  }
}
