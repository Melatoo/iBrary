import Background from "../components/Painel/Background";
import Card from "../components/Painel/Card";
import livroimg from "../assets/livro.png";
import alunoimg from "../assets/aluno.png";
import emprestimoimg from "../assets/emprestimo.png";
import multaimg from "../assets/multa.png";
import "./AdminHome.css";

const AdminHome = () => {
  return (
    <Background>
      <div id="painelAdmin">
        <Card cor="#FFD4EF" texto="Livros" imagem={livroimg} />
        <Card cor="#D8EFFF" texto="Alunos" imagem={alunoimg} />
        <Card cor="#FFF6CA" texto="Empréstimos" imagem={emprestimoimg} />
        <Card cor="#D1FFCD" texto="Multas ativas" imagem={multaimg} />
      </div>
    </Background>
  );
};

export default AdminHome;
