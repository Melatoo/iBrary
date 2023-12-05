import BackgroundPainel from "../../components/Painel/BackgroundPainel";
import PainelLivros from "../../components/Painel/PainelLivros";
import "./Livros.css";

const Livros = () => {
  return (
    <BackgroundPainel
      tipoLista="livros"
      textoBotao="Adicionar novo livro"
      onClickBotaoAdd={() => {}}
    >
      <PainelLivros />
    </BackgroundPainel>
  );
};

export default Livros;
