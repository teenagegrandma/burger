CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
ID INT AUTO_INCREMENT NOT NULL,
burger_name varchar(255),
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (ID)
);