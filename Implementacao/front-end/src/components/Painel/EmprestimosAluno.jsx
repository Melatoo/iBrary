import CardEmprestimoAluno from "./Cards/EmprestimoAluno";

const CabecalhoAlunos = () => {
  return (
    <thead>
      <tr>
        <td>Nome</td>
        <td>Matrícula</td>
        <td>Autor</td>
        <td>Data de empréstimo</td>
        <td>Data de devolução</td>
        <td />
      </tr>
    </thead>
  );
};

const PainelEmprestimosAluno = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoAlunos />
        <tbody>
          <CardEmprestimoAluno
            titulo="O alquimista"
            editora="Paralela"
            autor="Paulo Coelho"
            data="2023-20-10"
            dataDev="2023-20-10"
          />
          <CardEmprestimoAluno
            titulo="O alquimista"
            editora="Paralela"
            autor="Paulo Coelho"
            data="2023-20-10"
            dataDev="2023-20-10"
          />
        </tbody>
      </table>
    </div>
  );
};

export default PainelEmprestimosAluno;
