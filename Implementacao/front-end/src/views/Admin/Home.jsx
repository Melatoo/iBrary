import Card from "../../components/Painel/Card";
import livroimg from "../../assets/livro.png";
import alunoimg from "../../assets/aluno.png";
import emprestimoimg from "../../assets/emprestimo.png";
import multaimg from "../../assets/multa.png";
import "./Home.css";
import BackgroundAdmin from "../../components/Painel/BackgroundAdmin";

const Home = () => {
  return (
    <BackgroundAdmin>
      <div id="painelAdmin">
        <Card
          cor="#FFD4EF"
          texto="Livros"
          imagem={livroimg}
          link="/admin/livros"
        />
        <Card
          cor="#D8EFFF"
          texto="Alunos"
          imagem={alunoimg}
          link="/admin/alunos"
        />
        <Card
          cor="#FFF6CA"
          texto="Empréstimos"
          imagem={emprestimoimg}
          link="/admin/emprestimos"
        />
        <Card
          cor="#D1FFCD"
          texto="Multas ativas"
          imagem={multaimg}
          link="/admin/multas"
        />
      </div>
    </BackgroundAdmin>
  );
};

export default Home;
