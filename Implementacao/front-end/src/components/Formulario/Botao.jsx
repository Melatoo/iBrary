import "./Botao.css";

const Botao = ({ texto }) => {
  return <input id="botao" type="submit" value={texto} />;
};

export default Botao;
