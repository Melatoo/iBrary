import "./campoFormulario.css";

const CampoFormulario = ({ label, placeholder, name }) => {
  return (
    <div className="containerCampo">
      <label>
        {label}
        <br />
        <input
          className="campo"
          placeholder={placeholder}
          type="text"
          name={name}
        />
      </label>
      <br />
    </div>
  );
};

export default CampoFormulario;
