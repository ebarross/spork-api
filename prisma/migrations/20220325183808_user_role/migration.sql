-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('MASTER', 'ADMIN', 'USER') NOT NULL DEFAULT 'USER';
