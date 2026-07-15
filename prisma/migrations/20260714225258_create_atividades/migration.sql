-- CreateTable
CREATE TABLE "Atividades" (
    "id_atividade" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "data_prazo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL,
    "period" TEXT NOT NULL,

    CONSTRAINT "Atividades_pkey" PRIMARY KEY ("id_atividade")
);
