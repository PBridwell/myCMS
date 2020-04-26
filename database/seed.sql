-- Seed data for department table. Populate this first

INSERT INTO department (name)
VALUES ("Sales"), ("IT");

-- Seed Data for role table. Populate this next 

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 50000.2, 1), ("Lead Developer", 100000, 2);

-- Seed Data for employees

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Deer", 1), ("Jane", "Doe", 2);