import PropTypes from 'prop-types';
import './Style.css';
import { IoMdHome } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import {Link} from 'react-router-dom'

const Menu = ({isOpen}) => {
    return <>
        <aside className={`menu-lateral ${isOpen? '': 'mostrar'}`}>
            <nav className="navegacao">
                <ul className="nav-lista">
                    <Link to="/" className="no-link-style"><li><IoMdHome/><p>Home</p></li></Link>
                    <Link to="/painel" className="no-link-style"><li><VscGraph/><p>Painel</p></li></Link>
                    <Link to="/login" className="no-link-style"><li><RiAdminFill/><p>Admin</p></li></Link>
                </ul>
            </nav>
        </aside>
    </>
}

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

export default Menu;