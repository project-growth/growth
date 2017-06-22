DROP DATABASE IF EXISTS grow;

CREATE DATABASE grow;

USE grow;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `email` CHAR(100) NOT NULL,
  `password` CHAR(200) NOT NULL,
  PRIMARY KEY (`id`)
);


-- ---
-- Table 'postings'
--
-- ---

DROP TABLE IF EXISTS `postings`;

CREATE TABLE `postings` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `heading` VARCHAR(150) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `poster_id` INTEGER(100) NOT NULL,
  `status` VARCHAR(10) NOT NULL,
  `created_at` INTEGER(30) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `postings` ADD FOREIGN KEY (poster_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `postings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`email`,`password`) VALUES
-- ('','','');
-- INSERT INTO `postings` (`id`,`description`,`poster_id`,`active`,`created_at`) VALUES
-- ('','','','','');
