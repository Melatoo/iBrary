import BackgroundAluno from "../../components/Painel/Background/Aluno";
import CardHome from "../../components/Painel/Cards/Home";
import livroimg from "../../assets/livro.png";
import emprestimoimg from "../../assets/emprestimo.png";
import "./Home.css";

const Home = () => {
  return (
    <BackgroundAluno>
      <div id="painelAluno">
        <CardHome cor="#FFD4EF" texto="Livros" imagem={livroimg} />
        <CardHome
          cor="#FFF6CA"
          texto="Meus Empréstimos"
          imagem={emprestimoimg}
        />
      </div>
    </BackgroundAluno>
  );
};

export default Home;
