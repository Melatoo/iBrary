import EmprestimoPersistance from "../persistence/EmprestimoPersistance";

const getEmprestimos = async () => {
  return await EmprestimoPersistance.getEmprestimos();
};

const getEmprestimosById = async (id: number) => {
  return await EmprestimoPersistance.getEmprestimosById(id);
};

const createEmprestimo = async (emprestimo: EmprestimoType) => {
  return await EmprestimoPersistance.createEmprestimo(emprestimo);
};

const updateEmprestimo = async (id: number, emprestimo: EmprestimoType) => {
  return await EmprestimoPersistance.updateEmprestimo(id, emprestimo);
};

const deleteEmprestimo = async (id: number) => {
  return await EmprestimoPersistance.deleteEmprestimo(id);
};

export default {
  getEmprestimos,
  createEmprestimo,
  updateEmprestimo,
  deleteEmprestimo,
  getEmprestimosById,
};
