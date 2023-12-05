import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ cor, texto, imagem, link }) => {
  return (
    <div className="cardContainer">
      <Link to={link} style={{ backgroundColor: cor }} id="card">
        <img src={imagem} id="imagem" />
        <h4 id="textoCard">{texto}</h4>
      </Link>
    </div>
  );
};

export default Card;
