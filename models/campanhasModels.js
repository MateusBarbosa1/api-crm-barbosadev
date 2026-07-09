const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getCampanhas() {
  try {
    const campanhas = await prisma.campanhas.findMany();
    return campanhas;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function createCampanha(data) {
  try {
    const campanhaCreated = await prisma.campanhas.create({
      data: data,
    });
    return campanhaCreated;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function updateCampanhas(id, data) {
  try {
    const campanhaUpdated = await prisma.campanhas.update({
      where: {
        id_campanha: id,
      },
      data: data,
    });
    return campanhaUpdated;
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function deleteCampanha(id) {
  try {
    const campanhaDeleted = await prisma.campanhas.delete({
      where: {
        id_campanha: id,
      },
    });
    return campanhaDeleted;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  getCampanhas,
  createCampanha,
  updateCampanhas,
  deleteCampanha,
};
