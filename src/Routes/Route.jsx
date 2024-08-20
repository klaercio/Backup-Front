import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "../pages/Home/Index";
import Layout from "../Components/Estruturacao/Layout/index";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout><Home/></Layout>}>
            <Route path="teste" element={<home/>}/>
        </Route>
    )
);

export default router;