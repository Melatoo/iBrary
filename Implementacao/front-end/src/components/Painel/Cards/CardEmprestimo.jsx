import "../Painel.css";

const CardEmprestimo = ({ idLivro, matricula, duracao, data }) => {
  return (
    <tr>
      <td>{idLivro}</td>
      <td>{matricula}</td>
      <td>{duracao}</td>
      <td>{data}</td>
    </tr>
  );
};

export default CardEmprestimo;
