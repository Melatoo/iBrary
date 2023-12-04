import BackgroundAdmin from "./BackgroundAdmin";
import Botao from "../Formulario/Botao";
import CardLivro from "../CardLivro";
import "./BackgroundPainel.css";

const BackgroundPainel = ({ tipoLista, textoBotao, children }) => {
  return (
    <BackgroundAdmin>
      <div id="painel">
        <div id="painelHeader">
          <h3>Lista de {tipoLista}</h3>
          <Botao height="45px" texto={textoBotao} />
        </div>
        <hr id="hr" />
        <div id="painelLivros">{children}</div>
      </div>
    </BackgroundAdmin>
  );
};

export default BackgroundPainel;
