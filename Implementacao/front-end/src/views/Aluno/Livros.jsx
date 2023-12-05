import BackgroundPainel from "../../components/Painel/Background/PainelAluno";
import PainelLivros from "../../components/Painel/LivrosAluno";
import "./Livros.css";

const Livros = () => {
  return (
    <BackgroundPainel tipoLista="livros">
      <PainelLivros />
    </BackgroundPainel>
  );
};

export default Livros;
