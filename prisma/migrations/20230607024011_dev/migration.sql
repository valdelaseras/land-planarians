-- CreateTable
CREATE TABLE `Observation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `datetime` DATETIME(3) NULL,
    `environment` ENUM('FOREST', 'GRASSLAND', 'WETLAND', 'SHRUBLAND', 'ALPINE', 'URBAN', 'CAVES', 'DUNES', 'RIVERBEDS', 'MOUNTAINS', 'FARMLAND', 'PARKS', 'GARDENS', 'OTHER') NOT NULL,
    `coordinatesId` INTEGER NULL,
    `moonPhase` ENUM('NEW_MOON', 'WANING_CRESCENT', 'THIRD_QUARTER', 'WANING_GIBBOUS', 'FULL_MOON', 'WAXING_GIBBOUS', 'FIRST_QUARTER', 'WAXING_CRESCENT') NOT NULL,
    `temperature` INTEGER NULL,
    `weather` VARCHAR(191) NULL,
    `humidity` INTEGER NULL,
    `note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Individual` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fluorescence` ENUM('DETECTED', 'NOT_DETECTED', 'NOT_DETERMINED') NOT NULL,
    `status` ENUM('ALIVE', 'DECEASED', 'UNKNOWN') NOT NULL,
    `activity` ENUM('UNKNOWN', 'PASSIVE', 'RESTING', 'MOVING', 'SEARCHING', 'HUNTING', 'AGGRESSIVE', 'DEFENSIVE', 'EATING', 'MATING', 'REPRODUCING', 'DECEASED', 'OTHER') NOT NULL,
    `observationId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coordinates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `latitude` VARCHAR(191) NOT NULL,
    `longitude` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Observation` ADD CONSTRAINT `Observation_coordinatesId_fkey` FOREIGN KEY (`coordinatesId`) REFERENCES `Coordinates`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Individual` ADD CONSTRAINT `Individual_observationId_fkey` FOREIGN KEY (`observationId`) REFERENCES `Observation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
