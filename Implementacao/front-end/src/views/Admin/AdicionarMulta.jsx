import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import axios from "../../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdicionarMulta = () => {
  const navigate = useNavigate();
  const [idEmprestimo, setIdEmprestimo] = useState(0);
  const [valor, setValor] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const multa = {
      idEmprestimo,
      valor,
    };
    console.log(multa);
    axios
      .post("/admin/multas/add", multa)
      .then((response) => {
        console.log(response);
        navigate("/admin/multas");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Adicionar multa" />
        </div>
        <form id="formContainer" onSubmit={handleSubmit}>
          <CampoTexto
            label="ID do empréstimo"
            placeholder="Digite o ID do empréstimo"
            name="idEmprestimo"
            onChange={(event) => setIdEmprestimo(event.target.value)}
          />
          <CampoTexto
            label="Valor"
            placeholder="Digite o valor da multa (em reais)"
            name="valor"
            onChange={(event) => setValor(event.target.value)}
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Adicionar" onClick={() => {}} />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default AdicionarMulta;
