import BackgroundPainel from "../../components/Painel/Background/PainelAdminSemBotao";
import PainelMultas from "../../components/Painel/Multas";

const MultasAtivas = () => {
  return (
    <BackgroundPainel tipoLista="multas">
      <PainelMultas />
    </BackgroundPainel>
  );
};

export default MultasAtivas;
