import React from "react";
import IbraryLogo from "../IbraryLogo.jsx";
import Botao from "./Botao.jsx";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" id="fundoNavBar">
      <IbraryLogo />
      <div id="containerBotoes">
        <Botao texto="Home" />
        <Botao texto="Livros" />
        <Botao texto="Alunos" />
        <Botao texto="Meus Empréstimos" />
      </div>
    </nav>
  );
};

export default Navbar;
