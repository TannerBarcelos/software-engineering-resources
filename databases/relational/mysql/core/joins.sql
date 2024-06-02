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
	CONCAT(c.city, ", ", c. `state`) AS "customer address"
FROM
	orders o
	JOIN customers c ON o.customer_id = c.customer_id;

# Select all the orders from the orders table and include the product details for each order. Hint: product details exist in the products table
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

# Select all the payments in the payment table and show which payment method was used. Hint: Payment method types are saved in the payment_methods table
SELECT
	p.payment_id,
	p.client_id,
	p.invoice_id,
	p.date,
	p.amount,
	m.name AS payment_method
FROM
	invoicing.payments p
	JOIN invoicing.payment_methods m ON p.payment_method = m.payment_method_id;

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


# COMPOUND JOINS
USE sql_store;
SHOW TABLES;

# Notice here, that we have many duplicated rows
SELECT
	*
FROM
	order_items oi
	JOIN order_item_notes oin ON oi.order_id = oin.order_id
		AND oi.product_id = oin.product_id;



# OUTER JOINS: Left outer, right outer; Used to select all data from one table and join a table from left or right onto it, whether the condition is true or not (allow nulls)
USE sql_store;
SHOW TABLES;

# Show all customers in the database and show all their orders whether they have an order(s) or not

# This can be done using a LEFT or RIGHT JOIN. Only thing tht changes in either query is the order of the table usage.

# LEFT JOIN - customers is the left table, so everything is selected. The orders table is being used to join onto the customers table, retrieving all values that match the condition. If there is no match, NULL is returned.
SELECT
	c.customer_id,
	c.first_name,
	o.order_id
FROM
	customers c
	LEFT OUTER JOIN orders o ON c.customer_id = o.customer_id;

# Note the OUTER keyword. Just like INNER, it is optional. If you put a direction on the join, while omitting the OUTER, it knows to use OUTER. If you don't use a direction, and still use JOIN, it uses inner

# RIGHT JOIN - Same as left, only the join is to the right. In this case, both left and right return the same values since we swapped the columns. So, we get all customers and their orders, whether there are any or not.
SELECT
	c.customer_id,
	c.first_name,
	o.order_id
FROM
	orders o
	RIGHT JOIN customers c ON c.customer_id = o.customer_id;

# LEFT joins are the most common joins