<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodGram</title>
    <link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600&display=swap" rel="stylesheet">
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
                    <!-- Categories will be dynamically added here -->
                </nav>
                <div id="menu-items" class="menu-grid">
                    <!-- Menu items will be dynamically added here -->
                </div>
            </section>
            
            <section id="explore-tab" class="tab-content">
                <!-- <h2>Explore</h2> -->
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
                    <!-- Favorite items will be dynamically added here -->
                </div>
            </section>
            
            <section id="profile-tab" class="tab-content">
                <h2>Your Profile</h2>
                <!-- Add profile content here -->
            </section>

            <section id="cart-tab" class="tab-content">
                <h2>Your Cart</h2>
                <div id="cart-items">
                    <!-- Cart items will be dynamically added here -->
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