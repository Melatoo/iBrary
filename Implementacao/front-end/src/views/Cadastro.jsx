import Background from "../components/Formulario/Background";
import IbraryLogo from "../components/IbraryLogo";
import Titulo from "../components/Formulario/Titulo";
import CampoTexto from "../components/Formulario/CampoTexto";
import Botao from "../components/Formulario/Botao";
import "./Cadastro.css";
import axios from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const aluno = {
      email: email,
      nome: nome,
      matricula: matricula,
      senha: senha,
    };
    console.log(aluno);
    axios
      .post("/alunos/add", aluno)
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Cadastro" />
        </div>
        <form id="formContainer" onSubmit={handleSubmit}>
          <CampoTexto
            label="Email"
            placeholder="Digite seu email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CampoTexto
            label="Nome completo"
            placeholder="Digite seu nome completo"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <CampoTexto
            label="Matrícula"
            placeholder="Digite seu número de matrícula"
            name="matricula"
            onChange={(e) => setMatricula(e.target.value)}
          />
          <CampoTexto
            label="Senha"
            placeholder="Digite sua senha"
            name="senha"
            onChange={(e) => setSenha(e.target.value)}
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
