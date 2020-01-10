<?php


$file2 = fopen('classe.csv', 'a+');
$newTask = [ 'Ramirez', 'Bernard', '65' ];
fputcsv($file2, $newTask); //enregistrer données dans un fichier
fclose($file2); //fermer le fichier

$file = fopen('classe.csv', 'a+'); // ouvrir n'importe quel fichier (fopen) a+ lecture et écriture et place le curseur à la fin du fichier

$tasks = [];

//$taskData = fgetcsv($file);

while(true) { // boucle infini

    $taskData = fgetcsv($file); //extraire ligne avec le pointeur et place le pointeur à la ligne suivante
    if($taskData == false){
        break; //stop la boucle dès qu'une ligne est vide
    }
    array_push($tasks, $taskData);
}

fclose($file);

var_dump($tasks);

$tabs = ['a', 'b', 'c', 'd'];

include 'test.phtml';

?>
