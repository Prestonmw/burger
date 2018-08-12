CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db.burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(300) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);