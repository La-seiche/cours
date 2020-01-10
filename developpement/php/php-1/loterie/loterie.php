<?php

$tabLoterie = [];

  for ($i = 0; $i < 6; $i++) {
    do{
      $nb = rand(1, 49);
    }
    while (in_array($nb, $tabLoterie) === true);
    array_push($tabLoterie, $nb);
  }
  sort($tabLoterie);

include "index.phtml";
 ?>
