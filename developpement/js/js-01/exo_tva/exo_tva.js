"use strict";

const TAUX_DE_TVA = 19.6;

var montantHT = window.prompt("Quel est le prix HT ?");
montantHT = parseFloat(montantHT);

var montantTVA = montantHT * TAUX_DE_TVA / 100;
var montantTTC = montantHT + montantTVA;

document.write("<p>Le montant HT est de : " + montantHT + " €</p>");
document.write("<p>Le montant de la TVA est de : " + montantTVA + " €</p>");
document.write("<p>Le montant TTC est de : " + montantTTC + " €</p>");
