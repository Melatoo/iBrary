import BotaoImagem from "../BotaoImagem";
import imagemDelete from "../../../assets/trash.png";
import imagemEdit from "../../../assets/pen.png";
import "../Painel.css";

const CardEmprestimo = ({ idLivro, matricula, duracao, data }) => {
  return (
    <tr>
      <td id="fiveRows">{idLivro}</td>
      <td>{matricula}</td>
      <td>{duracao}</td>
      <td>{data}</td>
      <td>
        <BotaoImagem link="/admin" src={imagemEdit} />
        <BotaoImagem link="/admin" src={imagemDelete} />
      </td>
    </tr>
  );
};

export default CardEmprestimo;
