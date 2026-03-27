/*
  Warnings:

  - You are about to drop the column `disponible` on the `CategoriaMenu` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CategoriaMenu" DROP COLUMN "disponible";

-- AlterTable
ALTER TABLE "Proovedores" ADD COLUMN     "disponible" BOOLEAN NOT NULL DEFAULT true;
