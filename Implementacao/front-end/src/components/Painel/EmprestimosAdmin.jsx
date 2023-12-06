import CardEmprestimo from "./Cards/Emprestimo";
import axios from "../../services/axios";
import { useEffect, useState } from "react";

const CabecalhoEmprestimos = () => {
  return (
    <thead>
      <tr>
        <td>ID</td>
        <td>ID Livro</td>
        <td>ID Aluno</td>
        <td>Data de início</td>
        <td>Data de devolução</td>
        <td />
      </tr>
    </thead>
  );
};

const PainelEmprestimosAdmin = () => {
  const [emprestimos, setEmprestimos] = useState([]);
  useEffect(() => {
    axios
      .get("/admin/emprestimos")
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
              key={emprestimo.id}
              id={emprestimo.id}
              idLivro={emprestimo.idLivro}
              idAluno={emprestimo.idAluno}
              data={emprestimo.dataEmprestimo}
              dataDev={emprestimo.dataDevolucao}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PainelEmprestimosAdmin;
