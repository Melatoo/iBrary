import React from "react";
import IbraryLogo from "../IbraryLogo.jsx";
import Botao from "./Botao.jsx";
import "./navbaradmin.css";

const NavbarAdmin = () => {
  return (
    <nav className="navbar" id="fundoNavBar">
      <div style={{ marginLeft: "30px", marginTop: "30px" }}>
        <IbraryLogo fontSize="1.5em" />
      </div>

      <div id="containerBotoes">
        <Botao texto="Home" link="/admin/home" />
        <Botao texto="Livros" link="/admin/livros" />
        <Botao texto="Alunos" link="/admin/alunos" />
        <Botao texto="Empréstimos" link="/admin/emprestimos" />
        <Botao texto="Multas ativas" link="/admin/multas" />
      </div>
    </nav>
  );
};

export default NavbarAdmin;
