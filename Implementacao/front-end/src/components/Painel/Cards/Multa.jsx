import "../Painel.css";
import BotaoImagem from "../BotaoImagem";
import imagemDelete from "../../../assets/trash.png";

const CardMulta = ({ idLivro, idAluno, valor }) => {
  return (
    <tr>
      <td>{idLivro}</td>
      <td>{idAluno}</td>
      <td>{valor}</td>
      <td>
        <BotaoImagem link="/admin" src={imagemDelete} />
      </td>
    </tr>
  );
};

export default CardMulta;
