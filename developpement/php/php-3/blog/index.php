<?php

session_start();

include "application/bdd_connection.php";

$query=$pdo->prepare
(
  "SELECT Post.Id, Title, Contents, FirstName, LastName, creationTimestamp FROM Post INNER JOIN Author ON Author_Id = Author.Id"
);
$query->execute();
$articleInformations = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($articleInformations);


function getAverageGrade($id) {
  include "application/bdd_connection.php";
  $query=$pdo->prepare
  (
    "SELECT Post_Id, AVG(Note) AS averageGrade FROM Comment WHERE Post_Id=? GROUP BY Post_Id"
  );
  $query->execute([$id]);
  $averageGrade = $query->fetch(PDO::FETCH_ASSOC);
  return $averageGrade;
}
// $averageGrade = getAverageGrade(16);
// var_dump($averageGrade);

$template = "index";
include 'layout.phtml';

 ?>
