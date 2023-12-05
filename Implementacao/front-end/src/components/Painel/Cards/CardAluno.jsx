import "../Painel.css";

const CardAluno = ({ nome, email, matricula, data }) => {
  return (
    <tr>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{matricula}</td>
      <td>{data}</td>
    </tr>
  );
};

export default CardAluno;
