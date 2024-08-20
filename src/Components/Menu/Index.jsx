import PropTypes from 'prop-types';
import './Style.css';
import logo from "../../Assets/Image/grendene-white.png";

const Menu = ({isOpen}) => {
    return <>
        <aside className={`menu-lateral ${isOpen? '': 'mostrar'}`}>
            <nav className="navegacao">
                <ul className="nav-lista">
                    <li>Home</li>
                    <li>DashBoard</li>    
                    <li>Administrador</li>
                </ul>
            </nav>
        </aside>

    </>
}

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

export default Menu;