import BackgroundAluno from "../../components/Painel/BackgroundAluno";
import Card from "../../components/Painel/Card";
import livroimg from "../../assets/livro.png";
import emprestimoimg from "../../assets/emprestimo.png";
import "./AlunoHome.css";

const AlunoHome = () => {
  return (
    <BackgroundAluno>
      <div id="painelAluno">
        <Card cor="#FFD4EF" texto="Livros" imagem={livroimg} />
        <Card cor="#FFF6CA" texto="Meus Empréstimos" imagem={emprestimoimg} />
      </div>
    </BackgroundAluno>
  );
};

export default AlunoHome;
