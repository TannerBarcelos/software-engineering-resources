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