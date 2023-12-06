import { prisma } from "../database";

const getMultas = async () => {
  return await prisma.multa.findMany();
};

const getMultaById = async (id: number) => {
  return await prisma.multa.findUnique({ where: { id } });
};

const createMulta = async (multa: MultaType) => {
  return await prisma.multa.create({ data: multa });
};

const updateMulta = async (id: number, multa: MultaType) => {
  return await prisma.multa.update({ where: { id }, data: multa });
};

const deleteMulta = async (id: number) => {
  return await prisma.multa.delete({ where: { id } });
};

export default {
  getMultas,
  createMulta,
  updateMulta,
  deleteMulta,
  getMultaById,
};
