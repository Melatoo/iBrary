import { prisma } from "../database";

const getEmprestimos = async () => {
  return await prisma.emprestimo.findMany();
};

const getEmprestimosById = async (id: number) => {
  return await prisma.emprestimo.findUnique({ where: { id } });
};

const createEmprestimo = async (emprestimo: EmprestimoType) => {
  if (emprestimo.idLivro === undefined || emprestimo.idAluno === undefined) {
    throw new Error("idLivro e idAluno não podem ser undefined");
  }

  var dataDev = new Date();
  dataDev.setDate(dataDev.getDate() + 7);
  return await prisma.emprestimo.create({
    data: {
      livro: {
        connect: {
          id: emprestimo.idLivro,
        },
      },
      aluno: {
        connect: {
          id: emprestimo.idAluno,
        },
      },
      dataDevolucao: dataDev,

    },
  });
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

export default {
  getEmprestimos,
  getEmprestimosById,
  createEmprestimo,
  deleteEmprestimo,
  updateEmprestimo,
};
