import CardEmprestimo from "./Cards/Emprestimo";
import CabecalhoEmprestimos from "./CabecalhoEmprestimos";

const PainelEmprestimosAdmin = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoEmprestimos />
        <tbody>
          <CardEmprestimo
            idLivro="0"
            matricula="202210077"
            duracao="4"
            data="2023-20-10"
          />
          <CardEmprestimo
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

export default PainelEmprestimosAdmin;
