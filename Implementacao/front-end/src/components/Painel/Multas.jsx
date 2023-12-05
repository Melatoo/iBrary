import CardMulta from "./Cards/Multa";
import CabecalhoMultas from "./CabecalhoMultas";

const PainelMultas = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoMultas />
        <tbody>
          <CardMulta idLivro="0" matricula="202210077" valor="7,50" />
          <CardMulta idLivro="1" matricula="202210077" valor="100000" />
        </tbody>
      </table>
    </div>
  );
};

export default PainelMultas;
