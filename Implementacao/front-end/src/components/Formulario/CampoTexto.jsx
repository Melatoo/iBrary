import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, name, onChange }) => {
  return (
    <div id="containerCampo">
      <label>
        {label}
        <br />
        <input
          id="campo"
          placeholder={placeholder}
          type="text"
          name={name}
          onChange={onChange}
        />
      </label>
      <br />
    </div>
  );
};

export default CampoTexto;
