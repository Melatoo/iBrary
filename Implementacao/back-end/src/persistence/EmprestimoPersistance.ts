import { prisma } from "../database";

const getEmprestimos = async () => {
  return await prisma.emprestimo.findMany();
};

const getEmprestimoById = async (id: number) => {
  return await prisma.emprestimo.findUnique({ where: { id } });
};

const createEmprestimo = async (emprestimo: EmprestimoType) => {
  if (emprestimo.idLivro === undefined || emprestimo.idAluno === undefined) {
    throw new Error("idLivro e idAluno não podem ser undefined");
  }

  var dataDev = new Date();
  dataDev.setDate(dataDev.getDate() + 7);
  const livro = await prisma.livro.findUnique({
    where: { id: emprestimo.idLivro },
  });
  if (livro === null) {
    throw new Error("Livro não encontrado");
  }
  if (livro.quantidade === 0) {
    throw new Error("Livro não disponível");
  }
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
  if (emprestimo.idLivro === undefined || emprestimo.idAluno === undefined) {
    throw new Error("idLivro e idAluno não podem ser undefined");
  }

  const emprestimoAntigo = await prisma.emprestimo.findUnique({
    where: { id: id },
  });

  const livro = await prisma.livro.findUnique({
    where: { id: emprestimo.idLivro },
  });

  if (livro === null) {
    throw new Error("Livro não encontrado");
  }
  if (livro.quantidade === 0) {
    throw new Error("Livro não disponível");
  }

  if (emprestimoAntigo?.idLivro !== emprestimo.idLivro) {
    await prisma.livro.update({
      where: { id: emprestimoAntigo?.idLivro },
      data: {
        quantidade: {
          increment: 1,
        },
      },
    });

    await prisma.livro.update({
      where: { id: emprestimo.idLivro },
      data: {
        quantidade: {
          decrement: 1,
        },
      },
    });
  }

  return await prisma.emprestimo.update({
    where: { id: id },
    data: emprestimo,
  });
};

export default {
  getEmprestimos,
  getEmprestimoById,
  createEmprestimo,
  deleteEmprestimo,
  updateEmprestimo,
};
