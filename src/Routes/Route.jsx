import {createBrowserRouter, createRoutesFromElements, Route, BrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Index";
import Layout from "../Components/Estruturacao/Layout/index";
import Login from "../pages/Login/Index.jsx";
import Painel from "../pages/Painel/index.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="/painel" element={<Painel/>}/>
        </>
    )
);

export default router;