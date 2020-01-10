<?php

var_dump($_POST);



if(empty($_POST) == false) {

$title = $_POST["titre"];
$task = $_POST["tache"];
$day = $_POST["day"];
$month = $_POST["month"];
$year = $_POST["year"];
$date = $year."-".$month."-".$day;
$priority = $_POST["priorite"];
$file = fopen("todo.csv", "a+");
$todayDate = date_create();
var_dump($todayDate);

$newTask = [
  $title,
  $task,
  $date,
  $priority
];

fputcsv($file, $newTask);
fclose($file);

$file2 = fopen("todo.csv", "a+");
$tasks = [];

while(true) {
  $taskData = fgetcsv($file);
  if ($taskData == false) {
    break;
  }
  array_push($tasks, $taskData);
}

fclose($file2);
var_dump($file2);
}

include"index.phtml";
 ?>
