"use strict";

var px = window.prompt("Donnez la série de couleur de pixel");

function lre(img){
  var nb = 1;
  var result = "";
  for (var i = 0; i < img.length; i++){
    if (img.charAt(i) == img.charAt(i+1)){
      nb++;
    }
    else{
      result = result + nb + img.charAt(i);
      nb = 1;
    }
  }
  return result;
}

var result = lre(px);

document.write("la série de pixel est " + px + "et sa valeur compréssée est " + result);
