import BackgroundAdmin from "./BackgroundAdmin";
import Botao from "../Formulario/Botao";
import "./BackgroundPainel.css";

const BackgroundPainel = ({
  tipoLista,
  textoBotao,
  children,
  onClickBotaoAdd,
}) => {
  return (
    <BackgroundAdmin>
      <div id="painel">
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

export default BackgroundPainel;
