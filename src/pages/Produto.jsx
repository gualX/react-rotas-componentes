import { Link, useParams } from "react-router-dom";

const Produto = () => {
  const { id, nome } = useParams();

  return (
    <div className="produto">
      <h3>Produto: {nome}</h3>
      <img
        src={`/images/${id}.jpg`}
        alt={`Imagem do produto ${nome}`}
        style={{ width: "400px", height: "auto" }}
      />
      <br />
      <Link to={"/produtos"}>Retornar à página de produtos</Link>
    </div>
  );
};

export default Produto;