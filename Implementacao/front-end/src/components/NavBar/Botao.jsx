import "./botao.css";

const Botao = ({ texto }) => {
    return <input id="botaoNavbar" type="submit" value={texto} />;
}

export default Botao;