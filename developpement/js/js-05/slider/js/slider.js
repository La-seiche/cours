'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var displayNavBar = document.getElementById("toolbar-toggle");
var navBar = document.querySelector(".toolbar ul");
var arrow = document.querySelector(".fa-arrow-right");
var i;
var images = [
  {
    src : 1,
    alt : "Street Art"
  },
  {
    src : 2,
    alt : "Fast Lane"
  },
  {
    src : 3,
    alt : "Colorful Building"
  },
  {
    src : 4,
    alt : "Skyscrapers"
  },
  {
    src : 5,
    alt : "City By Night"
  },
  {
    src : 6,
    alt : "Tour Eiffel la nuit"
  }
]
var imageDisplayed = document.querySelector("#slider img");
var figCaption = document.querySelector("#slider figcaption");
var sliderPrevious = document.getElementById("slider-previous");
var sliderNext = document.getElementById("slider-next");
var playButton = document.getElementById("slider-toggle");
var timer;
var playIcon = document.querySelector("#slider-toggle i");
var currentPlay = false;
var randomButton = document.getElementById("slider-random");
var dots = document.getElementById("dots");

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function displayHideNavNar() {
  navBar.classList.toggle("hide");
  arrow.classList.toggle("fa-arrow-right");
  arrow.classList.toggle("fa-arrow-down");
}

function displayImage() {
  imageDisplayed.src = "images/" + images[i].src + ".jpg";
  imageDisplayed.setAttribute("alt", images[i].alt);
  figCaption.textContent = images[i].alt;
  greenDot();
}

function displayFirstImage() {
  i = 0;
  displayImage();
}

function previousImage() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  displayImage();
}

function nextImage() {
  i++;
  if (i > images.length - 1) {
    i = 0;
  }
  displayImage();
}

function playImages() {
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
  timer = setInterval(nextImage, 1500);
  currentPlay = true;
  playButton.removeEventListener("click", playImages);
  playButton.addEventListener("click", stopImages);
}

function stopImages() {
  clearInterval(timer);
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
  currentPlay = false;
  playButton.removeEventListener("click", stopImages);
  playButton.addEventListener("click", playImages);
}

function randomImages() {
  var r = getRandomInteger(0, images.length);
  if (i != r) {
    i = r;
  }
  else {
    randomImages();
  }
  displayImage();
}

function displayDot() {
  for (var index = 0; index < images.length; index++) {
    var dot = document.createElement("li");
    dot.classList.add("dot");
    dot.id = "dot-" + index;
    if (index == 0) {
      dot.classList.add("selected");
    }
    var link = document.createElement("a");
    link.href ="#";
    dot.appendChild(link);
    dots.appendChild(dot);
  }
}

function greenDot() {
  var currentGreenDot = document.querySelector(".selected");
  currentGreenDot.classList.remove("selected");
  var currentImageDot = document.getElementById('dot-' + i);
  currentImageDot.classList.add("selected");
}

function getDotsList() {
  var dotsList = document.getElementsByClassName("dot");
  for (var dotIndex = 0; dotIndex < dotsList.length; dotIndex++) {
    dotsList[dotIndex].addEventListener("click", clickToChangeImage);
  }
}

function clickToChangeImage() {
  var id = this.id;
  i = id.charAt(id.length - 1);
  displayImage();
}

function clickOnKeyboard(k) {
  if (k.keyCode == 39) {
    nextImage();
  }
  else if (k.keyCode == 37) {
    previousImage();
  }
  else if (k.keyCode == 32) {
    if (currentPlay) {
      stopImages();
    }
    else {
      playImages();
    }
  }
  else if (k.keyCode == 82) {
    randomImages();
  }
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

displayNavBar.addEventListener("click", displayHideNavNar);
sliderPrevious.addEventListener("click", previousImage);
sliderNext.addEventListener("click", nextImage);
playButton.addEventListener("click", playImages);
randomButton.addEventListener("click", randomImages);
document.addEventListener("keyup", clickOnKeyboard)

displayDot();
displayFirstImage();
getDotsList();
