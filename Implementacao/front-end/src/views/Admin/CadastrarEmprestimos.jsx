import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CadastrarEmprestimos = () => {
  const navigate = useNavigate();
  const [idLivro, setIdLivro] = useState(null);
  const [idAluno, setIdAluno] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const emprestimo = {
      idLivro,
      idAluno,
    };
    console.log(emprestimo);
    axios
      .post("/admin/emprestimos/add", emprestimo)
      .then((response) => {
        console.log(response);
        navigate("/admin/emprestimos");
      })
      .catch((err) => console.log(err));
  };
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
            onChange={(event) => setIdLivro(Number(event.target.value))}
          />
          <CampoTexto
            label="ID Aluno"
            placeholder="Digite o ID do aluno"
            name="idAluno"
            onChange={(event) => setIdAluno(Number(event.target.value))}
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Cadastrar" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default CadastrarEmprestimos;
