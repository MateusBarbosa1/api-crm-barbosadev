const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAtividades() {
  try {
    const atividades = await prisma.atividades.findMany();
    return atividades;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function createAtividade(data) {
  try {
    const atividadeCreated = await prisma.atividades.create({
      data: data,
    });
    return atividadeCreated;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function updateAtividade(id, data) {
  try {
    const atividadeUpdated = await prisma.atividades.update({
      where: {
        id_atividade: id,
      },
      data: data,
    });
    return atividadeUpdated;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function deleteAtividade(id) {
  try {
    const atividadeDeleted = await prisma.atividades.delete({
      where: {
        id_atividade: id,
      },
    });
    return atividadeDeleted;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  getAtividades,
  createAtividade,
  updateAtividade,
  deleteAtividade,
};
