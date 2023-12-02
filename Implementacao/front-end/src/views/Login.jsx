import "./Login.css";
import Background from "../components/Background";
import CampoTexto from "../components/Formulario/CampoTexto";
import Botao from "../components/Formulario/Botao";
import Titulo from "../components/Formulario/Titulo";
import IbraryLogo from "../components/IbraryLogo";

const Login = () => {
  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="tituloContainer">
          <Titulo texto="Login" />
        </div>
        <div id="subtituloContainer">
          <h4 id="subtitulo">Entre com seus dados para acessar sua conta</h4>
        </div>
        <form id="formContainer">
          <CampoTexto
            label="Email"
            placeholder="Digite seu email"
            name="email"
          />
          <CampoTexto
            label="Senha"
            placeholder="Digite sua senha"
            name="senha"
          />
          <Botao texto="Entrar" />
        </form>
        <h4 id="cadastro">Cadastrar</h4>
      </div>
    </Background>
  );
};

export default Login;
