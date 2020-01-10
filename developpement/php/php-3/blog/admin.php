<?php

session_start();

include "application/bdd_connection.php";

$query = $pdo->prepare
(
  "SELECT Post.Id, Title, Contents, FirstName, LastName, Name From Post INNER JOIN Author ON Author.Id = Author_Id INNER JOIN Category ON Category.Id = Category_Id"
);
$query->execute();
$articleInformations = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($articleInformations);

$template = "admin";
include 'layout.phtml';

 ?>
