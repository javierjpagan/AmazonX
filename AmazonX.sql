DROP DATABASE IF EXISTS AmazonXDB;
CREATE DATABASE AmazonXDB;

USE AmazonXDB;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Olympic Barbell", "Weights", 180, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("45 lb plate", "Weights", 45, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("35 lb plate", "Weights", 35, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("25 lb plate", "Weights", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("10 lb plate", "Weights", 10, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("5 lb plate", "Weights", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Foam Roller", "Accessories", 30, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "Accessories", 20, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Weightlifting Gloves", "Accessories", 14.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xplode Pre-Workout", "Supplements", 24.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Creatine", "Supplements", 15, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Organic Protein", "Supplements", 39.99, 8);
