/*
  Warnings:

  - Added the required column `datetime` to the `Observation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fluorescence` to the `Observation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Observation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "datetime" DATETIME NOT NULL,
    "fluorescence" BOOLEAN NOT NULL
);
INSERT INTO "new_Observation" ("id", "quantity") SELECT "id", "quantity" FROM "Observation";
DROP TABLE "Observation";
ALTER TABLE "new_Observation" RENAME TO "Observation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
