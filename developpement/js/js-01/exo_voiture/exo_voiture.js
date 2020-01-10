'use strict';

var voiture = {
  marque : "Benz",
  annee : "1990",
  achat : new Date('2013-06-20'),
  passager : ["pierre", "jean"]
}

document.write("<p><strong>Information sur la voiture :</strong></p>" + "<ul><li>Marque : "+ voiture.marque + "</li>" + "<li>Année de fabrication : " + voiture.annee + "</li>" + "<li>Date de l'achat : " + voiture.achat.toDateString() + "</li>" + "<li>Passager 1 : " + voiture.passager[0] + "</li>" + "<li>Passager 2 : " +  voiture.passager[1] + "</li></ul>");
