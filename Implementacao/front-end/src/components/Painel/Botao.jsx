import { Link } from "react-router-dom";

const Botao = ({ height, width, texto, path }) => {
  return (
    <Link
      to={path}
      id="botaoFormulario"
      style={{ height: height, width: width, padding: "8px" }}
    >
      {texto}
    </Link>
  );
};

export default Botao;
