import CardLivro from "../CardLivro";
import CabecalhoLivros from "./CabecalhoLivros";

const PainelLivros = () => {
  return (
    <div id="tabela">
      <table>
        <CabecalhoLivros />
        <tbody>
          <CardLivro
            autor="Antoine deaaa Saint-Exupéry"
            data="2023-20-10"
            editora="HarperCollins"
            id="1"
            titulo="O Pequeno Príncipe"
          />
          <CardLivro
            autor="Antoine deaaa Saint-Exupéry"
            data="2023-20-10"
            editora="HarperCollins"
            id="1"
            titulo="O Pequeno Príncipe"
          />
        </tbody>
      </table>
    </div>
  );
};

export default PainelLivros;
