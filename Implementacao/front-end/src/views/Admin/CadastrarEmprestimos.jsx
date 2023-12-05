import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import "./CadastrarEmprestimos.css";

const CadastrarEmprestimos = () => {
  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Cadastrar empréstimo" />
        </div>
        <form id="formContainer">
          <CampoTexto
            label="ID Livro"
            placeholder="Digite o ID do livro"
            name="idLivro"
          />
          <CampoTexto
            label="ID Aluno"
            placeholder="Digite o ID do aluno"
            name="idAluno"
          />
          <CampoTexto
            label="Duração do empréstimo"
            placeholder="Digite a duração do empréstimo"
            name="duracao"
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Cadastrar" />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default CadastrarEmprestimos;
