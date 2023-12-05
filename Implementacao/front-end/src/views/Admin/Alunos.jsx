import PainelAlunos from "../../components/Painel/Alunos";
import BackgroundPainel from "../../components/Painel/Background/PainelAdminSemBotao";

const Alunos = () => {
  return (
    <BackgroundPainel tipoLista="alunos" textoBotao="Adicionar novo aluno">
      <PainelAlunos />
    </BackgroundPainel>
  );
};

export default Alunos;
