import CardLivro from "./Cards/Livro";
import { useEffect, useState } from "react";
import axios from "../../services/axios";

const CabecalhoLivrosAluno = () => {
  return (
    <thead>
      <tr>
        <td>Nome</td>
        <td>Editora</td>
        <td>Autor</td>
        <td>ID</td>
        <td>Data de cadastro</td>
      </tr>
    </thead>
  );
};

const PainelLivros = () => {
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    axios
      .get("/livros")
      .then((response) => {
        setLivros(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="tabela">
      <table>
        <CabecalhoLivrosAluno />
        <tbody>
          {livros.map((livro) => (
            <CardLivro
              key={livro.id}
              autor={livro.autor}
              data={livro.dataCadastro}
              editora={livro.editora}
              id={livro.id}
              titulo={livro.nome}
              quantidade={livro.quantidade}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PainelLivros;
