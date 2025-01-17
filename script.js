// Global variables
let menuItems = [];
let categories = [];
let cart = [];


// Selecting elements from the DOM
const categoriesContainer = document.getElementById('categories');
const menuItemsContainer = document.getElementById('menu-items');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.querySelector('.cart-count');
const checkoutButton = document.getElementById('checkout-btn');
const searchInput = document.getElementById('search-input');
const exploreGrid = document.getElementById('explore-grid');

// Function to fetch data from PHP backend
async function fetchData(action, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    try {
        const response = await fetch(`config.php?action=${action}&${queryString}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to search items
async function searchItems(query) {
    return await fetchData('search', { query });
}


// Function to fetch the API key
async function fetchApiKey() {
    try {
      const response = await fetch('get_api_key.php');
      if (!response.ok) {
        throw new Error('Failed to fetch API key');
      }
      const data = await response.json();
      return data.apiKey;
    } catch (error) {
    //   console.error('Error fetching API key:', error);
      throw error; // rethrow the error to handle it elsewhere if needed
    }
  }
  
  // Function to fetch images from Pixabay API
  async function fetchImages(query) {
    try {
      const apiKey = await fetchApiKey();
      const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      return data.hits;
    } catch (error) {
      console.error('Error fetching images:', error);
      return []; // return empty array on error
    }
  }
  

  
// Load menu items from PHP backend and fetch images
async function loadMenuItems(category = 'all') {
    menuItemsContainer.innerHTML = '<div class="loading">Loading menu items...</div>';
    menuItems = await fetchData('menu_items', { category });

    menuItemsContainer.innerHTML = '';
    for (let item of menuItems) {
        let images = await fetchImages(item.name);
        let imageUrl = images.length > 0 ? images[0].webformatURL : 'https://via.placeholder.com/300';
        
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.innerHTML = `
            <div class="menu-item-image">
                <img src="${imageUrl}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-details">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-price">$${parseFloat(item.price).toFixed(2)}</div>
                <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
            </div>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    }
}

async function loadCategories() {
    categoriesContainer.innerHTML = '<div class="loading">Loading categories...</div>';
    categories = await fetchData('categories');
    categoriesContainer.innerHTML = '';
    
    // Add "All" category
    const allCategoryElement = document.createElement('div');
    allCategoryElement.className = 'category active';
    allCategoryElement.setAttribute('data-category', 'all');
    allCategoryElement.innerHTML = `
        <div class="category-image">
            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/banner-3.jpg" alt="All Categories" loading="lazy">

        </div>
        <span>All Categories</span>
    `;
    categoriesContainer.appendChild(allCategoryElement);
    
    for (let category of categories) {
        let images = await fetchImages(category.name);
        let imageUrl = images.length > 0 ? images[0].webformatURL : 'https://via.placeholder.com/100';
        
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category';
        categoryElement.setAttribute('data-category', category.id);
        
        categoryElement.innerHTML = `
            <div class="category-image">
                <img src="${imageUrl}" alt="${category.name}" loading="lazy">
            </div>
            <span>${category.name}</span>
        `;
        
        categoriesContainer.appendChild(categoryElement);
    }
}

// Add item to cart
function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Update cart UI
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image || 'https://via.placeholder.com/60'}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${parseFloat(item.price).toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <span class="material-icons-round">delete</span>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Switch tabs
function switchTab(tabId) {
    const tabContent = document.getElementById(tabId);
    if (!tabContent) {
        console.error(`Tab content not found for id: ${tabId}`);
        return;
    }

    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    tabContent.classList.add('active');

    const navItem = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (!navItem) {
        console.error(`Nav item not found for tab: ${tabId}`);
        return;
    }

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    navItem.classList.add('active');
}

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Event listeners
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
    }

    if (e.target.classList.contains('cart-item-remove')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        removeFromCart(id);
    }

    if (e.target.classList.contains('quantity-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const item = cart.find(item => item.id === id);
        if (item) {
            if (e.target.classList.contains('plus')) {
                item.quantity += 1;
            } else if (e.target.classList.contains('minus')) {
                item.quantity = Math.max(0, item.quantity - 1);
                if (item.quantity === 0) {
                    removeFromCart(id);
                }
            }
            updateCart();
        }
    }

    if (e.target.closest('.category')) {
        const categoryElement = e.target.closest('.category');
        const category = categoryElement.getAttribute('data-category');
        document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
        categoryElement.classList.add('active');
        loadMenuItems(category);
    }

    if (e.target.closest('.nav-item')) {
        const tabId = e.target.closest('.nav-item').getAttribute('data-tab');
        switchTab(tabId);
    }
});

document.getElementById('cart-icon').addEventListener('click', () => {
    switchTab('cart-tab');
});

checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your order!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty. Add some items before checking out.');
    }
});

// Debounced search event listener
searchInput.addEventListener('input', debounce(function() {
    const query = this.value.trim();
    if (query.length > 0) {
        displaySearchResults(query);
    } else {
        exploreGrid.innerHTML = '';
    }
}, 300));

// Function to display search results (placeholder - implement as needed)
async function displaySearchResults(query) {
    // Implement search functionality here
    console.log(`Searching for: ${query}`);
    // You might want to fetch search results from the server and display them in the exploreGrid
}




// ... (keep existing code)

// Function to fetch random images from Pixabay
async function fetchRandomImages(count = 20) {
    const apiKey = await fetchApiKey();
    
    try {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=food&per_page=${count}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching random images:', error);
        return [];
    }
}

// Function to display random images in the explore grid
async function displayRandomImages() {
    exploreGrid.innerHTML = '<div class="loading">Loading images...</div>';
    const images = await fetchRandomImages();
    exploreGrid.innerHTML = '';

    images.forEach(image => {
        const imageElement = document.createElement('div');
        imageElement.className = 'explore-item';
        imageElement.innerHTML = `
            <div class="explore-item-image">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
            </div>
        `;
        exploreGrid.appendChild(imageElement);
    });
}

// Function to display search results in Instagram-like format
async function displaySearchResults(query) {
    exploreGrid.innerHTML = '<div class="loading">Searching...</div>';
    const results = await searchItems(query);
    exploreGrid.innerHTML = '';

    if (results.length === 0) {
        exploreGrid.innerHTML = '<div class="no-results">No results found</div>';
        return;
    }

    for (let item of results) {
        let images = await fetchImages(item.search_term || item.name);
        let imageUrl = images.length > 0 ? images[0].webformatURL : 'https://via.placeholder.com/300';
        
        const itemElement = document.createElement('div');
        itemElement.className = 'explore-item';
        itemElement.innerHTML = `
            <div class="explore-item-image">
                <img src="${imageUrl}" alt="${item.name}" loading="lazy">
            </div>
            <div class="explore-item-details">
                ${item.type === 'menu_item' ? `
                ` : ''}
                
            </div>
        `;
        exploreGrid.appendChild(itemElement);
    }
}


// Update the debounced search event listener
searchInput.addEventListener('input', debounce(function() {
    const query = this.value.trim();
    if (query.length > 0) {
        displaySearchResults(query);
    } else {
        displayRandomImages();
    }
}, 300));

// Initialize explore tab with random images
function initExploreTab() {
    displayRandomImages();
}

// Update the init function to initialize the explore tab
async function init() {
    await loadCategories();
    await loadMenuItems('all');
    updateCart();
    initExploreTab();
}

// ... (keep the rest of the existing code)



init();