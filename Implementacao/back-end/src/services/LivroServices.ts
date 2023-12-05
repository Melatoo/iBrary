import LivroPersistance from "../persistence/LivroPersistance";

const getLivros = async () => {
  return await LivroPersistance.getLivros();
};

export default { getLivros };
