import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import axios from "../../services/axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditarEmprestimo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [idLivro, setIdLivro] = useState("");
  const [idAluno, setIdAluno] = useState("");
  const [dataDev, setDataDev] = useState(0);
  const [emprestimo, setEmprestimo] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emprestimo);
    const emprestimoAtualizado = {
      idLivro: idLivro,
      idAluno: idAluno,
      dataDevolucao: dataDev,
    };

    axios
      .patch(`/admin/emprestimos/update/${emprestimo.id}`, emprestimoAtualizado)
      .then((response) => {
        navigate("/admin/emprestimos");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const id = location.pathname.split("/")[4];
    axios
      .get(`/admin/emprestimos/${id}`)
      .then((response) => {
        setEmprestimo(response.data);
        setIdLivro(response.data.idLivro);
        setIdAluno(response.data.idAluno);
        setDataDev(response.data.dataDevolucao);
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err);
        console.log("Erro ao buscar emprestimo");
      });
  }, []);

  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Editar emprestimo" />
        </div>
        <form id="formContainer" onSubmit={handleSubmit}>
          <CampoTexto
            label="idLivro"
            placeholder="Digite o ID Livro"
            name="idLivro"
            onChange={(event) => setIdLivro(Number(event.target.value))}
            value={emprestimo.idLivro}
          />
          <CampoTexto
            label="idAluno"
            placeholder="Digite o idAluno"
            name="editora"
            onChange={(event) => setIdAluno(Number(event.target.value))}
            value={emprestimo.idAluno}
          />
          <CampoTexto
            label="dataDev"
            placeholder="Digite a data de devolução"
            name="dataDev"
            onChange={(event) => setDataDev(event.target.value)}
            value={emprestimo.dataDevolucao}
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Editar" />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default EditarEmprestimo;
