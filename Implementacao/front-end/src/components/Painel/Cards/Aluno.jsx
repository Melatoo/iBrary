import "../Painel.css";

const CardAluno = ({ id, nome, email, matricula }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{matricula}</td>
    </tr>
  );
};

export default CardAluno;
