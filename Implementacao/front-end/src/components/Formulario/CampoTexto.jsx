import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, name, onChange, value, tipo }) => {
  return (
    <div id="containerCampo">
      <label>
        {label}
        <br />
        <input
          required
          id="campo"
          placeholder={placeholder}
          type={tipo}
          name={name}
          onChange={onChange}
          defaultValue={value}
        />
      </label>
      <br />
    </div>
  );
};

export default CampoTexto;
