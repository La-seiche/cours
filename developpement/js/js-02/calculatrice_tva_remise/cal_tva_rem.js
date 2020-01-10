"use strict"

const TAUX_DE_TVA = 20;
var montantHT = parseFloat(window.prompt("Prix d\'achat HT :"));

var montantTVA = montantHT * TAUX_DE_TVA / 100;
var montantTTC = montantHT + montantTVA;

var remise = window.prompt("Voulez vous une remise ?");

if(remise == "oui"||remise == "yes")
{
  var tauxRemise = parseFloat(window.prompt("Quel taux de remise souhaitez-vous ?"));
  var montantRemise = montantTTC * (tauxRemise/100);
  montantTTC = montantTTC - montantRemise
  document.write("<p>Pour un montant HT de " + montantHT + " il y a " + montantTVA + " € de TVA.</p>");
  document.write("<p>Le montant TTC est donc de " + montantTTC + " €.</p>");
  document.write("<p>Une remise de " + tauxRemise + "% a été appliquée sur le montant HT.</p>");
}
else
{
  document.write("<p>Pour un montant HT de " + montantHT + " il y a " + montantTVA + " € de TVA.</p>");
  document.write("<p>Le montant TTC est donc de " + montantTTC + " €.</p>");
  document.write("<p>Aucune remise n'a été appliquée</p>");
}
