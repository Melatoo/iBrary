import "./IbraryLogo.css";

const IbraryLogo = ({ fontSize }) => {
  return (
    <div id="containerLogo">
      <h1 style={{ fontSize: fontSize }} id="texto">
        iBrary
      </h1>
    </div>
  );
};

export default IbraryLogo;
