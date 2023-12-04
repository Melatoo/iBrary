import CardLivro from "../../components/CardLivro";
import BackgroundPainel from "../../components/Painel/BackgroundPainel";
import CabecalhoLivros from "../../components/Painel/CabecalhoLivros";
import "./Livros.css";

const Livros = () => {
  return (
    <BackgroundPainel tipoLista="livros" textoBotao="Adicionar novo livro">
      <CabecalhoLivros />
      <CardLivro
        autor="Antoine de Saint-Exupéry"
        data="2023-20-10"
        editora="HarperCollins"
        id="1"
        titulo="O Pequeno Príncipe"
      />
    </BackgroundPainel>
  );
};

export default Livros;
