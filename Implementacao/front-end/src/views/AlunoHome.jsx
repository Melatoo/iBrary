import Background from "../components/Painel/Background";
import Card from "../components/Painel/Card";
import livroimg from "../assets/livro.png";
import emprestimoimg from "../assets/emprestimo.png";
import "./AlunoHome.css";

const AlunoHome = () => {
  return (
    <Background>
      <div id="painelAluno">
        <Card cor="#FFD4EF" texto="Livros" imagem={livroimg} />
        <Card cor="#FFF6CA" texto="Meus Empréstimos" imagem={emprestimoimg} />
      </div>
    </Background>
  );
};

export default AlunoHome;
