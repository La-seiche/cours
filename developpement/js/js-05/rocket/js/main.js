'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

var launchingButton = document.getElementById("firing-button");
var countdown = document.getElementById("countdown");
var rocket = document.getElementById("rocket");
var countdownTime = 10;
var timer;
var main = document.getElementsByTagName("main");
var cancelledButton = document.getElementById("cancelled-button");
var restartButton = document.getElementById("restart-button");

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function initializeLaunch() {
  launchingButton.classList.add("disabled");
  launchingButton.removeEventListener("click", initializeLaunch);
  cancelledButton.classList.remove("disabled");
  restartButton.classList.remove("disabled");
  cancelledButton.addEventListener("click", abortLaunch);
  restartButton.addEventListener("click", restartLaunch);
  rocket.src="images/rocket2.gif";
  timer = setInterval(countdownStart, 1000);
  }

function countdownStart() {
  countdown.textContent = countdownTime;
  countdownTime--;
  if (countdownTime == -1) {
      takeOff();
    }
}

function takeOff() {
  clearInterval(timer);
  rocket.src="images/rocket3.gif";
  cancelledButton.classList.add("disabled");
  rocket.classList.add("tookOff");
}

function abortLaunch() {
  clearInterval(timer);
  rocket.src="images/rocket1.png";
  cancelledButton.classList.add("disabled");
}

function restartLaunch() {
  rocket.src="images/rocket2.gif";
  timer = setInterval(countdownStart, 1000);
  countdownTime = 10;
  countdown.textContent = countdownTime;
  countdownTime--;
  if (countdownTime == -1) {
      takeOff();
    }
}

function createRandomStarClass () {
  var stars = Math.random();
  if (stars < 1/3) {
    stars = "tiny";
  }
  else if (stars < 2/3) {
    stars = "normal";
  }
  else {
    stars = "big";
  }
  return stars;
}

function createRandomStar() {
  var newStar = document.createElement("div");
  newStar.classList.add("star");
  newStar.classList.add(createRandomStarClass());
  newStar.style.top = (Math.random() * 100 + "%");
  newStar.style.left = (Math.random() * 100 + "%");
  main[0].appendChild(newStar);
  return newStar;
}



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

for (var i = 0; i < 1000; i++) {
  createRandomStar();
}

launchingButton.addEventListener("click", initializeLaunch);

var test1 = createRandomStarClass();
console.log(test1);

var test4 = createRandomStar();
console.log(test4);
