import Navbar from "../components/NavBar/Navbar";
import Card from "../components/Painel/Card";
import livroimg from "../assets/livro.png";
import alunoimg from "../assets/aluno.png";
import emprestimoimg from "../assets/emprestimo.png";
import multaimg from "../assets/multa.png";
import "./Home.css";

const Home = () => {
  return (
    <div id="backgroundHome">
      <Navbar />
      <div id="painelAdmin">
        <Card cor="#FFD4EF" texto="Livros" imagem={livroimg} />
        <Card cor="#D8EFFF" texto="Alunos" imagem={alunoimg} />
        <Card cor="#FFF6CA" texto="Empréstimos" imagem={emprestimoimg} />
        <Card cor="#D1FFCD" texto="Multas ativas" imagem={multaimg} />
      </div>
    </div>
  );
};

export default Home;
