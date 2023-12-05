import BackgroundAdmin from "./BackgroundAdmin";
<<<<<<<< HEAD:Implementacao/front-end/src/components/Painel/BackgroundPainelAdmin.jsx
import Botao from "../Formulario/Botao";
import BarraDePesquisa from "./BarraDePesquisa";
import "./BackgroundPainelAdmin.css";
========
import Botao from "../../Formulario/Botao";
import BarraDePesquisa from "../BarraDePesquisa";
import "./BackgroundPainel.css";
>>>>>>>> 0cd3680ee26b82e27038db93e15d35a3e23a19fe:Implementacao/front-end/src/components/Painel/Background/BackgroundPainel.jsx

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
