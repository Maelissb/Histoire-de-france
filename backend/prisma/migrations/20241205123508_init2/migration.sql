/*
  Warnings:

  - You are about to drop the column `ddeathDate` on the `Roi` table. All the data in the column will be lost.
  - Added the required column `deathDate` to the `Roi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Roi" DROP COLUMN "ddeathDate",
ADD COLUMN     "deathDate" TIMESTAMP(3) NOT NULL;
