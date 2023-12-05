import BackgroundAdmin from "./Admin";
import Botao from "../../Formulario/Botao";
import BarraDePesquisa from "../BarraDePesquisa";
import "./Painel.css";

const BackgroundPainelAdmin = ({
  tipoLista,
  textoBotao,
  children,
  onClickBotaoAdd,
}) => {
  return (
    <BackgroundAdmin>
      <div id="painel">
        <BarraDePesquisa placeholder="Pesquisar..." />
        <div id="painelHeader">
          <h3>Lista de {tipoLista}</h3>
          <Botao height="45px" texto={textoBotao} onClick={onClickBotaoAdd} />
        </div>
        <hr id="hr" />
        {children}
      </div>
    </BackgroundAdmin>
  );
};

export default BackgroundPainelAdmin;
