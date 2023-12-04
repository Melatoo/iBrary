import BackgroundPainel from "../../components/Painel/BackgroundPainel";
import CabecalhoLivros from "../../components/Painel/CabecalhoLivros";
import "./Livros.css";

const Livros = () => {
  return (
    <BackgroundPainel tipoLista="livros" textoBotao="Adicionar novo livro">
      <CabecalhoLivros />
    </BackgroundPainel>
  );
};

export default Livros;
