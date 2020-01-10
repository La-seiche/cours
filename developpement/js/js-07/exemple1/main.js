// var studient1 = new Studient('Abdoul', 21, "Math", 4);
//
// console.log(studient1);
//
// var studient2 = new Studient('Pierre', 41, "Cirque", 5);
//
// console.log(studient2);
//
// studient2.noter(3);
//
// studient2.sayMyName();
//
// studient2.frapper(studient1);

var promo = new Promo();

console.log(promo);

promo.promo[0].name // abdoul

promo.promo[0].frapper(promo.promo[1]);

promo.listePromo();
