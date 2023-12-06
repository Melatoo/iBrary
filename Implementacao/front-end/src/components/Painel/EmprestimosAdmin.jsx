import CardEmprestimo from "./Cards/Emprestimo";
import axios from "../../services/axios";
import { useEffect, useState } from "react";

const CabecalhoEmprestimos = () => {
  return (
    <thead>
      <tr>
        <td>ID</td>
        <td>ID Livro</td>
        <td>Matrícula</td>
        <td>Duração (semanas)</td>
        <td>Data de início</td>
        <td />
      </tr>
    </thead>
  );
};

const PainelEmprestimosAdmin = () => {
  const [emprestimos, setEmprestimos] = useState([]);
  useEffect(() => {
    axios
      .get("/emprestimos")
      .then((res) => {
        setEmprestimos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="tabela">
      <table>
        <CabecalhoEmprestimos />
        <tbody>
          {emprestimos.map((emprestimo) => (
            <CardEmprestimo
              idLivro={emprestimo.idLivro}
              matricula={emprestimo.matricula}
              duracao={emprestimo.duracao}
            />
          ))}
          <CardEmprestimo
            idLivro="0"
            matricula="202210077"
            duracao="4"
            data="2023-20-10"
          />
          <CardEmprestimo
            nome="Thiago Melato"
            email="thiago.fonseca@compjunior"
            matricula="202210077"
            data="2023-20-10"
          />
        </tbody>
      </table>
    </div>
  );
};

export default PainelEmprestimosAdmin;
