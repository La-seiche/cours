"use strict"

var ordi = Math.round(Math.random()*1000);
var human = parseInt(window.prompt("Devinez le chiffre"));
var index = 0

do{
  if (ordi > human){
    alert("Plus");
    index++;
    human = parseInt(window.prompt("Laissez lui une autre chance"))
  }
  else{
    alert("Moins")
    index++;
    human = parseInt(window.prompt("Laissez lui une autre chance"))
  }
}
while (ordi != human)

document.write("<p>Félicitation le nombre est <strong>" + ordi + "</strong>. Il vous a fallu <strong>" + index + "</strong> essais.</p>")
