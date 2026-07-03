const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function setCaixa(data) {
  try {
    const caixa = await prisma.caixa.create({
      data: data,
    });
    return caixa;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function getCaixa() {
  try {
    const caixa = await prisma.caixa.findMany();
    return caixa;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function deleteCaixa(id) {
  try {
    await prisma.caixa.delete({ where: { id: id } });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function setFaturamento(id, value) {
  try {
    const caixaOld = await prisma.caixa.findUnique({ where: { id: id } });
    const caixa = await prisma.caixa.updateMany({
      where: { id: id },
      data: {
        faturamento: value,
        lucro: value - caixaOld.despesas,
      },
    });
    return caixa;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function setDespesas(id, value) {
  try {
    const caixaOld = await prisma.caixa.findUnique({ where: { id: id } });
    const caixa = await prisma.caixa.updateMany({
      where: { id: id },
      data: {
        despesas: value,
        lucro: caixaOld.faturamento - value,
      },
    });
    return caixa;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  setCaixa,
  getCaixa,
  deleteCaixa,
  setFaturamento,
  setDespesas,
};
