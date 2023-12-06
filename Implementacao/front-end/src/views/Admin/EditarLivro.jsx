import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import axios from "../../services/axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditarLivro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nome, setNome] = useState("");
  const [editora, setEditora] = useState("");
  const [autor, setAutor] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [livro, setLivro] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(livro);
    const livroAtualizado = {
      nome: nome,
      editora: editora,
      autor: autor,
      quantidade: quantidade,
    };
    axios
      .patch(`/admin/livros/update/${livro.id}`, livroAtualizado)
      .then((response) => {
        console.log(response);
        navigate("/admin/livros");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const id = location.pathname.split("/")[4];
    axios
      .get(`/admin/livros/${id}`)
      .then((response) => {
        setLivro(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Erro ao buscar livro");
      });
  }, []);

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
            value={livro.nome}
          />
          <CampoTexto
            label="Editora"
            placeholder="Digite o nome da editora"
            name="editora"
            onChange={(event) => setEditora(event.target.value)}
            value={livro.editora}
          />
          <CampoTexto
            label="Autor"
            placeholder="Digite o nome do autor"
            name="autor"
            onChange={(event) => setAutor(event.target.value)}
            value={livro.autor}
          />
          <CampoTexto
            label="Quantidade"
            placeholder="Digite a quantidade de livros disponíveis"
            name="quantidade"
            onChange={(event) => setQuantidade(Number(event.target.value))}
            value={livro.quantidade}
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Adicionar" onClick={() => {}} />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default EditarLivro;
