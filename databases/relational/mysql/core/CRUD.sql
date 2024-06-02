###
# Schema for below insert queries
-- CREATE TABLE `orders` (
--   `order_id` int NOT NULL AUTO_INCREMENT,
--   `customer_id` int NOT NULL,
--   `order_date` date NOT NULL,
--   `status` tinyint NOT NULL DEFAULT '1',
--   `comments` varchar(2000) DEFAULT NULL,
--   `shipped_date` date DEFAULT NULL,
--   `shipper_id` smallint DEFAULT NULL,
--   PRIMARY KEY (`order_id`),
-- ) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
###

# For primary keys, and any columns with a DEFAULT attribute tied to it, if your data entry operation as a column that is empty, then we can just use DEFAULT as the value to that column so the DB knows to use the fallback value as a default. In CRUD, users might omit various values in a form in a UI since they can be optional. When this happens, the insert will just take the default value as it's value.

# CRUD

# Create
INSERT INTO orders
		VALUES(DEFAULT, 5, NOW(), DEFAULT, 'this is a test', DEFAULT, 5);

# READ
SELECT * FROM orders;

# UPDATE
UPDATE orders SET status = 2, comments = "This is updated by me"
WHERE order_id = 12;

# DELETE 
DELETE FROM orders WHERE order_id = 14;

# Delete multiple records in 1 shot
DELETE FROM orders WHERE order_id IN (13);