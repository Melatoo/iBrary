import CardEmprestimoAluno from "./Cards/EmprestimoAluno";
import CabecalhoEmprestimosAluno from "./CabecalhoEmprestimosAluno";

const PainelEmprestimosAluno = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoEmprestimosAluno />
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
