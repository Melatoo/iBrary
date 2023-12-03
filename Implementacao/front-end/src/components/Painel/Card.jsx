import "./Card.css";

const Card = ({ cor, texto, imagem }) => {
  return (
    <div className="cardContainer">
      <div style={{ backgroundColor: cor }} id="card">
        <img src={imagem} id="imagem" />
        <h4 id="textoCard">{texto}</h4>
      </div>
    </div>
  );
};

export default Card;
