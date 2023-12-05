import "./BotaoImagem.css";
import { Link } from "react-router-dom";

const BotaoImagem = ({ src, link, alt }) => {
  return (
    <Link to={link} id="botaoImagem">
      <img src={src} alt={alt} id="imagemBotao" />
    </Link>
  );
};

export default BotaoImagem;
