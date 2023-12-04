import React from "react";
import IbraryLogo from "../IbraryLogo.jsx";
import Botao from "./Botao.jsx";
import "./navbar.css";

const NavbarAluno = () => {
  return (
    <nav className="navbar" id="fundoNavBar">
      <div style={{ marginLeft: "30px", marginTop: "30px" }}>
        <IbraryLogo fontSize="1.5em" />
      </div>

      <div id="containerBotoes">
        <Botao texto="Home" link="/home" />
        <Botao texto="Livros" link="livros" />
        <Botao texto="Meus Empréstimos" link="/emprestimos" />
      </div>
    </nav>
  );
};

export default NavbarAluno;
