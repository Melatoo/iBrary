import "./Titulo.css";

const Titulo = ({ texto }) => {
  return <h1 id="titulo">{texto.toUpperCase()}</h1>;
};

export default Titulo;
