import PropTypes from 'prop-types';
import { IoCloseSharp } from "react-icons/io5";
import './Style.css';
import logo from "../../Assets/Image/grendene-white.png";

const Menu = ({isOpen, setOpen}) => {
    return <>
        <aside className={`menu-lateral ${isOpen? '': 'mostrar'}`}>
            <IoCloseSharp />
            <nav className="navegacao">
                <ul className="nav-lista">
                    <li>Home</li>
                    <li>DashBoard</li>    
                    <li>Administrador</li>
                </ul>
            </nav>
            <img src={logo} className="aside-logo" alt="Grendene-Logo" />
        </aside>

    </>
}

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.node.isRequired
}

export default Menu;