import "./FormularioLogin.css";
import CampoTexto from "./Formulario/CampoTexto";
import Botao from "./Formulario/Botao";
import Titulo from "./Formulario/Titulo";
import IbraryLogo from "./IbraryLogo";

const FormularioLogin = () => {
  return (
    <div id="container">
      <IbraryLogo />
      <div id="tituloContainer">
        <Titulo texto="Login" />
      </div>
      <div id="subtituloContainer">
        <h4 id="subtitulo">Entre com seus dados para acessar sua conta</h4>
      </div>
      <form id="formContainer">
        <CampoTexto label="Email" placeholder="Digite seu email" name="email" />
        <CampoTexto label="Senha" placeholder="Digite sua senha" name="senha" />
        <Botao texto="Entrar" />
      </form>
      <h4 id="cadastro">Cadastrar</h4>
    </div>
  );
};

export default FormularioLogin;
