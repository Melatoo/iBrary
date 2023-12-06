import CardMulta from "./Cards/Multa";
import axios from "../../services/axios";
import { useEffect, useState } from "react";

const CabecalhoMultas = () => {
  return (
    <thead>
      <tr>
        <td>ID</td>
        <td>ID Emprestimo</td>
        <td>Valor (em reais)</td>
        <td />
      </tr>
    </thead>
  );
};

const PainelMultas = () => {
  const [multas, setMultas] = useState([]);
  useEffect(() => {
    axios
      .get("/admin/multas")
      .then((res) => {
        setMultas(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="tabela">
      <table>
        <CabecalhoMultas />
        <tbody>
          {multas.map((multa) => (
            <CardMulta
              key={multa.id}
              id={multa.id}
              idEmprestimo={multa.idEmprestimo}
              valor={multa.valor}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PainelMultas;
