<?php

session_start();

include "application/bdd_connection.php";

$articleId = $_GET["Id"];
// var_dump($articleId);

if (empty($_POST) === false && isset($_POST["nickname"]) && isset($_POST["comment"]) && isset($_POST["grade"])) {
  var_dump($_POST);
  $nickname = $_POST["nickname"];
  $comment = $_POST["comment"];
  $grade = $_POST["grade"];
  $query = $pdo->prepare
  (
    "INSERT INTO Comment (Nickname, Contents, CreationTimestamp, Post_Id, Note) VALUES (?, ?, NOW(), ?, ?) "
  );
  $query->execute([$nickname, $comment, $articleId, $grade]);

  $newComment = $query->fetch(PDO::FETCH_ASSOC);
  // var_dump($newComment);
}

$query=$pdo->prepare
(
  "SELECT Post.Id, Title, Contents, FirstName, LastName, Post.creationTimestamp FROM `Post` INNER JOIN Author ON Author_Id = Author.Id WHERE Post.Id = ?"
);
$query->execute([$articleId]);

$articleInformations = $query->fetch(PDO::FETCH_ASSOC);
// var_dump($articleInformations);

$query = $pdo->prepare
(
  "SELECT Id, Nickname, Contents, CreationTimestamp FROM Comment WHERE Post_Id = ?"
);
$query->execute([$articleId]);

$comments = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($comments);

$template = "article";
include 'layout.phtml';

 ?>
