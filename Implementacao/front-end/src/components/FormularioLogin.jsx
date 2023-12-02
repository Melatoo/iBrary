import "./FormularioLogin.css";
import CampoFormulario from "./CampoFormulario";

const FormularioLogin = () => {
  return (
    <div id="container">
      <div id="formContainer">
        <form className="innerFormContainer" method="post">
          <CampoFormulario
            label="Email"
            placeholder="Digite seu email"
            name="email"
          />
          <CampoFormulario
            label="Senha"
            placeholder="Digite sua senha"
            name="senha"
          />
          <input className="botao" type="submit" value="Entrar" />
        </form>
      </div>
    </div>
  );
};

export default FormularioLogin;
