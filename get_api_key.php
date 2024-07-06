<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'apikey.php';
header('Content-Type: application/json');
echo json_encode(['apiKey' => $apiKey]);
?>
