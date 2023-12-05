import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import "./AdicionarLivro.css";

const AdicionarLivro = () => {
  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Adicionar livro" />
        </div>
        <form id="formContainer">
          <CampoTexto
            label="Nome do livro"
            placeholder="Digite o nome do livro"
            name="nome"
          />
          <CampoTexto
            label="Editora"
            placeholder="Digite o nome da editora"
            name="editora"
          />
          <CampoTexto
            label="Autor"
            placeholder="Digite o nome do autor"
            name="autor"
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Adicionar" />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default AdicionarLivro;
