import CardLivro from "../../components/CardLivro";
import BackgroundPainel from "../../components/Painel/BackgroundPainel";
import CabecalhoLivros from "../../components/Painel/CabecalhoLivros";
import PainelLivros from "../../components/Painel/PainelLivros";
import "./Livros.css";

const Livros = () => {
  return (
    <BackgroundPainel tipoLista="livros" textoBotao="Adicionar novo livro">
      <PainelLivros />
    </BackgroundPainel>
  );
};

export default Livros;
