"use strict";

var para1 = document.getElementById("para1");

para1.style.color = "red";
para1.style.backgroundColor = "green";
para1.style.width = "50%";

var para2 = document.getElementById("para2");
para2.style.marginLeft = "100px";

var para3 = document.querySelector('#para3');
var para = document.querySelector('.para'); // selectionne le 1er
var allPara = document.querySelectorAll('.para'); // selectionne tous les .para rangé en tableau

console.log('para1', para1);
console.log('tous les para', allPara);
console.log('juste le deuxième', allPara[1]); // selectionne le 2ème

para1.classList.add("border"); // ajouter class
para2.classList.remove('para'); // retirer class
para3.classList.toggle('para'); // ajout class si celle-ci n'est pas présente la retire si elle l'est

var button = document.getElementById('test');

function showAlert() {
    window.alert('vous avez cliqué');
    para1.classList.toggle('border');
}

button.addEventListener('click', showAlert);
