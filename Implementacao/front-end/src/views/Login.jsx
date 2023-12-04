import Background from "../components/Formulario/Background";
import CampoTexto from "../components/Formulario/CampoTexto";
import Botao from "../components/Formulario/Botao";
import Titulo from "../components/Formulario/Titulo";
import IbraryLogo from "../components/IbraryLogo";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="loginTituloContainer">
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
          <div id="botaoContainer">
            <Botao width="85%" texto="Entrar" />
          </div>
        </form>
        <Link to="/cadastro" id="cadastro">
          Cadastrar
        </Link>
      </div>
    </Background>
  );
};

export default Login;
