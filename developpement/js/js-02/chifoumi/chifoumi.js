"use strict";

var choix = window.prompt("Papier, Caillou, Ciseaux");
choix = choix.toLowerCase();

var ordi = ["papier", "caillou", "ciseaux"];
var random = Math.round(Math.random()*2); //le soucis c'est qu'entre 0,5 et 1,5 l'ordi arrondi à 1
ordi = ordi[random];

document.write("<p>L'ordi fait ....<strong>" + ordi + "</strong></p>")

switch(choix)
{
  case "papier" :
    if (ordi == "papier")
      {
        document.write("Egalité de papier");
      }
    else if (ordi == "caillou")
      {
        document.write("Gagné : la feuille bat le papier");
      }
    else
      {
        document.write("Perdu : les ciseaux coupent la feuille");
      }
  break;

  case "ciseaux":
  if (ordi == "ciseau")
    {
      document.write("Egalité de ciseaux");
    }
  else if (ordi == "caillou")
    {
      document.write("Perdu : la pierre casse les ciseaux");
    }
  else
    {
      document.write("Gagné : les ciseaux coupent la feuille");
    }
  break;

  case "caillou":
  if (ordi == "papier")
    {
      document.write("Perdu : la feuille bat le papier");
    }
  else if (ordi == "caillou")
    {
      document.write("Egalité de cailloux");
    }
  else
    {
      document.write("Gagné : Le caillou bat les ciseaux");
    }
  break;

  default:
    document.write("Attention, il faut choisir entre papier, caillou ou ciseaux !!")
}
