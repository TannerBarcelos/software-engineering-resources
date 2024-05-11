# This is an INNER JOIN - Used to select all records in both tables and combine them into 1 result set
# using a common key (column) on both tables. Most commonly, ID's.
# In this case, we are getting all the orders in our database and including all customer information in each result record in the set, REGARDLESS OF NULL VALUES		
SELECT
	o.order_id AS "order id",
	o.order_date AS "order date",
	o.status AS "order status",
	o.shipped_date AS "date shipped",
	c.customer_id AS "customer id",
	CONCAT(c.first_name, " ", c.last_name) AS "customer name",
	CONCAT(c.city, ", ", c.`state`) AS "customer address"
FROM
	orders o
	JOIN customers c ON o.customer_id = c.customer_id;

# Select all the orders and include the product details for each order. Hint: product details exist in the products table
SELECT
	oi.order_id,
	oi.unit_price,
	oi.product_id,
	oi.quantity,
	p. `name`
FROM
	order_items oi
	JOIN products p ON oi.product_id = p.product_id
WHERE
	oi.order_id = 2;

# Join across databases
SELECT
	*
FROM
	sql_store.order_items oi
	JOIN products p ON oi.product_id = p.product_id;


# SELF JOINS: Used to join data on itself from various columns in the source table
USE sql_hr;

SELECT
	e.employee_id AS 'Employee Id',
	CONCAT(e.first_name, ", ", e.last_name) AS 'Employee Name',
	CONCAT(m.first_name, ", ", m.last_name) AS 'Reporting Manager'
FROM
	employees e
	JOIN employees m ON e.reports_to = m.employee_id;