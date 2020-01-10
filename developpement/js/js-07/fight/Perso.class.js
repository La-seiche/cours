var FighterZ = function(name, hp, att, def, mag) {
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.def = def;
  this.mag = mag;
}

FighterZ.prototype.attack = function(def) {
  console.log(this);
  var degatAttack = this.att - def.def;
  def.hp -= degatAttack;
  console.log(this.name + " attaque et inflige " + degatAttack + " à " + def.name);
}

FighterZ.prototype.defend = function() {
  var defRisePourcent = Math.floor(Math.random() * 51);
  defRisePoints = Math.floor(this.def * defRisePourcent / 100)
  // console.log("la def augmente de " + defRisePoints)
  this.def += defRisePoints;
  console.log("La défense de " + this.name + " augmente de " + defRisePoints + " et passe à " + this.def);
}

FighterZ.prototype.spell = function(def) {
  var spellPoints = Math.floor(Math.random() * (this.mag + 1));
  def.hp -= spellPoints;
  this.magie -= spellPoints;
  console.log(this.name + " lance un sort et inflige " + spellPoints + " à " + def.name);
  console.log("Il reste à " + this.name + ", " + this.magie + "points de magie");
}
