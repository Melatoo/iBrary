import EmprestimoPersistance from "../persistence/EmprestimoPersistance";

const getEmprestimos = async () => {
  return await EmprestimoPersistance.getEmprestimos();
};

const getEmprestimoById = async (id: number) => {
  return await EmprestimoPersistance.getEmprestimoById(id);
};

const createEmprestimo = async (emprestimo: EmprestimoType) => {
  return await EmprestimoPersistance.createEmprestimo(emprestimo);
};

const updateEmprestimo = async (id: number, emprestimo: any) => {
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
  getEmprestimoById,
};
