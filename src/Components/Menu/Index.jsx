import PropTypes from 'prop-types';
import './Style.css';
import { IoMdHome } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";

const Menu = ({isOpen}) => {
    return <>
        <aside className={`menu-lateral ${isOpen? '': 'mostrar'}`}>
            <nav className="navegacao">
                <ul className="nav-lista">
                    <li><IoMdHome/><p>Home</p></li>
                    <li><VscGraph/><p>Painel</p></li>    
                    <li><RiAdminFill/><p>Admin</p></li>
                </ul>
            </nav>
        </aside>
    </>
}

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

export default Menu;