-- THIS FILE REPRESENTS DDL


-- CREATE DATABASE talently;

-- Create an ENUM custom type since this is how we create enums in PG
CREATE TYPE employment_status_enum AS ENUM('employed', 'self-employed', 'unemployed');

CREATE TABLE users(
        user_name VARCHAR(200),                         -- 200 Bytes (200 characters in UTF-8 encoding [1byte = 1 char in UTF-8])
        yearly_salary INT,                              -- No salary exists outside the max range of an integer (float is fine as well for more precision)
        employment_status employment_status_enum        -- ENUM of possible, strict employment types for an employee
);


CREATE TABLE employers (
        company_name VARCHAR(250),
        company_address VARCHAR(300),
        yearly_revenue NUMERIC(16, 2),                  -- precise value since dealing with money Syntax: NUMERIC(digits, precision) so 16 digit number with precision of 2 (2 digits after the .)
        is_hiring BOOLEAN                               -- if the company is hiring or not
);


CREATE TABLE conversation (
        user_name VARCHAR(200),
        employer_name VARCHAR(250),
        message TEXT,                                   -- TEXT type defines a column datatype to accept any length of text (within the max range the database could theoretically hold) 
        date_sent TIMESTAMP
);