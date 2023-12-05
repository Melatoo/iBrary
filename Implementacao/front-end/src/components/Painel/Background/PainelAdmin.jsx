import BackgroundAdmin from "./Admin";
import Botao from "../../Painel/Botao";
import BarraDePesquisa from "../BarraDePesquisa";
import "./PainelAdmin.css";

const BackgroundPainelAdmin = ({ tipoLista, textoBotao, children, path }) => {
  return (
    <BackgroundAdmin>
      <div id="painel">
        <BarraDePesquisa placeholder="Pesquisar..." />
        <div id="painelHeader">
          <h3>Lista de {tipoLista}</h3>
          <Botao height="25px" texto={textoBotao} path={path} />
        </div>
        <hr id="hr" />
        {children}
      </div>
    </BackgroundAdmin>
  );
};

export default BackgroundPainelAdmin;
