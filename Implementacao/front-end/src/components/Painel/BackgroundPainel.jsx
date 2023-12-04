import BackgroundAdmin from "./BackgroundAdmin";
import Botao from "../Formulario/Botao";
import "./BackgroundPainel.css";
import PainelLivros from "./PainelLivros";

const BackgroundPainel = ({ tipoLista, textoBotao, children }) => {
  return (
    <BackgroundAdmin>
      <div id="painel">
        <div id="painelHeader">
          <h3>Lista de {tipoLista}</h3>
          <Botao height="45px" texto={textoBotao} />
        </div>
        <hr id="hr" />
        <PainelLivros />
      </div>
    </BackgroundAdmin>
  );
};

export default BackgroundPainel;
