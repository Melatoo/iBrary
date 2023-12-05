import BotaoImagem from "../BotaoImagem";
import ImagemPlus from "../../../assets/plus.png";
import ImagemDollar from "../../../assets/dollar.png";
import "../Painel.css";

const CardEmprestimoAluno = ({ titulo, editora, autor, data, dataDev }) => {
  return (
    <tr>
      <td>{titulo}</td>
      <td>{editora}</td>
      <td>{autor}</td>
      <td>{data}</td>
      <td>{dataDev}</td>
      <td>
        <BotaoImagem src={ImagemPlus} />
        <BotaoImagem src={ImagemDollar} />
      </td>
    </tr>
  );
};

export default CardEmprestimoAluno;
