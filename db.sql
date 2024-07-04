-- Create categories table
CREATE TABLE `categories` (
  `id` varchar(20) PRIMARY KEY,
  `name` varchar(50) NOT NULL,
  `icon` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insert data into categories table
INSERT INTO `categories` (`id`, `name`, `icon`) VALUES
('all', 'All', '🍽️'),
('desserts', 'Desserts', '🍰'),
('drinks', 'Drinks', '🍹'),
('main', 'Main Course', '🍖'),
('sides', 'Sides', '🥗');

-- Create menu_items table
CREATE TABLE `menu_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category_id` varchar(20) NOT NULL,
  FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insert data into menu_items table
INSERT INTO `menu_items` (`name`, `price`, `category_id`) VALUES
('Grilled Chicken', 12.99, 'main'),
('Caesar Salad', 8.99, 'sides'),
('Chocolate Cake', 6.99, 'desserts'),
('Iced Tea', 2.99, 'drinks'),
('Steak', 19.99, 'main'),
('Mashed Potatoes', 4.99, 'sides'),
('Cheesecake', 7.99, 'desserts'),
('Lemonade', 2.99, 'drinks');
