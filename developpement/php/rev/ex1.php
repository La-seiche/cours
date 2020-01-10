<form action="" >

    <input type="text" name="prenom-user" id="">
    <input type="submit" value="valider">

</form>


<?php


// la méthode par défaut du formulaire si on l'a définit pas c'est GET 
$prenom = $_GET['prenom-user'];


// Si non ça sera avect POST
$prenom = $_POST['prenom-user'];


/***************ACTION***************** */

//le GET et/ou le POST sont récupérables sur la page qui se trouve dans action

// si action est vide , donc les variables sont récupérables sur la même page