import "./BarraDePesquisa.css";
import Lupa from "../assets/loupe.png";

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
