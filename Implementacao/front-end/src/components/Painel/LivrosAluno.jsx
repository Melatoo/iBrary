import CardLivro from "./Cards/Livro";

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
  return (
    <div id="tabela">
      <table>
        <CabecalhoLivrosAluno />
        <tbody>
          <CardLivro
            autor="Antoine deaaa Saint-Exupéry"
            data="2023-20-10"
            editora="HarperCollins"
            id="1"
            titulo="O Pequeno Príncipe"
          />
          <CardLivro
            autor="Antoine deaaa Saint-Exupéry"
            data="2023-20-10"
            editora="HarperCollins"
            id="1"
            titulo="O Pequeno Príncipe"
          />
        </tbody>
      </table>
    </div>
  );
};

export default PainelLivros;
