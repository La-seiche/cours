var test = "freedom";
document.write(test);

var num1 = 2;
var num2 = 5;
var result = num1 + num2;
document.write(result);

const TAUX_DE_TVA = 20.0;
var montantHT;
var montantTTC;
var montantTVA;
montantHT = 100;
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;
document.write("<p>");
document.write(montantTTC);
document.write("</p>");
document.write('<p>Le montant total est de : '+montantTTC+' €</p>');

var name = "Bernard";
var lastName = "Colona";
var age = 78;
document.write('<p> Bonjour mon nom est '+name+'</p>');
document.write('<p> '+name+' '+lastName+ 'est agé de '+age+ 'ans </p>');
