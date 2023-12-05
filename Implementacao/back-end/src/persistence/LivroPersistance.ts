import { prisma } from "@/database";

const getLivros = async () => {
  return await prisma.livro.findMany();
};

export default { getLivros };
