import UsuarioPersitance from "../persistence/UsuarioPersitance";

const getUsuarios = async () => {
  return await UsuarioPersitance.getUsuarios();
};

const createUsuario = async (usuario: UsuarioType) => {
  return await UsuarioPersitance.createUsuario(usuario);
};

const deleteUsuario = async (id: number) => {
  return await UsuarioPersitance.deleteUsuario(id);
};

const updateUsuario = async (id: number, usuario: UsuarioType) => {
  return await UsuarioPersitance.updateUsuario(id, usuario);
};

export default { getUsuarios, createUsuario, deleteUsuario, updateUsuario };
