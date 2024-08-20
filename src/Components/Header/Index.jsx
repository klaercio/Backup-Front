import logo from "../../Assets/Image/grendene-white.png";
import "./Style.css";
import { FaListUl } from "react-icons/fa";
import Menu from "../Menu/Index";
import { useState } from "react";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (<>
        <div className="header">
            <img src={logo} className="logo-grendene" alt="Logo grendene"/>
            <button onClick={() => setOpen(open => !open)}><FaListUl className="icone-lista" size="40px" /></button>
        </div>
        <Menu isOpen={!open} setOpen={() => setOpen()}/>
    </>
    );
}   

export default Header;