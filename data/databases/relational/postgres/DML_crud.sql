-- C in CRUD in DML
-- Creating records with insert

-- INSERT way # 1 - Using column names in the query [this is used when you might want to only enter some column data and not all / change insertion order]
INSERT INTO users
(user_name, yearly_salary, employment_status)
VALUES ('Tanner Barcelos', 152000, 'employed');

-- INSERT way # 2 - Omitting the column list [not needed if entering every piece of data IN THE EXACT ORDER THE COLUMNS WERE DEFINED IN THE DDL]
INSERT INTO users
VALUES ('Hayden Barcelos', 72000, 'employed');


SELECT * FROM users;

---------

-- Using the schema name to reference tables in it (not needed if using the schema the table resides in within your RDBMS)
INSERT INTO public.employers
VALUES ('Apple', '123 Apple Way', 1000000000000.00, true);

INSERT INTO employers
VALUES ('Google', '456 Google Way', 109012000000.90, true);

-- selecting using schema name and table name (again, not needed*)
SELECT * FROM public.employers;

---------
INSERT INTO conversation
-- Using column names here just to make sure I remember order / data to enter (and for demonstration)
(user_name, employer_name, message, date_sent)
VALUES ('Tanner Barcelos', 'Apple', 'Hello! I am interested in working at Apple', '2023-07-19 21:21:20');

-- Column Aliasing
SELECT user_name AS "Name", 
        employer_name AS "Employer", 
        message AS "Message Sent", 
        date_sent AS "Date Sent" 
FROM conversation;