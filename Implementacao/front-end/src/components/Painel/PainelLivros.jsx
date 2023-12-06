import { useState } from "react";
import axios from "../../services/axios";
import CardLivroAdmin from "./Cards/LivroAdmin";

const CabecalhoLivros = () => {
  return (
    <thead>
      <tr>
        <td>Nome</td>
        <td>Editora</td>
        <td>Autor</td>
        <td>ID</td>
        <td>Data de cadastro</td>
        <td>Quantidade</td>
        <td />
      </tr>
    </thead>
  );
};

const PainelLivros = () => {
  const [livros, setLivros] = useState([]);
  axios
    .get("/admin/livros")
    .then((response) => {
      setLivros(response.data);
      console.log(response);
    })
    .catch((err) => console.log(err));
  return (
    <div id="tabela">
      <table>
        <CabecalhoLivros />
        <tbody>
          {livros.map((livro) => (
            <CardLivroAdmin
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
