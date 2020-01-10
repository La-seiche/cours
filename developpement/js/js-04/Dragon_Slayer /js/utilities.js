'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function getRandomInteger(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// var result = getRandomInteger(2, 6);

// console.log(result);


function requestInteger(message, min, max) {
    var integer;
    do {

        integer = parseInt(window.prompt(message));

    } while (isNaN(integer) === true || integer < min || integer > max);

    return integer;

}

// var result2 = requestInteger('choisir un entier', 1, 5);
