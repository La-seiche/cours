<?php

include "application/bdd_connection.php";

$articleId = $_GET["Id"];
var_dump($articleId);

$query = $pdo->prepare
(
  "DELETE FROM Comment WHERE Post_Id=?"
);
$query->execute([$articleId]);
$deleteComments = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($deleteComments);

$query = $pdo->prepare
(
  "DELETE FROM Post WHERE Id=?"
);
$query->execute([$articleId]);
$deleteComments = $query->fetchAll(PDO::FETCH_ASSOC);

header("Location: admin.php");

 ?>
