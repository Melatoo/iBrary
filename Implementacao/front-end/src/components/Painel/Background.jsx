import "./Background.css";
import Navbar from "../NavBar/NavBarAdmin";

const Background = ({ children }) => {
  return (
    <div id="backgroundAdminHome">
      <Navbar />
      {children}
    </div>
  );
};

export default Background;
