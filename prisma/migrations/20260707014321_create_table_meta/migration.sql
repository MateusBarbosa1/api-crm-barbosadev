-- CreateTable
CREATE TABLE "Metas" (
    "id_meta" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dataCaixa" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Metas_pkey" PRIMARY KEY ("id_meta")
);
