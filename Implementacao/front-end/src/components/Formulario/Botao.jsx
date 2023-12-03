import "./Botao.css";

const Botao = ({ texto }) => {
  return <input id="botaoFormulario" type="submit" value={texto} />;
};

export default Botao;
