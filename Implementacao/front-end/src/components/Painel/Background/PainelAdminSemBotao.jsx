import BackgroundAdmin from "./Admin";
import BarraDePesquisa from "../BarraDePesquisa";
import "./PainelAdmin.css";

const BackgroundPainelAdminSemBotao = ({
  tipoLista,
  children,
  onClickBotaoAdd,
}) => {
  return (
    <BackgroundAdmin>
      <div id="painel">
        <BarraDePesquisa placeholder="Pesquisar..." />
        <div id="painelHeader">
          <h3>Lista de {tipoLista}</h3>
        </div>
        <hr id="hr" />
        {children}
      </div>
    </BackgroundAdmin>
  );
};

export default BackgroundPainelAdminSemBotao;
