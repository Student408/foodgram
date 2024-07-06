-- Insert dummy data into Users table
INSERT INTO users (username, password, email, first_name, last_name)
VALUES
    ('user1', 'password1', 'user1@example.com', 'John', 'Doe'),
    ('user2', 'password2', 'user2@example.com', 'Jane', 'Smith'),
    ('user3', 'password3', 'user3@example.com', 'Michael', 'Johnson');

-- Insert dummy data into Admin table
INSERT INTO admin (username, password, email)
VALUES
    ('admin1', 'adminpass1', 'admin1@example.com'),
    ('admin2', 'adminpass2', 'admin2@example.com');

-- Insert 10 rows into Categories table
INSERT INTO categories (name, description, search_term)
VALUES
    ('Appetizers', 'Delicious starters to whet your appetite', 'appetizers'),
    ('Main Courses', 'Heartwarming main dishes for every taste', 'main courses'),
    ('Desserts', 'Sweet treats to end your meal on a high note', 'desserts'),
    ('Drinks', 'Refreshing beverages to accompany your meal', 'drinks'),
    ('Salads', 'Healthy and fresh salad options', 'salads'),
    ('Sandwiches', 'Tasty sandwiches for a quick bite', 'sandwiches'),
    ('Pizza', 'Delicious pizzas with various toppings', 'pizza'),
    ('Seafood', 'Fresh seafood dishes from the ocean', 'seafood'),
    ('Vegetarian', 'Vegetarian dishes for those who prefer plant-based meals', 'vegetarian'),
    ('Gluten-Free', 'Gluten-free options for dietary restrictions', 'gluten-free');
    

-- Insert 20 rows into Menu Items table
INSERT INTO menu_items (category_id, name, description, price, search_term)
VALUES
    (1, 'Bruschetta', 'Toasted bread topped with tomatoes, garlic, and basil', 8.99, 'bruschetta'),
    (1, 'Chicken Wings', 'Crispy fried chicken wings with your choice of sauce', 12.50, 'chicken wings'),
    (1, 'Caprese Salad', 'Fresh mozzarella, tomatoes, and basil with balsamic glaze', 10.99, 'caprese salad'),
    (2, 'Spaghetti Bolognese', 'Classic Italian pasta with meat sauce', 15.99, 'spaghetti bolognese'),
    (2, 'Steak', 'Grilled steak served with mashed potatoes and vegetables', 25.99, 'steak'),
    (2, 'Lasagna', 'Layers of pasta, cheese, and meat sauce baked to perfection', 18.50, 'lasagna'),
    (3, 'Chocolate Cake', 'Decadent chocolate cake with chocolate frosting', 9.99, 'chocolate cake'),
    (3, 'Ice Cream Sundae', 'Vanilla ice cream topped with hot fudge, whipped cream, and a cherry', 7.50, 'ice cream sundae'),
    (3, 'Cheesecake', 'Creamy cheesecake with a graham cracker crust', 12.75, 'cheesecake'),
    (4, 'Soda', 'Classic carbonated soft drinks in various flavors', 2.50, 'soda'),
    (4, 'Iced Tea', 'Refreshing iced tea with lemon', 3.00, 'iced tea'),
    (5, 'Greek Salad', 'Crisp lettuce, tomatoes, cucumbers, olives, and feta cheese', 11.25, 'greek salad'),
    (5, 'Caesar Salad', 'Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing', 9.50, 'caesar salad'),
    (6, 'Turkey Sandwich', 'Roasted turkey, lettuce, tomato, and mayo on whole wheat bread', 8.75, 'turkey sandwich'),
    (6, 'BLT Sandwich', 'Bacon, lettuce, tomato, and mayo on toasted bread', 7.99, 'blt sandwich'),
    (7, 'Margherita Pizza', 'Classic pizza with tomato sauce, mozzarella, and basil', 14.99, 'margherita pizza'),
    (7, 'Pepperoni Pizza', 'Pizza topped with pepperoni slices and mozzarella cheese', 16.50, 'pepperoni pizza'),
    (8, 'Grilled Salmon', 'Grilled salmon fillet served with rice and steamed vegetables', 22.99, 'grilled salmon'),
    (8, 'Shrimp Scampi', 'Sauteed shrimp in garlic butter sauce served over pasta', 19.75, 'shrimp scampi'),
    (9, 'Vegetable Stir Fry', 'Assorted vegetables stir-fried in a savory sauce', 13.50, 'vegetable stir fry'),
    (9, 'Quinoa Salad', 'Quinoa mixed with vegetables, herbs, and vinaigrette dressing', 10.99, 'quinoa salad'),
    (10, 'Gluten-Free Pizza', 'Pizza with a gluten-free crust and various toppings', 15.50, 'gluten-free pizza'),
    (10, 'Vegetarian Burger', 'Plant-based burger patty served with lettuce, tomato, and avocado', 11.99, 'vegetarian burger');

-- Insert dummy data into Reviews table
INSERT INTO reviews (user_id, menu_item_id, rating, comment)
VALUES
    (1, 1, 4, 'Delicious appetizer, loved the fresh tomatoes!'),
    (2, 3, 5, 'Best spaghetti I have ever had, highly recommended!');

-- Insert dummy data into Cart table
INSERT INTO cart (user_id)
VALUES
    (1),
    (2);

-- Insert dummy data into Cart Items table
INSERT INTO cart_items (cart_id, menu_item_id, quantity)
VALUES
    (1, 1, 2),
    (1, 3, 1),
    (2, 2, 3);

-- Insert dummy data into Orders table
INSERT INTO orders (user_id, total_price, status)
VALUES
    (1, 45.97, 'completed'),
    (2, 37.50, 'pending');

-- Insert dummy data into Order Items table
INSERT INTO order_items (order_id, menu_item_id, quantity, price)
VALUES
    (1, 1, 2, 17.98),
    (1, 3, 1, 15.99),
    (2, 2, 3, 37.50);

-- Insert dummy data into Notifications table
INSERT INTO notifications (user_id, message, is_read)
VALUES
    (1, 'Your order has been delivered.', TRUE),
    (2, 'New menu items available! Check them out.', FALSE);

-- Insert dummy data into Addresses table
INSERT INTO addresses (user_id, address_line1, city, state, zip_code, country)
VALUES
    (1, '123 Main St', 'New York', 'NY', '10001', 'USA'),
    (2, '456 Elm St', 'Los Angeles', 'CA', '90001', 'USA');

-- Insert dummy data into Payments table
INSERT INTO payments (order_id, payment_method, amount)
VALUES
    (1, 'Credit Card', 45.97),
    (2, 'PayPal', 37.50);

-- Insert dummy data into Favorites table
INSERT INTO favorites (user_id, menu_item_id)
VALUES
    (1, 1),
    (2, 3);




