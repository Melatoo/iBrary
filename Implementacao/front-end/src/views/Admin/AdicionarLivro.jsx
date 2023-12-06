import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import axios from "../../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdicionarLivro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [editora, setEditora] = useState("");
  const [autor, setAutor] = useState("");
  const [quantidade, setQuantidade] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const livro = {
      nome,
      editora,
      autor,
      quantidade,
    };
    console.log(livro);
    axios
      .post("/admin/livros/add", livro)
      .then((response) => {
        console.log(response);
        navigate("/admin/livros");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Adicionar livro" />
        </div>
        <form id="formContainer" onSubmit={handleSubmit}>
          <CampoTexto
            label="Nome do livro"
            placeholder="Digite o nome do livro"
            name="nome"
            onChange={(event) => setNome(event.target.value)}
          />
          <CampoTexto
            label="Editora"
            placeholder="Digite o nome da editora"
            name="editora"
            onChange={(event) => setEditora(event.target.value)}
          />
          <CampoTexto
            label="Autor"
            placeholder="Digite o nome do autor"
            name="autor"
            onChange={(event) => setAutor(event.target.value)}
          />
          <CampoTexto
            label="Quantidade"
            placeholder="Digite a quantidade de livros disponíveis"
            name="quantidade"
            onChange={(event) => setQuantidade(Number(event.target.value))}
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Adicionar" onClick={() => {}} />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default AdicionarLivro;
