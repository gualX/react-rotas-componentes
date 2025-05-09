import { Link } from "react-router-dom";

const Produtos = () => {
    return ( 
        <>
            <h2>Produtos</h2>
            <div className="produtos">
            <ul>
                <li><Link to={"/produto/1/Fone"}>Fone</Link></li>
                <li><Link to={"/produto/2/Carregador"}>Carregador</Link></li>
                <li><Link to={"/produto/3/PowerBank"}>PowerBank</Link></li>
            </ul>
            </div>
        </>
     );
}
 
export default Produtos;