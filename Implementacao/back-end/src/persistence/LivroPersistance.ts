import { prisma } from "../database";

const getLivros = async () => {
  return await prisma.livro.findMany();
};

const getLivroById = async (id: number) => {
  return await prisma.livro.findUnique({ where: { id } });
};

const createLivro = async (livro: LivroType) => {
  return await prisma.livro.create({ data: livro });
};

const updateLivro = async (id: number, livro: LivroType) => {
  return await prisma.livro.update({ where: { id }, data: livro });
};

const deleteLivro = async (id: number) => {
  return await prisma.livro.delete({ where: { id } });
};

const decrementLivro = async (id: number) => {
  return await prisma.livro.update({
    where: { id },
    data: {
      quantidade: {
        decrement: 1,
      },
    },
  });
};

const incrementLivro = async (id: number) => {
  return await prisma.livro.update({
    where: { id },
    data: {
      quantidade: {
        increment: 1,
      },
    },
  });
};

export default {
  getLivros,
  createLivro,
  updateLivro,
  deleteLivro,
  getLivroById,
  decrementLivro,
  incrementLivro,
};
