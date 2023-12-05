import MultaPersistance from "../persistence/MultaPersistance";

const getMultas = async () => {
  return await MultaPersistance.getMultas();
};

const createMulta = async (multa: MultaType) => {
  return await MultaPersistance.createMulta(multa);
};

const updateMulta = async (id: number, multa: MultaType) => {
  return await MultaPersistance.updateMulta(id, multa);
};

const deleteMulta = async (id: number) => {
  return await MultaPersistance.deleteMulta(id);
};

export default { getMultas, createMulta, updateMulta, deleteMulta };
