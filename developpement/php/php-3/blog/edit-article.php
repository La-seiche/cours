<?php

session_start();

include "application/bdd_connection.php";

$articleId = $_GET["Id"];

$query=$pdo->prepare
(
  "SELECT Post.Id, Title, Contents FROM `Post` WHERE Post.Id = ?"
);
$query->execute([$articleId]);

$articleInformations = $query->fetch(PDO::FETCH_ASSOC);
// var_dump($articleInformations);

if (empty($_POST) === false && isset($_POST["title"]) && isset($_POST["content"])) {
  $editArticle = $_POST;
  // var_dump($editArticle);

  $title = $editArticle["title"];
  $content = $editArticle["content"];

    $query = $pdo->prepare
    (
      "UPDATE Post SET Title = ?, Contents = ? WHERE Id=?"
    );
    $query->execute([$title, $content, $articleId]);
    $article = $query->fetch(PDO::FETCH_ASSOC);
    // var_dump($article);

    header("Location: admin.php");
}

$template = "edit-article";
include 'layout.phtml';

 ?>
