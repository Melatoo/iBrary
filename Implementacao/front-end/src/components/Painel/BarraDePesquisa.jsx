import "./BarraDePesquisa.css";

const BarraDePesquisa = ({ placeholder, onChange }) => {
  return (
    <div className="barraDePesquisa">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        id="imputPesquisa"
        class="icon"
      />
    </div>
  );
};

export default BarraDePesquisa;
