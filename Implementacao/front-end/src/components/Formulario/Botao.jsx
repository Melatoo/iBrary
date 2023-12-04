import "./Botao.css";

const Botao = ({ height, width, texto }) => {
  return (
    <input
      style={{ height: height, width: width }}
      id="botaoFormulario"
      type="submit"
      value={texto}
    />
  );
};

export default Botao;
