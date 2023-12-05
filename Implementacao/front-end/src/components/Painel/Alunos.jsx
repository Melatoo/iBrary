import CardAluno from "./Cards/Aluno";
import CabecalhoLivros from "./CabecalhoLivros";

const PainelAlunos = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoLivros />
        <tbody>
          <CardAluno
            nome="Thiago Melato"
            email="thiago.fonseca@compjunior"
            matricula="202210077"
            data="2023-20-10"
          />
          <CardAluno
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

export default PainelAlunos;
