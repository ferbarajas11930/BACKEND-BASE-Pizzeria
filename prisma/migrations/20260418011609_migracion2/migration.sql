-- CreateEnum
CREATE TYPE "TipoEntrega" AS ENUM ('LOCAL', 'LLEVAR', 'DOMICILIO');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('PENDIENTE', 'EN_PREPARACION', 'LISTO', 'ENTREGADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "FormaPago" AS ENUM ('EFECTIVO', 'TARJETA', 'TRANSFERENCIA');

-- CreateTable
CREATE TABLE "Clientes" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "cumpleanos" TIMESTAMP(3),
    "referencias" TEXT,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sucursales" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "responsable" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cp" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sucursales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empleados" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "puesto" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "domicilio" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "numEmergencia" TEXT NOT NULL,
    "tipoSangre" TEXT NOT NULL,
    "discapacidad" BOOLEAN NOT NULL DEFAULT false,
    "genero" TEXT NOT NULL,
    "sucursalId" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empleados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "id" TEXT NOT NULL,
    "numeroPedido" SERIAL NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numeroMesa" INTEGER,
    "clienteId" TEXT NOT NULL,
    "sucursalId" TEXT NOT NULL,
    "tipoEntrega" "TipoEntrega" NOT NULL,
    "estado" "EstadoPedido" NOT NULL DEFAULT 'PENDIENTE',
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallePedido" (
    "id" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "extras" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "termino" TEXT NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" TEXT NOT NULL,
    "numeroTicket" SERIAL NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pedidoId" TEXT NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "iva" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "descuento" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tarifaEnvio" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cajas" (
    "id" TEXT NOT NULL,
    "numeroCaja" SERIAL NOT NULL,
    "ticketId" TEXT NOT NULL,
    "formaPago" "FormaPago" NOT NULL,
    "referenciaPago" TEXT,
    "fechaPago" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cajas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Empleados_correo_key" ON "Empleados"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Pedidos_numeroPedido_key" ON "Pedidos"("numeroPedido");

-- CreateIndex
CREATE UNIQUE INDEX "Tickets_numeroTicket_key" ON "Tickets"("numeroTicket");

-- CreateIndex
CREATE UNIQUE INDEX "Tickets_pedidoId_key" ON "Tickets"("pedidoId");

-- CreateIndex
CREATE UNIQUE INDEX "Cajas_numeroCaja_key" ON "Cajas"("numeroCaja");

-- CreateIndex
CREATE UNIQUE INDEX "Cajas_ticketId_key" ON "Cajas"("ticketId");

-- AddForeignKey
ALTER TABLE "Empleados" ADD CONSTRAINT "Empleados_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cajas" ADD CONSTRAINT "Cajas_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
