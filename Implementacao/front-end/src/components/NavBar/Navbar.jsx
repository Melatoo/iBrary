import React from "react";
import IbraryLogo from "../IbraryLogo.jsx";
import Botao from "./Botao.jsx";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" id="fundoNavBar">
      <div style={{ marginLeft: "30px", marginTop: "30px" }}>
        <IbraryLogo fontSize="1.5em" />
      </div>

      <div id="containerBotoes">
        <Botao texto="Home" />
        <Botao texto="Livros" />
        <Botao texto="Alunos" />
        <Botao texto="Meus Empréstimos" />
        <Botao texto="Multas ativas" />
      </div>
    </nav>
  );
};

export default Navbar;
