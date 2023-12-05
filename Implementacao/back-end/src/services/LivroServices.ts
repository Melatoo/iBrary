import LivroPersistance from "../persistence/LivroPersistance";

const getLivros = async () => {
  return await LivroPersistance.getLivros();
};

const getById = async (id: number) => {
  const livro = await LivroPersistance.getById(id);
  return livro;
};

export default { getLivros, getById };
