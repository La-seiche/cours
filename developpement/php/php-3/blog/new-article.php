<?php

session_start();

include "application/bdd_connection.php";

$query = $pdo->prepare
(
  "SELECT Id, FirstName, LastName FROM Author"
);
$query->execute();
$authorList = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($authorList);

$query = $pdo->prepare
(
  "SELECT Id, Name FROM Category"
);
$query->execute();
$categoryList = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($categoryList);

if (empty($_POST) === false && isset($_POST["title"]) && isset($_POST["content"]) && isset($_POST["author"]) && isset($_POST["category"])) {
  $newArticle = $_POST;
  var_dump($newArticle);

  $title = $newArticle["title"];
  $content = $newArticle["content"];
  $authorId = $newArticle["author"];
  $categoryId = $newArticle["category"];

  $query = $pdo->prepare
  (
    "INSERT INTO Post (Title, Contents, Author_Id, Category_Id, CreationTimestamp) VALUES (?, ?, ?, ?, NOW())"
  );
  $query->execute([$title, $content, $authorId, $categoryId]);
  $article = $query->fetch(PDO::FETCH_ASSOC);
  var_dump($article);

  header("Location: index.php");
}

$template = "new-article";
include 'layout.phtml';

 ?>
