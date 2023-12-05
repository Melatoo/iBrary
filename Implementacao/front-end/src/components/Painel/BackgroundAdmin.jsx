import "./Background.css";
import NavbarAdmin from "../NavBar/NavBarAdmin";


const BackgroundAdmin = ({ children }) => {
  return (
    <div id="backgroundHome">
      <NavbarAdmin />
      {children}
    </div>
  );
};

export default BackgroundAdmin;
