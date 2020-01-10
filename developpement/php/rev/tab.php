<?php

$tab = [
    73 =>"karim",
    22 => "Anais",
    33 => "",
    128 => "Yanni",
    20 => "Philippe", 
    
    ];


//    la méthode qaui permet de vérifier si une valeur existe dans le tableau
in_array("tancred", $tab);

// http://localhost/tab.php?prenom=tancred
// prenom=tancred => parametres


in_array($_GET['prenom'], $tab);


// vérification de l'existence d'une clé dans un tablea
array_key_exists(22 , $tab);


// récupération d'une clé par la valeur
array_search("karim", $tab);


// verifie si la variable existe
isset($tab[33]);

// vérifier si la variable est vide
empty($tab[33]);



// on ne peut pas parcourir un tableau avec la boucle for sauf si on a laissé les clés par défaut à,1,2...
for($i=0; $i< count($tab); $i++)
{
    echo $tab[$i];
}


$test = "45ab";
// vérifie que tous les caractères sont des chiffres
ctype_digit($test); // => false

// vérifie que tous les caractères sont des alpha
ctype_alpha($test); // => false