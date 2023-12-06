import "./BotaoImagem.css";

const BotaoImagem = ({ src, onClick }) => {
  return (
    <button id="botaoImagem" onClick={onClick}>
      <img src={src} id="imagemBotao" />
    </button>
  );
};

export default BotaoImagem;
