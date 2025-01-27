# SELECT: Used to select data (rows) from a table. * is used to select all columns for our result set. 
SELECT * FROM shippers;

# Basic select with calculated column
SELECT
	last_name,
	first_name,
	points,
	# calulated column , AS = column alias (so this selected value is a calculated column with an alias of points_...)
	points * 10 AS points_times_ten_calculated_value
FROM
	customers
ORDER BY
	points DESC;

# Return all the products by name, unit price and a new price calculated as (unit price * 1.1) from the products table
SELECT
	name,
	unit_price,
	unit_price * 1.1 AS new_price
FROM
	products;

# Using the WHERE clause to filter down the result set by a specific value
SELECT
	*
FROM
	customers
WHERE
	points > 2000
	OR points BETWEEN 2100 AND 4500;

# Get all the orders after the year 1990
SELECT
	*
FROM
	orders
WHERE
	order_date >= '1990-01-01';

# Using OR / AND boolean operators to narrow down the WHERE clause
# Select all customers that are born after 1990 OR have more than 1000 points and live in CA
SELECT
	*
FROM
	customers
WHERE
	birth_date > '1990-01-01'
	OR points > 1000
	AND state = 'CA';

# From the order_items table, get the items for order # 6 where the total price is greater than 30
SELECT
	*
FROM
	order_items
WHERE
	order_id = 6
	AND(unit_price * quantity) > 30;

# IN operator: used to select a range of values in a column that can exist i.e. state in CA, FLA, OR, etc.
SELECT
	*
FROM
	customers
WHERE
	state IN('CA', 'FL', 'OR');

# Return all the products with quantity in stock = to 49, 38, 72
SELECT
	*
FROM
	products
WHERE
	quantity_in_stock IN(49, 38, 72);


# LIKE operator: Used to match a filter by some expression (regex) i.e. get all users that have a last name starting with the letter b
SELECT
	*
FROM
	customers
WHERE
	# 'b%' says find all last_name with b as first char and % to catchall any other chars
	last_name LIKE 'b%'; 
	
# This is similar to REGEXP keyword but REGEXP contains more power

# This query gets all customers with a last name starting with (^ symbol) the letter b or starting with the letters D through F
SELECT * FROM customers WHERE last_name REGEXP '^b|^[d-f]';


# Using the IS NULL operator to select records that contain a NULL column
# Select all orders that have not shipped
SELECT
	*
FROM
	orders
WHERE
	shipped_date IS NULL;


# LIMIT clause: used to limit the result set to a select range defined by an offset
# This comes in handy when you need pagination or doing things like "find the top 5 movies, find the bottom 3 contestants in the race, etc."

# In this case, we provide 1 value to limit, so we start at offset 0 and limit the range to 5, so we select 5 customers
SELECT
	*
FROM
	customers
LIMIT 5;

# What if we want to select the top 3 most loyal customers? hint: loyalty is defined by point value
SELECT
	*
FROM
	customers
ORDER BY
	points DESC
LIMIT 3;