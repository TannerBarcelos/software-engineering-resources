# Creating a table - We create based off a data model (ERD) we can create on paper or an app like eraser.io
CREATE TABLE IF NOT EXISTS tanners_sample_table(
	user_id INT NOT NULL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL(5, 2), # $999.99/hr max
	hired_on_date DATE
);

# Inserting records into a table
INSERT INTO tanners_sample_table
VALUES (1, 'tanner', 'barcelos', 88.92, '2022-02-07');

SELECT * FROM tanners_sample_table;

# Altering a table - In this case, adding a new column to the table data model
ALTER TABLE tanners_sample_table ADD phone_no VARCHAR(12);

# Update (CRUD) a record in a db (in this case, adding phone number since we inserted it as null before)
UPDATE tanners_sample_table
SET phone_no='888-999-1010'
WHERE user_id=1;

# Update column name
ALTER TABLE tanners_sample_table CHANGE COLUMN phone_no phone_number VARCHAR(12);

SELECT * FROM tanners_sample_table;

# calculate yearly pay for employees based off hourly rate
SELECT
	first_name,
	last_name,
	(hourly_pay * 8 * 365) AS salary # salary is hourly * hours worked per day * days in year
FROM
	tanners_sample_table;