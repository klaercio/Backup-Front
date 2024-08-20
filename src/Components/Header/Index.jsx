import logo from "../../Assets/Image/grendene-white.png";
import "./Style.css";
import { FaListUl } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "../Menu/Index";
import { useState } from "react";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (<>
        <div className="header">
            <img src={logo} className="logo-grendene" alt="Logo grendene"/>
            <button onClick={() => setOpen(open => !open)}>
                { open == false?
                    <FaListUl className="icone-lista" size="40px"/>:
                    <IoCloseSharp className="icone-lista" size="40px"/>
                }
            </button>
        </div>
        <Menu isOpen={!open}/>
    </>
    );
}   

export default Header;