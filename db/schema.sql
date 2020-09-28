/* Schema */

DROP DATABASE IF EXISTS go_fish_db;
CREATE DATABASE go_fish_db;
USE go_fish_db;

CREATE TABLE go_fish_stats
(
	id int NOT NULL AUTO_INCREMENT,
	wins INT,
    loss INT,
    tie INT,
	PRIMARY KEY (id)
);