import BackgroundPainel from "../../components/Painel/Background/PainelAdmin";
import PainelMultas from "../../components/Painel/Multas";

const MultasAtivas = () => {
  return (
    <BackgroundPainel
      tipoLista="multas"
      textoBotao="Adicionar multa"
      path="/admin/multas/cadastrar"
    >
      <PainelMultas />
    </BackgroundPainel>
  );
};

export default MultasAtivas;
