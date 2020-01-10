
// Classe voiture

// constructeur
var Voiture = function(m , d){
    // les propriétés 
    this.marque = m;
    this.model= d;
}

// méthodes
Voiture.prototype.avancer = function(){
    console.log("la voiture roule")
}






var v = new Voiture("vw", "passat");