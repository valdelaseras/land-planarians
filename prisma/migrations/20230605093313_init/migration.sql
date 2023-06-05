-- CreateTable
CREATE TABLE "Activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "activity" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Coordinates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MoonPhase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phase" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Observation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER,
    "datetime" DATETIME,
    "fluorescence" BOOLEAN,
    "activityId" INTEGER,
    "coordinatesId" INTEGER,
    "moonPhaseId" INTEGER,
    "temperature" INTEGER,
    "weather" TEXT,
    "humidity" INTEGER,
    "note" TEXT,
    CONSTRAINT "Observation_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Observation_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Observation_moonPhaseId_fkey" FOREIGN KEY ("moonPhaseId") REFERENCES "MoonPhase" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Observation" ("datetime", "fluorescence", "id", "quantity") SELECT "datetime", "fluorescence", "id", "quantity" FROM "Observation";
DROP TABLE "Observation";
ALTER TABLE "new_Observation" RENAME TO "Observation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
