import { prisma } from "../database";

const getUsuarios = async () => {
  return await prisma.usuario.findMany();
};

const createUsuario = async (usuario: UsuarioType) => {
  return await prisma.usuario.create({ data: usuario });
};

const deleteUsuario = async (id: number) => {
  return await prisma.usuario.delete({ where: { id } });
};

const updateUsuario = async (id: number, usuario: UsuarioType) => {
  return await prisma.usuario.update({
    where: { id: id },
    data: usuario,
  });
};

export default { getUsuarios, createUsuario, deleteUsuario, updateUsuario };
