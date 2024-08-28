import PropTypes from 'prop-types';
import Header from '../../Header/Index';
import Container from '../Container/Index';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Index';

const Layout = () => {
    return (<>
        <Container>
            <Header/>
            <Outlet/>
            <Footer/>
        </Container>
        </>
    );
}


export default Layout;