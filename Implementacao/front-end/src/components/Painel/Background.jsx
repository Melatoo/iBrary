import "./Background.css";
import Navbar from "../NavBar/Navbar";

const Background = ({ children }) => {
  return (
    <div id="backgroundAdminHome">
      <Navbar />
      {children}
    </div>
  );
};

export default Background;
