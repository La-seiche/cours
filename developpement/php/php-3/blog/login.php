<?php

session_start();

include "application/bdd_connection.php";
include "application/lib.php";

$error = null;
if (empty($_POST) === false) {
  $query = $pdo->prepare
  (
    "SELECT * FROM Users WHERE Email = ?"
  );
  $query->execute([$_POST["email"]]);
  $user = $query->fetch(PDO::FETCH_ASSOC);

  if ($user === false) {
    $error = "Adresse email introuvable";
  }
  else {
    if ( verifyPassword($_POST['password'], $user['Password']) ) {
      $_SESSION["email"] = $user["Email"];
      $_SESSION["firstName"] = $user["FirstName"];
      $_SESSION["lastName"] = $user["LastName"];
      $_SESSION["role"] = $user["Role"];
      header("Location: index.php");
      exit();
    }
    else {
      $error = "Mot de passe incorrect";
    }
  }
}

$template = 'login';
include 'layout.phtml';

 ?>
