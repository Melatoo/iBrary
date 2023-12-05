import { prisma } from "../database";

const getEmprestimos = async () => {
  return await prisma.emprestimo.findMany();
};

const getEmprestimosById = async (id: number) => {
  return await prisma.emprestimo.findUnique({ where: { id } });
};

const createEmprestimo = async (emprestimo: any) => {
  return await prisma.emprestimo.create({ data: emprestimo });
};

const deleteEmprestimo = async (id: number) => {
  return await prisma.emprestimo.delete({ where: { id } });
};

const updateEmprestimo = async (id: number, emprestimo: any) => {
  return await prisma.emprestimo.update({
    where: { id: id },
    data: emprestimo,
  });
};

export {
  getEmprestimos,
  getEmprestimosById,
  createEmprestimo,
  deleteEmprestimo,
  updateEmprestimo,
};
