-- CreateTable
CREATE TABLE "Proovedores" (
    "id" TEXT NOT NULL,
    "nombreProveedor" TEXT NOT NULL,
    "telefonoProveedor" TEXT NOT NULL,
    "domicilioProveedor" TEXT NOT NULL,
    "rfcProveedor" TEXT NOT NULL,
    "emailProveedor" TEXT NOT NULL,
    "tipoProducto" TEXT NOT NULL,

    CONSTRAINT "Proovedores_pkey" PRIMARY KEY ("id")
);
