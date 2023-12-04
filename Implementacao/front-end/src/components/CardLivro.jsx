import "./CardLivro.css";

const CardLivro = ({ titulo, editora, autor, id, data }) => {
  return (
    <div id="containerListagens">
      <div id="cardLivro">
        <text>{titulo}</text>
        <text>{editora}</text>
        <text>{autor}</text>
        <text>{id}</text>
        <text>{data}</text>
      </div>
    </div>
  );
};

export default CardLivro;
