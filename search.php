<?php
require_once 'config.php';

// Function to fetch menu items based on search query
function searchMenuItems($query) {
    global $pdo;
    $stmt = $pdo->prepare("
        SELECT m.*, c.name AS category_name, c.icon AS category_icon
        FROM menu_items m
        JOIN categories c ON m.category_id = c.id
        WHERE m.name LIKE :query OR c.name LIKE :query
        ORDER BY c.name, m.name
    ");
    $stmt->execute(['query' => '%' . $query . '%']);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Handle the search request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['query'])) {
        $query = $_GET['query'];

        // Fetch menu items based on the search query
        $menuItems = searchMenuItems($query);

        // Prepare JSON response
        header('Content-Type: application/json');
        echo json_encode($menuItems);
        exit;
    }
}

// Return empty JSON if no query parameter is provided
echo json_encode([]);
?>