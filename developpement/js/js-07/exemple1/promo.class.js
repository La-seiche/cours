var Promo = function() {
    this.promo = [new Studient('Abdoul', 21, "Math", 4), new Studient('Pierre', 41, "Cirque", 5)]
    this.otherStudient = new Studient('Gege', 56, "Français", 4)
}


Promo.prototype.listePromo = function() {

    for(var i = 0; i < this.promo.length; i++) {
        document.write('<p>'+this.promo[i].name+'</p>');
    }

}
