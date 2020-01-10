var goku = new FighterZ("Goku", 300, 50, 7, 120);
console.log(goku);

var vegeta = new FighterZ("Vegeta", 280, 45, 18, 160);
console.log(vegeta);

$("#attack").on("click", function(e) {
  goku.attack(vegeta);
});
$("#defend").on("click", goku.defend);
$("#magic").on("click", function(e) {
  goku.spell(vegeta);
});
