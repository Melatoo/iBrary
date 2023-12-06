import BotaoImagem from "../BotaoImagem";
import "../Painel.css";
import imagemMulta from "../../../assets/borrow.png";
import imagemEmprestimo from "../../../assets/emprestimo.png";
import imagemEditar from "../../../assets/pen.png";
import imagemExcluir from "../../../assets/trash.png";
import axios from "../../../services/axios";
import { useNavigate } from "react-router-dom";

const CardLivroAdmin = ({ titulo, editora, autor, id, data, quantidade }) => {
  const deleteLivro = (id) => {
    axios
      .delete(`/admin/livros/delete/${id}`)
      .then((response) => {
        console.log(response);
        navigate("/admin/livros");
      })
      .catch((err) => console.log(err));
  };

  const updateLivro = (id) => {
    navigate();
  };
  const navigate = useNavigate();
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
        <BotaoImagem src={imagemEditar} link={`/admin/livros/update/${id}`} />
        <BotaoImagem src={imagemExcluir} onClick={deleteLivro.bind(this, id)} />
      </td>
    </tr>
  );
};

export default CardLivroAdmin;
