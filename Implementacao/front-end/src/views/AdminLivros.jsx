import Botao from "../components/Formulario/Botao";
import Background from "../components/Painel/Background";
import "./AdminLivros.css";

const AdminLivros = () => {
  return (
    <Background>
      <div id="painelAdminLivros">
        <div id="painelAdminLivrosHeader">
          <h3>Lista de livros</h3>
          <Botao texto="Adicionar novo livro" />
        </div>
        <hr />
      </div>
    </Background>
  );
};

export default AdminLivros;
