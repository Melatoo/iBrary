import Background from "../../components/Formulario/Background";
import CampoTexto from "../../components/Formulario/CampoTexto";
import Botao from "../../components/Formulario/Botao";
import Titulo from "../../components/Formulario/Titulo";
import IbraryLogo from "../../components/IbraryLogo";
import axios from "../../services/axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditarMulta = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [idEmprestimo, setIdEmprestimo] = useState("");
  const [valor, setValor] = useState("");
  const [multa, setMulta] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(multa);
    const multaAtualizada = {
      idEmprestimo: idEmprestimo,
      valor: valor,
    };
    axios
      .patch(`/admin/multas/update/${multa.id}`, multaAtualizada)
      .then((response) => {
        console.log(response);
        console.log(multaAtualizada);
        navigate("/admin/multas");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const id = location.pathname.split("/")[4];
    axios
      .get(`/admin/multas/${id}`)
      .then((response) => {
        setMulta(response.data);
        setIdEmprestimo(response.data.idEmprestimo);
        setValor(response.data.valor);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Erro ao buscar multa");
      });
  }, []);

  return (
    <Background>
      <div id="container">
        <IbraryLogo />
        <div id="cadastroTituloContainer">
          <Titulo texto="Editar multa" />
        </div>
        <form id="formContainer" onSubmit={handleSubmit}>
          <CampoTexto
            label="idEmprestimo"
            placeholder="Digite o ID Emprestimo"
            name="idEmprestimo"
            onChange={(event) => setIdEmprestimo(Number(event.target.value))}
            value={multa.idEmprestimo}
          />
          <CampoTexto
            label="Valor"
            placeholder="Digite o valor"
            name="valor"
            onChange={(event) => setValor(Number(event.target.value))}
            value={multa.valor}
          />
          <div id="botaoContainer">
            <Botao width="85%" texto="Adicionar" />
          </div>
        </form>
      </div>
    </Background>
  );
};

export default EditarMulta;
