"use strict";

var items = document.querySelectorAll(".photo-item");
var nb = document.getElementById("nb");

function mouseOverItem() {
  this.classList.add("hover");
}

function mouseOutItem() {
  this.classList.remove("hover");
}

function mouseClickItem() {
  this.classList.toggle("selected");
  var nbSelected = document.querySelectorAll(".selected");
  nb.textContent = nbSelected.length;
}

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", mouseOverItem);
  items[i].addEventListener("mouseout", mouseOutItem);
  items[i].addEventListener("click", mouseClickItem);
}
