/*
  Warnings:

  - You are about to drop the column `descripcion` on the `CategoriaMenu` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CategoriaMenu" DROP COLUMN "descripcion",
ADD COLUMN     "disponible" BOOLEAN NOT NULL DEFAULT true;
