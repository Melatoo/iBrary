import BackgroundPainel from "../../components/Painel/BackgroundPainelAdmin";
import "./Alunos.css";

const Alunos = () => {
  return (
    <BackgroundPainel
      tipoLista="alunos"
      textoBotao="Adicionar novo aluno"
    ></BackgroundPainel>
  );
};

export default Alunos;
