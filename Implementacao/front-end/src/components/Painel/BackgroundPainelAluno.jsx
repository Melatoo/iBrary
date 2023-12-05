import BackgroundAluno from "./BackgroundAluno";
import BarraDePesquisa from "./BarraDePesquisa";

const BackgroundPainelAluno = ({ tipoLista, children }) => {
  return (
    <BackgroundAluno>
      <div id="painel">
        <BarraDePesquisa placeholder="Pesquisar..." />
        <div id="painelHeader">
          <h3>Lista de {tipoLista}</h3>
        </div>
        <hr id="hr" />
        {children}
      </div>
    </BackgroundAluno>
  );
};

export default BackgroundPainelAluno;
