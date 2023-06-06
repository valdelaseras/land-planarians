/*
  Warnings:

  - You are about to drop the column `activity` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `phase` on the `MoonPhase` table. All the data in the column will be lost.
  - Added the required column `name` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `MoonPhase` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Activity" ("id") SELECT "id" FROM "Activity";
DROP TABLE "Activity";
ALTER TABLE "new_Activity" RENAME TO "Activity";
CREATE TABLE "new_MoonPhase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_MoonPhase" ("id") SELECT "id" FROM "MoonPhase";
DROP TABLE "MoonPhase";
ALTER TABLE "new_MoonPhase" RENAME TO "MoonPhase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
