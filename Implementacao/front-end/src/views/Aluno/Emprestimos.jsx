import BackgroundPainel from "../../components/Painel/Background/PainelAluno";
import PainelEmprestimosAluno from "../../components/Painel/EmprestimosAluno";
import "./Emprestimos.css";

const Emprestimos = () => {
  return (
    <BackgroundPainel tipoLista="empréstimos">
      <PainelEmprestimosAluno />
    </BackgroundPainel>
  );
};

export default Emprestimos;
