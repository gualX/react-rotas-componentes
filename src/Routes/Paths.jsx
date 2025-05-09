import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Contato from "../pages/Contato";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import Produto from "../pages/Produto";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/produtos" element={<Produtos/>}/>
                        <Route path="/contato" element={<Contato/>}/>
                        <Route path="/produto/:id/:nome/" element={<Produto/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;