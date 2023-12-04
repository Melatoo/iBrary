import "./Painel/PainelLivros.css";

const CardLivro = ({ titulo, editora, autor, id, data }) => {
  return (
    <tr>
      <td>{titulo}</td>
      <td>{editora}</td>
      <td>{autor}</td>
      <td>{id}</td>
      <td>{data}</td>
    </tr>
  );
};

export default CardLivro;
