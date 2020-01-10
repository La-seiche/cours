"use strict";

var choix = parseInt(window.prompt("Veuillez saisir la taille de la table de multiplication"));

document.write("<table>");

for (var i =1; i<=choix; i++){
  document.write("<tr>");
  for (var index = 1; index <= choix; index++){
    var result = i * index
    if (i != index){
    document.write("<td>" + result + "</td>");
  }
    else {
      document.write("<td class=same-number>" + i*index + "</td>");
    }
  }
  document.write("</tr>");
}

document.write("</table>");
