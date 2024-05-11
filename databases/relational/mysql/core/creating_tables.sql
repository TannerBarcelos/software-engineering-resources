# Creating a table - We create based off a data model (ERD) we can create on paper or an app like eraser.io 
CREATE TABLE IF NOT EXISTS tanners_sample_table (
	user_id INT NOT NULL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL (5,
	2),
# $999.99/hr max
hired_on_date DATE
);

# Describe the shape and properties of a table
DESCRIBE tanners_sample_table;

# Inserting records into a table
INSERT INTO tanners_sample_table
		VALUES(1, 'tanner', 'barcelos', 88.92, '2022-02-07');
SELECT
	*
FROM
	tanners_sample_table;

# Altering a table - In this case, adding a new column to the table data model
ALTER TABLE tanners_sample_table
	ADD phone_no VARCHAR(12);

# Update (CRUD) a record in a db (in this case, adding phone number since we inserted it as null before)
UPDATE
	tanners_sample_table
SET
	phone_no = '888-999-1010'
WHERE
	user_id = 1;

# Change Column: allows changing the data type and properties but also allows renaming the column simultaneously.
ALTER TABLE tanners_sample_table CHANGE COLUMN phone_no phone_number VARCHAR(12);

SELECT
	*
FROM
	tanners_sample_table;

# calculate yearly pay for employees based off hourly rate
SELECT
	first_name,
	last_name,
	(hourly_pay * 8 * 365) AS salary # salary is hourly * hours worked per day * days in year
FROM
	tanners_sample_table;

# Modify column: used to change the data type or other properties of an existing column but not its name
ALTER TABLE tanners_sample_table MODIFY COLUMN phone_number VARCHAR(24);

# multiple inserts in one transaction
INSERT INTO tanners_sample_table
	VALUES
	(2, 'bob', 'builder', 22.00, '2021-01-02', '888-999-1111'), 
	(3, 'snob', 'ilder', 25.00, '2022-01-02', '888-999-2222'), 
	(4, 'cob', 'kilder', 44.00, '2023-01-02', '888-999-3333');

SELECT
	*
FROM
	tanners_sample_table;

