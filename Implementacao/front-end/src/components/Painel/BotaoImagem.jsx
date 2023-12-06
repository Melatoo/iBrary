import "./BotaoImagem.css";
import { Link } from "react-router-dom";

const BotaoImagem = ({ src, onClick, link }) => {
  return (
    <Link id="botaoImagem" onClick={onClick} to={link}>
      <img src={src} id="imagemBotao" />
    </Link>
  );
};

export default BotaoImagem;
