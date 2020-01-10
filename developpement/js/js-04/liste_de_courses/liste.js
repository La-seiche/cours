"use strict";

var liste = ["fraises", "pommes", "patate", "salade"];

display(liste);

function ajouter(x){
  var ajout = window.prompt("Que voulez vous ajouter à la liste de course ??");
  x.push(ajout);
}

ajouter(liste);
display(liste);

function supprimer(y){
  var sup = window.prompt("Que voulez vous supprimer ??");
  if (y.indexOf(sup) < 0){
    window.alert("Le produit : " + sup + " ne fait pas partit de la liste de courses !!");
  }
  y.splice(y.indexOf(sup), 1);
}

supprimer(liste);
display(liste);

function supprimerTout(listeArg){
  var choix = window.prompt("Voulez-vous supprimer la liste ??");
  choix = choix.toLowerCase();
  if (choix == "oui"){
    listeArg = [];
  }
  return listeArg;
}

liste = supprimerTout(liste);
display(liste);

function display(a){
  console.log(a.length);
  for (var i = 0; i<a.length; i++){
    console.log(a[i]);
  }
}
