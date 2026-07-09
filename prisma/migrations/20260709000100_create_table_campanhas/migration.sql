-- CreateTable
CREATE TABLE "Campanhas" (
    "id_campanha" TEXT NOT NULL,
    "dateInit" TIMESTAMP(3) NOT NULL,
    "dateFinish" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "canal" TEXT NOT NULL,
    "value_inv" DOUBLE PRECISION NOT NULL,
    "cpi" DOUBLE PRECISION NOT NULL,
    "cpv" DOUBLE PRECISION NOT NULL,
    "interessados" INTEGER NOT NULL,
    "vendas" INTEGER NOT NULL,

    CONSTRAINT "Campanhas_pkey" PRIMARY KEY ("id_campanha")
);
