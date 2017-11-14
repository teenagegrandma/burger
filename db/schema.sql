-- DROP DATABASE IF EXISTS burgers_db;
-- Create Database --
-- CREATE DATABASE burgers_db;--
-- USE burgers_db;

-- Create Table for Burgers --
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);