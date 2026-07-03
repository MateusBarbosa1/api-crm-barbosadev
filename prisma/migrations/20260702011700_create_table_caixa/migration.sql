-- CreateTable
CREATE TABLE "Caixa" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "faturamento" DOUBLE PRECISION NOT NULL,
    "lucro" DOUBLE PRECISION NOT NULL,
    "despesas" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Caixa_pkey" PRIMARY KEY ("id")
);
