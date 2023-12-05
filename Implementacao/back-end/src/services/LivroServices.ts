import LivroPersistance from "../persistence/LivroPersistance";

const getLivros = async () => {
  return await LivroPersistance.getLivros();
};

const createLivro = async (livro: LivroType) => {
  return await LivroPersistance.createLivro(livro);
};

const updateLivro = async (id: number, livro: LivroType) => {
  return await LivroPersistance.updateLivro(id, livro);
};

const deleteLivro = async (id: number) => {
  return await LivroPersistance.deleteLivro(id);
};

export default { getLivros, createLivro, updateLivro, deleteLivro };
