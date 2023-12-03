import React from "react";
import IbraryLogo from "../IbraryLogo.jsx";
import Botao from "./Botao.jsx";
import "./navbaradmin.css";

const NavbarAluno = () => {
  return (
    <nav className="navbar" id="fundoNavBar">
      <div style={{ marginLeft: "30px", marginTop: "30px" }}>
        <IbraryLogo fontSize="1.5em" />
      </div>

      <div id="containerBotoes">
        <Botao texto="Home" link="/admin/home" />
        <Botao texto="Livros" link="/admin/livros" />
        <Botao texto="Meus Empréstimos" link="/admin/emprestimos" />
      </div>
    </nav>
  );
};

export default NavbarAluno;
