'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
var pv = {
  dragon : 100,
  joueur : 100,
}

var level;

var attaker;

var damageOrdi;

var damagePlayer;

var turn = 0;

var winner;

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
function throwDices(nbD, nbX){
  var dice = 0;

  for (var i = 1; i <= nbD; i++){
    dice+= getRandomInteger(1, nbX);
  }
  return dice;
}

function initializeGame(){
  var min = 1;
  var max = 3;

  var niv = requestInteger("1-facile \n 2-moyen \n 3-difficile", min, max);

  if (niv <= min){
    level = "facile";
    pv.dragon+= throwDices(5, 10);
    pv.joueur+= throwDices(10, 10);
  }
  else if (niv >= max){
    level = "difficile";
    pv.dragon+= throwDices(10, 10);
    pv.joueur+= throwDices(7, 10);
  }
  else{
    level = "moyen";
    pv.dragon+= throwDices(10, 10);
    pv.joueur+= throwDices(10, 10);
  }
}

// initializeGame();

// console.log(level);
// console.log(pv);

function getAttacker(){
  var dragon = throwDices(10, 6);
  var joueur = throwDices(10, 6);

  if (dragon < joueur){
    attaker = "dragon";
  }
  else{
    attaker = "joueur";
  }
}

// getAttacker();

// console.log(attaker);

function damageDragon(){
    damageOrdi = throwDices(3, 6);

  switch (level){
    case "facile":
      var majoPlayer = throwDices(2, 6) / 100;
      damageOrdi += Math.floor(damageOrdi * majoPlayer);
      break;

    case "difficile":
      var minoPlayer = throwDices(1, 6) / 100;
      damageOrdi -= Math.floor(damageOrdi * minoPlayer);
      break;
  }
}

// damageDragon();

// console.log(damageOrdi);

function damageKnight(){
    damagePlayer = throwDices(3, 6);

  switch (level){
    case "facile":
      var minoDragon = throwDices(2, 6)/100;
      damagePlayer -= Math.floor(damagePlayer * minoDragon);
      break;

    case "difficile":
      var majoDragon = throwDices(1, 6)/100;
      damagePlayer += Math.floor(damagePlayer * majoDragon);
      break;
  }
}

// damageKnight();

// console.log(damagePlayer);

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

function gameLoop(){
  initializeGame();
  while(pv.dragon > 0 && pv.joueur > 0){
    turn++;
    getAttacker();
    switch (attaker){
      case "dragon":
        damageKnight();
        pv.joueur -= damagePlayer;
        break;

      case "joueur":
          damageDragon();
          pv.dragon -= damageOrdi;
          break;
    }
    showGameState();
    showWinner();
  }
}

gameLoop();

function showGameState(){
  console.log(turn);
  console.log(pv);
  document.write("<li class=round-log player-attacks>");
  document.write("<h2 class=subtitle>Tour n°" + turn + "</h2>");
  document.write("</li>");
  document.write("<li class=game-state>");
  document.write("<figure>");
  document.write("<img src=images/knight.png alt=Chevalier>");
  document.write("<figcaption>");
  document.write(pv.joueur);
  document.write("</figcaption>")
  document.write("</figure>");
  document.write("<figure>");
  document.write("<img src=images/dragon.png alt=Dragon>");
  document.write("<figcaption>");
  document.write(pv.dragon);
  document.write("</figcaption>");
  document.write("</figure>");
  document.write("</li>");
  if (attaker === "dragon"){
    document.write("<img src=images/dragon-winner.png alt=Dragon>");
    document.write("<p> Le dragon est le plus rapide, il attaque et inflige " + damagePlayer + " au chevalier");
  }
  else{
    document.write("<img src=images/knight-winner.png alt=Chevalier>");
    document.write("<p> Le chevalier est le plus rapide, il attaque et inflige " + damageOrdi + " au dragon");
  }
}

function showWinner(){
  if (pv.dragon <= 0){
    pv.dragon = 0;
    winner = "joueur";
    document.write("<li class=game-end>");
    document.write("<p class=title> Fin de partie </p>");
    document.write("<p>Vous avez gagné le dragon est vaincu</p>");
    document.write("<img src=images/knight-winner.png alt=Dragon>");
    document.write("</li>");
  }
  else if (pv.joueur <= 0){
    pv.joueur = 0;
    winner = "dragon";
    document.write("<li class=game-end>");
    document.write("<p class=title> Fin de partie </p>");
    document.write("<p>Vous avez perdu le combat, le dragon vous a carbonisé !</p>");
    document.write("<img src=images/dragon-winner.png alt=Dragon>");
    document.write("</li>");
  }
  console.log(winner);
}
