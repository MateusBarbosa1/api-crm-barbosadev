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
    const updatedMeta = await prisma.metas.updateMany({
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
    const metaDeleted = await prisma.metas.deleteMany({
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
