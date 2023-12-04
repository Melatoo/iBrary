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
        <div id="painelLivros">
          <CardLivro
            titulo="O Pequeno Príncipe"
            editora="Editora 1"
            autor="Autor 1"
            id="1"
            data="01/01/2021"
          />
        </div>
      </div>
    </BackgroundAdmin>
  );
};

export default BackgroundPainel;
