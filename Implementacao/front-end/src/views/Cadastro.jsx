import Background from "../components/Formulario/Background";
import IbraryLogo from "../components/IbraryLogo";
import Titulo from "../components/Formulario/Titulo";
import CampoTexto from "../components/Formulario/CampoTexto";
import Botao from "../components/Formulario/Botao";
import "./Cadastro.css";

const Cadastro = () => {
  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Cadastro" />
        </div>
        <form id="formContainer">
          <CampoTexto
            label="Email"
            placeholder="Digite seu email"
            name="email"
          />
          <CampoTexto
            label="Nome completo"
            placeholder="Digite seu nome completo"
            name="nome"
          />
          <CampoTexto
            label="Matrícula"
            placeholder="Digite seu número de matrícula"
            name="matricula"
          />
          <CampoTexto
            label="Senha"
            placeholder="Digite sua senha"
            name="senha"
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Entrar" />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default Cadastro;
