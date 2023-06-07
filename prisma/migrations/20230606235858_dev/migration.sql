-- CreateTable
CREATE TABLE `Observation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isAlive` BOOLEAN NOT NULL,
    `quantity` INTEGER NULL,
    `datetime` DATETIME(3) NULL,
    `fluorescence` BOOLEAN NULL,
    `activity` ENUM('PASSIVE', 'MOVING', 'EATING', 'MATING') NOT NULL,
    `coordinatesId` INTEGER NULL,
    `moonPhase` ENUM('NEW_MOON', 'WANING_CRESCENT', 'THIRD_QUARTER', 'WANING_GIBBOUS', 'FULL_MOON', 'WAXING_GIBBOUS', 'FIRST_QUARTER', 'WAXING_CRESCENT') NOT NULL,
    `temperature` INTEGER NULL,
    `weather` VARCHAR(191) NULL,
    `humidity` INTEGER NULL,
    `note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coordinates` (
    `id` INTEGER NOT NULL,
    `latitude` VARCHAR(191) NOT NULL,
    `longitude` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Observation` ADD CONSTRAINT `Observation_coordinatesId_fkey` FOREIGN KEY (`coordinatesId`) REFERENCES `Coordinates`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
