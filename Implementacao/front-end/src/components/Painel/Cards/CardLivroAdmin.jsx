import BotaoImagem from "../BotaoImagem";
import "../Painel.css";
import imagemMulta from "../../../assets/borrow.png";
import imagemEmprestimo from "../../../assets/emprestimo.png";
import imagemEditar from "../../../assets/pen.png";
import imagemExcluir from "../../../assets/trash.png";

const CardLivroAdmin = ({ titulo, editora, autor, id, data }) => {
  return (
    <tr>
      <td>{titulo}</td>
      <td>{editora}</td>
      <td>{autor}</td>
      <td>{id}</td>
      <td>{data}</td>
      <td>
        <BotaoImagem
          link="/admin"
          src={imagemMulta}
          alt="Botao para gerar multa"
        />
        <BotaoImagem link="/admin" src={imagemEmprestimo} />
        <BotaoImagem link="/admin" src={imagemEditar} />
        <BotaoImagem link="/admin" src={imagemExcluir} />
      </td>
    </tr>
  );
};

export default CardLivroAdmin;
