import BotaoImagem from "../BotaoImagem";
import imagemDelete from "../../../assets/trash.png";
import imagemEdit from "../../../assets/pen.png";
import axios from "../../../services/axios";
import { useNavigate } from "react-router-dom";
import "../Painel.css";

const CardEmprestimo = ({ id, idLivro, idAluno, data, dataDev }) => {
  const navigate = useNavigate();
  const deleteEmprestimo = (id) => {
    axios
      .delete(`/admin/emprestimos/delete/${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
    axios.get("/admin/livros/" + idLivro).then((response) => {
      const livro = response.data;
      livro.quantidade++;
      axios.patch("/admin/livros/update/" + idLivro, livro).then((response) => {
        console.log(response);
      });
    });
  };

  const updateEmprestimo = (id) => {
    navigate(`/admin/emprestimos/update/${id}`);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{idLivro}</td>
      <td>{idAluno}</td>
      <td>{data}</td>
      <td>{dataDev}</td>
      <td>
        <BotaoImagem
          src={imagemEdit}
          onClick={updateEmprestimo.bind(this, id)}
        />
        <BotaoImagem
          src={imagemDelete}
          onClick={deleteEmprestimo.bind(this, id)}
        />
      </td>
    </tr>
  );
};

export default CardEmprestimo;
