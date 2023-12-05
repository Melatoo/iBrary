import BackgroundPainel from "../../components/Painel/Background/Painel";
import PainelLivros from "../../components/Painel/PainelLivros";

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
