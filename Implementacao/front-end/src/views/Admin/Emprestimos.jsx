import BackgroundPainel from "../../components/Painel/Background/PainelAdmin";

const Emprestimos = () => {
  return (
    <BackgroundPainel
      tipoLista="empréstimos"
      textoBotao="Adicionar novo empréstimo"
      path="/admin/emprestimos/cadastrar"
    ></BackgroundPainel>
  );
};

export default Emprestimos;
