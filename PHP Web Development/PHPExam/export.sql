create database softuni_library;

use softuni_library;

CREATE TABLE `users` (
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(255) NOT NULL,
  `born_on` DATE NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username` (`username`)
)
  ENGINE=InnoDB
;

CREATE TABLE `genres` (
  `name` VARCHAR(50) NOT NULL,
  `genre_id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`genre_id`)
)
  ENGINE=InnoDB
;

CREATE TABLE `books` (
  `title` VARCHAR(50) NOT NULL,
  `author` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `genre_id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  `added_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `books_id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`books_id`),
  INDEX `FK_books_genres` (`genre_id`),
  INDEX `FK_books_users` (`user_id`),
  CONSTRAINT `FK_books_genres` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`genre_id`),
  CONSTRAINT `FK_books_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
)
  COLLATE='utf8_general_ci'
  ENGINE=InnoDB
;



INSERT INTO `softuni_library`.`genres` (`name`) VALUES ('Drama');
INSERT INTO `softuni_library`.`genres` (`name`) VALUES ('Educational');
INSERT INTO `softuni_library`.`genres` (`name`) VALUES ('Adventure');