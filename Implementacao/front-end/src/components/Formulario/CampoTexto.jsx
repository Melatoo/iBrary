import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, name, onChange, value }) => {
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
          value={value}
        />
      </label>
      <br />
    </div>
  );
};

export default CampoTexto;
