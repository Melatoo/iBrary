import LivroServices from "@/services/LivroServices";

const getLivros = async (req, res) => {
  const livros = await LivroServices.getLivros();
  res.send(JSON.stringify(livros));
};

export default { getLivros };
