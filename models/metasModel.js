const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getMetas() {
  try {
    const metas = await prisma.metas.findMany();
    return metas;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function createMeta(data) {
  try {
    const meta = await prisma.metas.create({
      data: data,
    });
    return meta;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function updateMetas(id, data) {
  try {
    // update (singular) exige que id_meta seja @id ou @unique no schema,
    // e retorna o registro atualizado (updateMany retorna só { count })
    const updatedMeta = await prisma.metas.update({
      where: {
        id_meta: id,
      },
      data: data,
    });
    return updatedMeta;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function deleteMeta(id) {
  try {
    const metaDeleted = await prisma.metas.delete({
      where: {
        id_meta: id,
      },
    });
    return metaDeleted;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  getMetas,
  createMeta,
  deleteMeta,
  updateMetas,
};
