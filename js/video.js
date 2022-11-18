// Add js here.

//get the video element and store it in a variable
var vid = document.getElementById("videoplayer");

//Initialize the video variable when loading page
vid.preload = "auto";
//turn off autoplay
vid.autoplay = false;
//turn off looping when video is finsihed
vid.loop = false;

//get all the control elements (buttons and slider) and store them into variables
var play_bt = document.getElementById("play");
var pause_bt = document.getElementById("pause");
var slower_bt = document.getElementById("slower");
var faster_bt = document.getElementById("faster");
var skip_bt = document.getElementById("skip");
var mute_bt = document.getElementById("mute");
var vol_slider = document.getElementById("slider");

//create a function to play the video
function playVid(){
  vid.play();
}

//create a function to pause the video
function pauseVid(){
  vid.pause();
}

//create a function to slow down the play speed and give an alert if it's already the slowest
function slowVid(){
  if (vid.playbackRate == 2){
    vid.playbackRate = 1;
  }
  else if (vid.playbackRate == 1){
    vid.playbackRate = 0.5;
  }
  else if (vid.playbackRate == 0.5){
    window.alert("Video is at lowest speed!")
  }
}

//create a function to speed up the play speed and give an alert if it's already the fastest
function speedVid(){
  if (vid.playbackRate == 0.5){
    vid.playbackRate = 1;
  }
  else if (vid.playbackRate == 1){
    vid.playbackRate = 2;
  }
  else if (vid.playbackRate == 2){
    window.alert("Video is at fastest speed!")
  }
}

//create a function to skip ahead for 15s and return to the start if it has exceeded the video's total length
function skipVid(){
  vid.currentTime += 15;

  if (vid.currentTime > vid.duration){
    vid.currentTime = 0;
  }
}

//create the functions to mute and unmute the video,
//and update the text in button when calling each function
function muteVid(){
  vid.muted = true;
  mute_bt.textContent = "Unmute";
}
function unmuteVid(){
  vid.muted = false;
  mute_bt.textContent = "Mute";
}

//create the function to update volumn based on slider's value
function changeVol(){
  vid.volume = vol_slider.value / 100;
  document.getElementById("volume").innerHTML = vid.volume * 100 + "%";
}

//add event listeners to buttons and slider
//play the video
play_bt.addEventListener("click", playVid);

//pause the video
pause_bt.addEventListener("click", pauseVid);

//slow down the video
slower_bt.addEventListener("click", slowVid);

//speed up the video
faster_bt.addEventListener("click", speedVid);

//skip 15s for the video
skip_bt.addEventListener("click", skipVid);

//Mute or unmute for the video
mute_bt.addEventListener("click", function(){
  if (vid.muted == false){
    muteVid();
  }
  else{
    unmuteVid();
  }
});

//change video volumn
vol_slider.addEventListener("change", changeVol);
