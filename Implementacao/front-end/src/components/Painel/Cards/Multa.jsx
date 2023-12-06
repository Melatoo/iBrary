import "../Painel.css";
import BotaoImagem from "../BotaoImagem";
import imagemDelete from "../../../assets/trash.png";
import imagemEdit from "../../../assets/pen.png";

const CardMulta = ({ id, idLivro, idAluno, valor }) => {
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
      <td>{idLivro}</td>
      <td>{idAluno}</td>
      <td>{valor}</td>
      <td>
        <BotaoImagem src={imagemEdit} />
        <BotaoImagem src={imagemDelete} onClick={deleteMulta} />
      </td>
    </tr>
  );
};

export default CardMulta;
