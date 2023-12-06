import CardAluno from "./Cards/Aluno";
import axios from "../../services/axios";
import { useEffect } from "react";
import { useState } from "react";

const CabecalhoAlunos = () => {
  return (
    <thead>
      <tr>
        <td>ID</td>
        <td>Nome</td>
        <td>Email</td>
        <td>Matricula</td>
      </tr>
    </thead>
  );
};

const PainelAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
    axios
      .get("/admin/alunos")
      .then((response) => {
        setAlunos(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="tabela">
      <table>
        <CabecalhoAlunos />
        <tbody>
          {alunos.map((aluno) => {
            return (
              <CardAluno
                id={aluno.id}
                nome={aluno.nome}
                email={aluno.email}
                matricula={aluno.matricula}
                key={aluno.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PainelAlunos;
