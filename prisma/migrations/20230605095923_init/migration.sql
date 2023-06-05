/*
  Warnings:

  - Added the required column `isAlive` to the `Observation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Observation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isAlive" BOOLEAN NOT NULL,
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
INSERT INTO "new_Observation" ("activityId", "coordinatesId", "datetime", "fluorescence", "humidity", "id", "moonPhaseId", "note", "quantity", "temperature", "weather") SELECT "activityId", "coordinatesId", "datetime", "fluorescence", "humidity", "id", "moonPhaseId", "note", "quantity", "temperature", "weather" FROM "Observation";
DROP TABLE "Observation";
ALTER TABLE "new_Observation" RENAME TO "Observation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
