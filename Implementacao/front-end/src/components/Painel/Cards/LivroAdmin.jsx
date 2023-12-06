import BotaoImagem from "../BotaoImagem";
import "../Painel.css";
import imagemMulta from "../../../assets/borrow.png";
import imagemEmprestimo from "../../../assets/emprestimo.png";
import imagemEditar from "../../../assets/pen.png";
import imagemExcluir from "../../../assets/trash.png";
import axios from "../../../services/axios";

const deleteLivro = (id) => {
  axios
    .delete(`/admin/livros/delete/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};

const CardLivroAdmin = ({ titulo, editora, autor, id, data, quantidade }) => {
  return (
    <tr>
      <td>{titulo}</td>
      <td>{editora}</td>
      <td>{autor}</td>
      <td>{id}</td>
      <td>{data}</td>
      <td>{quantidade}</td>
      <td>
        <BotaoImagem src={imagemMulta} />
        <BotaoImagem src={imagemEmprestimo} />
        <BotaoImagem src={imagemEditar} />
        <BotaoImagem src={imagemExcluir} onClick={deleteLivro.bind(this, id)} />
      </td>
    </tr>
  );
};

export default CardLivroAdmin;
