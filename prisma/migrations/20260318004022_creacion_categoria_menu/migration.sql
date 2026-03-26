-- CreateTable
CREATE TABLE "CategoriaMenu" (
    "id" TEXT NOT NULL,
    "nombreCategoria" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL,

    CONSTRAINT "CategoriaMenu_pkey" PRIMARY KEY ("id")
);
