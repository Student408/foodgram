<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodGram</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <header class="header">
            <h1 class="logo">FoodGram</h1>
            <div class="cart-icon" id="cart-icon">
                <span class="material-icons-round">shopping_bag</span>
                <span class="cart-count">0</span>
            </div>
        </header>
        <main id="main-content">
            <section id="home-tab" class="tab-content active">
                <nav class="categories" id="categories">
                    <?php
                    // PHP code to fetch and display categories dynamically
                    // Example:
                    // foreach ($categories as $category) {
                    //     echo "<div class='category'>{$category['name']}</div>";
                    // }
                    ?>
                </nav>
                <div id="menu-items" class="menu-grid">
                    <?php
                    // PHP code to fetch and display menu items dynamically
                    // Example:
                    // foreach ($menuItems as $item) {
                    //     echo "<div class='menu-item'>{$item['name']}</div>";
                    // }
                    ?>
                </div>
            </section>

            <section id="explore-tab" class="tab-content">
                <div class="search-bar">
                    <span class="material-icons-round">search</span>
                    <input type="text" id="search-input" placeholder="Search dishes, restaurants...">
                </div>
                <div id="explore-grid" class="explore-grid">
                    <!-- Explore grid items will be dynamically added here -->
                </div>
            </section>


            <section id="favorites-tab" class="tab-content">
                <h2>Your Favorites</h2>
                <div id="favorites-list" class="favorites-grid">
                    <?php
                    // PHP code to fetch and display favorite items dynamically
                    // Example:
                    // foreach ($favorites as $item) {
                    //     echo "<div class='favorite-item'>{$item['name']}</div>";
                    // }
                    ?>
                </div>
            </section>

            <section id="profile-tab" class="tab-content">
                <h2>Your Profile</h2>
                <!-- Add profile content here -->
            </section>

            <section id="cart-tab" class="tab-content">
                <h2>Your Cart</h2>
                <div id="cart-items">
                    <?php
                    // PHP code to fetch and display cart items dynamically
                    // Example:
                    // foreach ($cartItems as $item) {
                    //     echo "<div class='cart-item'>{$item['name']}</div>";
                    // }
                    ?>
                </div>
                <div id="cart-total">Total: $0.00</div>
                <button id="checkout-btn" class="primary-button">Checkout</button>
            </section>
        </main>

        <nav class="bottom-nav">
            <div class="nav-item active" data-tab="home-tab">
                <span class="material-icons-round">home</span>
                <span>Home</span>
            </div>
            <div class="nav-item" data-tab="explore-tab">
                <span class="material-icons-round">explore</span>
                <span>Explore</span>
            </div>
            <div class="nav-item" data-tab="favorites-tab">
                <span class="material-icons-round">favorite</span>
                <span>Favorites</span>
            </div>
            <div class="nav-item" data-tab="profile-tab">
                <span class="material-icons-round">person</span>
                <span>Profile</span>
            </div>
        </nav>
    </div>

    <script src="script.js"></script>
</body>

</html>