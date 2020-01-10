"use strict";

$(document).ready(function(){
  $('.your-class').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $('.prec'),
  nextArrow: $('.next')
});
});

var closePopUp = document.getElementById("close-pop");
var popUp = document.getElementById("pop-up");
var cart = document.querySelector(".shopping-cart");
var burger = document.getElementById("menu-burger");
var menu = document.querySelector(".nav-list");

function hidePopUp() {
  popUp.classList.remove("display-pop-up");
}

function openPopUp() {
  popUp.classList.add("display-pop-up");
}

function displayMenu() {
  menu.classList.toggle("display-menu");
}

closePopUp.addEventListener("click", hidePopUp);
cart.addEventListener("click", openPopUp);
burger.addEventListener("click", displayMenu);
