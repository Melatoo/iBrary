import { prisma } from "../database";

const getLivros = async () => {
  return await prisma.livro.findMany();
};

const getById = async (id: number) => {
  const livro = await prisma.livro.findUnique({ where: { id } });
  return livro;
};

export default { getLivros, getById };
