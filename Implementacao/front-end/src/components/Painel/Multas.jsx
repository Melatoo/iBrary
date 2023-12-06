import CardMulta from "./Cards/Multa";

const CabecalhoMultas = () => {
  return (
    <thead>
      <tr>
        <td>ID Livro</td>
        <td>ID Aluno</td>
        <td>Valor (em reais)</td>
        <td />
      </tr>
    </thead>
  );
};

const PainelMultas = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoMultas />
        <tbody>
          <CardMulta idLivro="0" idAluno="202210077" valor="7,50" />
          <CardMulta idLivro="1" idAluno="202210077" valor="100000" />
        </tbody>
      </table>
    </div>
  );
};

export default PainelMultas;
