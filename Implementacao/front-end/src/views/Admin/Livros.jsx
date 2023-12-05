import { redirect, redirectDocument } from "react-router-dom";
import BackgroundPainel from "../../components/Painel/Background/PainelAdmin";
import PainelLivros from "../../components/Painel/PainelLivros";

const Livros = () => {
  return (
    <BackgroundPainel
      tipoLista="livros"
      textoBotao="Adicionar novo livro"
      path="/admin/livros/add"
    >
      <PainelLivros />
    </BackgroundPainel>
  );
};

export default Livros;
