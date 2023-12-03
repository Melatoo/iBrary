import "./botao.css";
import { Link } from "react-router-dom";

const Botao = ({ texto, link }) => {
  return (
    <Link to={link} id="botaoNavbar">
      <text> {texto} </text>
    </Link>
  );
};

export default Botao;
