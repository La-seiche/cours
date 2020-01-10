<?php

function translate($mot,$sensDeTraduction) {
  $dictionnaire = [
    "putain" => "fuck",
    "salope" => "biatch",
    "connard" => "douchbag",
    "chat" => "cat",
    "soleil" => "sun",
    "mer" => "sea"
  ];
  if ($sensDeTraduction === "fr-ang") {
    if (array_key_exists($mot, $dictionnaire)) {
      $traduction = $dictionnaire[$mot];
    }
    else {
      $traduction ="Bisousnours";
    }
  }
  else {
    if (in_array($mot, $dictionnaire)) {
      $traduction = array_search($mot, $dictionnaire);
      // var_dump($traduction);
    }
    else {
      $traduction = "Bisousnours";
    }
  }
  return $traduction;
}

if (empty($_POST) === false) {
  // var_dump($_POST);
  $mot = $_POST["mot"];
  $sensDeTraduction = $_POST["sens"];
  $traduction = translate($mot,$sensDeTraduction);
}
else {
  $traduction = null;
}


include"index.phtml";
 ?>
