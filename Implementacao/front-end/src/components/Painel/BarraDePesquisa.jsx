import "./BarraDePesquisa.css";

const BarraDePesquisa = ({ placeholder, onChange }) => {
  return (
    <div className="barraDePesquisa">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        id="imputPesquisa"
        className="icon"
      />
    </div>
  );
};

export default BarraDePesquisa;
