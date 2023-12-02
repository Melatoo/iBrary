import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, name }) => {
  return (
    <div id="containerCampo">
      <label>
        {label}
        <br />
        <input id="campo" placeholder={placeholder} type="text" name={name} />
      </label>
      <br />
    </div>
  );
};

export default CampoTexto;
