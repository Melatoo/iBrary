import "./Botao.css";

const Botao = ({ width, texto }) => {
  return (
    <input
      style={{ width: width }}
      id="botaoFormulario"
      type="submit"
      value={texto}
    />
  );
};

export default Botao;
