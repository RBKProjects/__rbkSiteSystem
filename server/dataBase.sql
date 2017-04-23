-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS `User`;
		
CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `admin` TINYINT NULL DEFAULT 0,
  `SuperAdmin` TINYINT NULL DEFAULT 0,
  `id_cohort` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
KEY (`id`)
);

-- ---
-- Table 'Question'
-- 
-- ---

DROP TABLE IF EXISTS `Question`;
		
CREATE TABLE `Question` (
  `id_trueFalseQuestion` INTEGER NULL DEFAULT NULL,
  `id_multichoice` INTEGER NULL DEFAULT NULL,
  `id_fillQuestion` INTEGER NULL DEFAULT NULL,
  `Id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY (`Id`)
);

-- ---
-- Table 'trueFalseQuestion'
-- 
-- ---

DROP TABLE IF EXISTS `trueFalseQuestion`;
		
CREATE TABLE `trueFalseQuestion` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `arabicText` INTEGER NULL DEFAULT NULL,
  `englishText` INTEGER NULL DEFAULT NULL,
  `truthyValue` VARCHAR NULL DEFAULT NULL,
  `falsyVAlue` INTEGER NULL DEFAULT NULL,
  `hisAnswer` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'multichoice'
-- 
-- ---

DROP TABLE IF EXISTS `multichoice`;
		
CREATE TABLE `multichoice` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `arabic` INTEGER NULL DEFAULT NULL,
  `english` INTEGER NULL DEFAULT NULL,
  `first` INTEGER NULL DEFAULT NULL,
  `sec` INTEGER NULL DEFAULT NULL,
  `third` INTEGER NULL DEFAULT NULL,
  `forth` INTEGER NULL DEFAULT NULL,
  `hisAnswer` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'fillQuestion'
-- 
-- ---

DROP TABLE IF EXISTS `fillQuestion`;
		
CREATE TABLE `fillQuestion` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `answer` INTEGER NULL DEFAULT NULL,
  `arabic` INTEGER NULL DEFAULT NULL,
  `english` INTEGER NULL DEFAULT NULL,
  `hisAnswer` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Tests'
-- 
-- ---

DROP TABLE IF EXISTS `Tests`;
		
CREATE TABLE `Tests` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Id_Question` INTEGER NOT NULL DEFAULT NULL,
  `id_UserCreateedBy` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'userAnswers'
-- 
-- ---

DROP TABLE IF EXISTS `userAnswers`;
		
CREATE TABLE `userAnswers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_UserAnswer` INTEGER NULL DEFAULT NULL,
  `Id_Question` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'cohort'
-- 
-- ---

DROP TABLE IF EXISTS `cohort`;
		
CREATE TABLE `cohort` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `User` ADD FOREIGN KEY (id_cohort) REFERENCES `cohort` (`id`);
ALTER TABLE `Question` ADD FOREIGN KEY (id_trueFalseQuestion) REFERENCES `trueFalseQuestion` (`id`);
ALTER TABLE `Question` ADD FOREIGN KEY (id_multichoice) REFERENCES `multichoice` (`id`);
ALTER TABLE `Question` ADD FOREIGN KEY (id_fillQuestion) REFERENCES `fillQuestion` (`id`);
ALTER TABLE `Tests` ADD FOREIGN KEY (Id_Question) REFERENCES `Question` (`Id`);
ALTER TABLE `Tests` ADD FOREIGN KEY (id_UserCreateedBy) REFERENCES `User` (`id`);
ALTER TABLE `userAnswers` ADD FOREIGN KEY (id_UserAnswer) REFERENCES `User` (`id`);
ALTER TABLE `userAnswers` ADD FOREIGN KEY (Id_Question) REFERENCES `Question` (`Id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Question` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `trueFalseQuestion` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `multichoice` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `fillQuestion` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Tests` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `userAnswers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `cohort` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `User` (`id`,`admin`,`SuperAdmin`,`id_cohort`) VALUES
-- ('','','','');
-- INSERT INTO `Question` (`id_trueFalseQuestion`,`id_multichoice`,`id_fillQuestion`,`Id`) VALUES
-- ('','','','');
-- INSERT INTO `trueFalseQuestion` (`id`,`arabicText`,`englishText`,`truthyValue`,`falsyVAlue`,`hisAnswer`) VALUES
-- ('','','','','','');
-- INSERT INTO `multichoice` (`id`,`arabic`,`english`,`first`,`sec`,`third`,`forth`,`hisAnswer`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `fillQuestion` (`id`,`answer`,`arabic`,`english`,`hisAnswer`) VALUES
-- ('','','','','');
-- INSERT INTO `Tests` (`id`,`Id_Question`,`id_UserCreateedBy`) VALUES
-- ('','','');
-- INSERT INTO `userAnswers` (`id`,`id_UserAnswer`,`Id_Question`) VALUES
-- ('','','');
-- INSERT INTO `cohort` (`id`) VALUES
-- ('');