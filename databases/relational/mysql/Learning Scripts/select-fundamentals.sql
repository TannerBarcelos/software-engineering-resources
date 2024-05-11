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
	points > 2000;

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
	AND state = 'CA'