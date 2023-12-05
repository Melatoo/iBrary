import BackgroundPainel from "../../components/Painel/Background/PainelAdmin";
import PainelEmprestimosAdmin from "../../components/Painel/EmprestimosAdmin";

const Emprestimos = () => {
  return (
    <BackgroundPainel
      tipoLista="empréstimos"
      textoBotao="Adicionar novo empréstimo"
    >
      <PainelEmprestimosAdmin />
    </BackgroundPainel>
  );
};

export default Emprestimos;
