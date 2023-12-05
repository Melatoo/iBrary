import "./Background.css";
import NavbarAluno from "../../NavBar/Aluno";

const BackgroundAluno = ({ children }) => {
  return (
    <div id="backgroundHome">
      <NavbarAluno />
      {children}
    </div>
  );
};

export default BackgroundAluno;
