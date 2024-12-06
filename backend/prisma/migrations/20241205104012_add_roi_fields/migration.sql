/*
  Warnings:

  - You are about to drop the column `date_debut` on the `Roi` table. All the data in the column will be lost.
  - You are about to drop the column `date_fin` on the `Roi` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Roi` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `Roi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ddeathDate` to the `Roi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Roi` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Roi` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Roi" DROP COLUMN "date_debut",
DROP COLUMN "date_fin",
DROP COLUMN "nom",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ddeathDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
