import "../Painel.css";
import BotaoImagem from "../BotaoImagem";
import imagemDelete from "../../../assets/trash.png";
import imagemEdit from "../../../assets/pen.png";
import axios from "../../../services/axios";

const CardMulta = ({ id, idEmprestimo, valor }) => {
  const deleteMulta = (id) => {
    axios
      .delete(`/admin/multas/delete/${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{idEmprestimo}</td>
      <td>{valor}</td>
      <td>
        <BotaoImagem src={imagemEdit} />
        <BotaoImagem src={imagemDelete} onClick={deleteMulta.bind(this, id)} />
      </td>
    </tr>
  );
};

export default CardMulta;
