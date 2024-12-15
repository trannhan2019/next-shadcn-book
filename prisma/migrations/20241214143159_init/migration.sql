-- CreateTable
CREATE TABLE `Congty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten` VARCHAR(191) NOT NULL,
    `tenVietTat` VARCHAR(191) NULL,
    `diachi` VARCHAR(191) NULL,
    `sdt` VARCHAR(191) NULL,
    `trangThai` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PhongBan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten` VARCHAR(191) NOT NULL,
    `tenVietTat` VARCHAR(191) NULL,
    `congtyId` INTEGER NOT NULL,
    `trangThai` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'MANAGER', 'USER') NOT NULL DEFAULT 'USER',
    `trangThai` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `phongBanId` INTEGER NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PhongBan` ADD CONSTRAINT `PhongBan_congtyId_fkey` FOREIGN KEY (`congtyId`) REFERENCES `Congty`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_phongBanId_fkey` FOREIGN KEY (`phongBanId`) REFERENCES `PhongBan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
