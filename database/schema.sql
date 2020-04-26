DROP DATABASE IF EXISTS personnel;
CREATE DATABASE personnel;

USE personnel;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT(5),
    manager_id INT(5),
    PRIMARY KEY(id),
    FOREIGN KEY(role_id) REFERENCES role(id),
    FOREIGN KEY(manager_id) REFERENCES role(id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(6,2),
    department_id INT(5),
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department(id)
);