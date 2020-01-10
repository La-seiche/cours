<?php 
$tab = [];
$test;

class Personnage {
    private $prenom;
    private $age;

    function __construct( $prenom, $age ) {
        $this->prenom = $prenom;
        $this->age = $age;
    }

    function getPrenom() {
        return $this->prenom;
    }

    function getAge() {
        return $this->age;
    }
}

$people = [
    new Personnage("mark", 12 ),
    new Personnage("nico", 40 ),
    new Personnage("mary", 9 ),
    new Personnage("susan", 40 ),
    new Personnage("harry", 26 ),
    new Personnage("amy", 12 ),
    new Personnage("julien", 17 ),
    new Personnage("laura", 12 ),
    new Personnage("ludo", 40 ),
    new Personnage("percy", 32 )
];
var_dump($people);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Gupter&display=swap" rel="stylesheet">
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main class="container">

        <h1><?= "test code" ?></h1>
        <p><?=  "créateur de php : Rasmus Lerdorf "?></p>  
        <p><?=  "crée en : 1994 "?></p>
        <p><?=  "heritage multiple dispo depuis php 5.3 "?></p>
        <button class="event">Cliques ici pour l'alerte !</button>

    </main>

    <script src="js/jquery.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>
</html>