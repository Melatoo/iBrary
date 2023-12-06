import "../Painel.css";

const CardAluno = ({ id, nome, email, matricula, data }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{matricula}</td>
      <td>{data}</td>
    </tr>
  );
};

export default CardAluno;
