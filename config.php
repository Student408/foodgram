<?php
header('Content-Type: application/json');

// Database configuration
$host = 'localhost';
$dbname = 'foodgram';
$username = 'root';
$password = ''; // Replace with your MySQL password

// Create a connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => "Connection failed: " . $e->getMessage()]);
    exit;
}

// Function to fetch categories
function getCategories($pdo) {
    $query = "SELECT * FROM categories";
    $stmt = $pdo->query($query);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Function to fetch menu items
function getMenuItems($pdo, $category = 'all') {
    if ($category === 'all') {
        $query = "SELECT * FROM menu_items";
        $stmt = $pdo->query($query);
    } else {
        $query = "SELECT * FROM menu_items WHERE category_id = :category";
        $stmt = $pdo->prepare($query);
        $stmt->execute(['category' => $category]);
    }
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Determine which data to fetch based on the request
$action = $_GET['action'] ?? 'menu_items';
$category = $_GET['category'] ?? 'all';

if ($action === 'categories') {
    $data = getCategories($pdo);
} else {
    $data = getMenuItems($pdo, $category);
}

// Return data as JSON
echo json_encode($data);
?>