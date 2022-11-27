var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

function myFunction4() {
  var element = document.getElementById("font");
  if (element.classList === "w3-large") {
    element.classList.toggle("w3-xlarge") 
  } else {
    element.classList.toggle("w3-xlarge")
  }

}

function myFunction2() {
  var element = document.body;
  element.classList.toggle("light-mode");
}


