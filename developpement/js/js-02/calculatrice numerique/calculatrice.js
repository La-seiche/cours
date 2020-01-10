

"use strict"

var a = parseFloat(window.prompt("Entrez un chiffre"));
var b = parseFloat(window.prompt("Entrez un deuxième chiffre"));
var operation = window.prompt("choisissez une opération mathématique");
var result;

switch(operation)
{
  case "adition":
  case "+":
    result = a + b;
  break;

  case "soustraction":
  case "-":
    result = a - b;
  break;

  case "multiplication":
  case "*":
    result = a * b;
  break;

  case "division":
  case "/":
    if (b == 0) {
      document.write("<p>Il est impossible de diviser par 0</p>");
    }
    else {
      result = a/b;
    }
  break;

  case "puissance":
  case "^":
    result = a**b;
  break;
}

if (isNaN(result) == true ) {
  document.write("Opération impossible car l'un de vos chiffre n'est pas un chiffre !!");
}
else{
  document.write("<p>Le résultat est : " + result + "</p>");
}
