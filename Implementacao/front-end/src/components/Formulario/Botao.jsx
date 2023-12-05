import "./Botao.css";

const Botao = ({ height, width, texto, onClick }) => {
  return (
    <input
      style={{ height: height, width: width }}
      id="botaoFormulario"
      type="submit"
      value={texto}
      onClick={onClick}
    />
  );
};

export default Botao;
