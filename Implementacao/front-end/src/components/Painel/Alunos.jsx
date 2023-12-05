import CardAluno from "./Cards/Aluno";

const CabecalhoAlunos = () => {
  return (
    <thead>
      <tr>
        <td>Nome</td>
        <td>Email</td>
        <td>Matricula</td>
        <td>Data de cadastro</td>
      </tr>
    </thead>
  );
};

const PainelAlunos = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoAlunos />
        <tbody>
          <CardAluno
            nome="Thiago Melato"
            email="thiago.fonseca@compjunior"
            matricula="202210077"
            data="2023-20-10"
          />
          <CardAluno
            nome="Thiago Melato"
            email="thiago.fonseca@compjunior"
            matricula="202210077"
            data="2023-20-10"
          />
        </tbody>
      </table>
    </div>
  );
};

export default PainelAlunos;
