var age       = 30;
var firstName = 'Tom';

// == égal
// != different
// > strictement superieur
// >= superieur egal
// < strictement inferieur
// <= inferieur egal


if(age > 18)
{

    document.write('Il est majeur');

}

window.alert('coucou1');

if(age < 20)
{
    // Si la comparaison vaut le booléen true alors ce code s'exécute.
    document.write('<p>Vous avez moins de 20 ans.</p>');
}
else
{
    // Si la comparaison vaut le booléen false alors ce code s'exécute.
    document.write('<p>Vous avez plus de 20 ans.</p>');
}

window.alert('coucou2');

if(firstName == 'Elsa')
{
    document.write("<p>Vous vous appelez Elsa.</p>");
}
else if(firstName == 'Charlotte')
{
    document.write("<p>Vous vous appelez Charlotte.</p>");
}
else
{
    document.write("<p>Vous ne vous appelez ni Elsa ni Charlotte.</p>");
}

if((firstName == 'Tom') || (age != 30))
{
    // Si la comparaison vaut le booléen true alors ce code s'exécute.
    document.write("<p>Vous vous appelez Tom et vous n'êtes pas quadra.</p>");
}

switch(firstName) {
    case 'Elsa':
       document.write("<p>Vous vous appelez Elsa.</p>");
    break;

    case 'Charlotte':
         document.write("<p>Vous vous appelez Charlotte.</p>");
    break;

    case 'Nico':
         document.write("<p>Vous vous appelez Nico.</p>");
    break;

    case 'Paul':
         document.write("<p>Vous vous appelez Paul.</p>");
    break;

    default:
        document.write("<p>Erreur : vous n'avez pas de prénom !</p>");
    break;

    var test = "a";
    var test2 = 3;

    isNaN(test) // true
    isNaN(test2) // false

    var random = Math.random(); // renvoie un chiffre aléatoiret 1

    var num = Math.round(2.3);

    var str = 'BonJour';

    str = str.toLowerCase(); // bonjour
