<?php

$orderNumber = $_GET["orderNumber"];
// var_dump($orderNumber);

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
    "SELECT orderNumber, orders.customerNumber, customerName, contactLastName, contactFirstName, addressLine1, city FROM orders INNER JOIN customers ON customers.customerNumber=orders.customerNumber WHERE orderNumber = ?"
);
$query->execute([$orderNumber]);

$client = $query->fetch(PDO::FETCH_ASSOC);

// var_dump($client);

$query = $pdo->prepare
(
    "SELECT orderNumber, orderdetails.productCode, quantityOrdered, priceEach, orderLineNumber, productName FROM orderdetails INNER JOIN products ON products.productCode=orderdetails.productCode WHERE orderNumber = ? ORDER BY orderLineNumber ASC"
);
$query->execute([$orderNumber]);

$order = $query->fetchAll(PDO::FETCH_ASSOC);

// var_dump($order);

$totalPrice = 0;
foreach ($order as $detail) {
  $linePrice = $detail["quantityOrdered"] * $detail["priceEach"];
  $totalPrice += $linePrice;
}
// var_dump($totalPrice);

$amountTVA = number_format(($totalPrice * 20 / 100), 2);
// var_dump($amountTVA);

$totalTTC = number_format(($totalPrice + $amountTVA), 2);
// var_dump($totalTTC);

include 'order.phtml';

 ?>
