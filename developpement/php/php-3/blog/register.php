<?php

session_start();

include "application/bdd_connection.php";
include "application/lib.php";

if(empty($_POST) === false) {
    var_dump($_POST);

    $hashPassword = hashPassword($_POST['password']);

    $query = $pdo->prepare(
            'INSERT INTO Users (Email, Password, Role, FirstName, LastName) VALUES (?, ?, "user", ?, ?)'
        );
     $query->execute([ $_POST['email'], $hashPassword, $_POST['firstName'], $_POST['lastName'] ]);

    Header('Location: login.php');
    exit();
}


$template = "register";

include 'layout.phtml';
?>
