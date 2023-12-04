import Botao from "../components/Formulario/Botao";
import BackgroundAdmin from "../components/Painel/BackgroundAdmin";
import "./AdminLivros.css";

const AdminLivros = () => {
  return (
    <BackgroundAdmin>
      <div id="painelAdminLivros">
        <div id="painelAdminLivrosHeader">
          <h3>Lista de livros</h3>
          <Botao texto="Adicionar novo livro" />
        </div>
        <hr />
      </div>
    </BackgroundAdmin>
  );
};

export default AdminLivros;
