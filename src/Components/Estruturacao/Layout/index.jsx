import PropTypes from 'prop-types';
import Header from '../../Header/Index';
import Footer from '../../Footer/Index';
import Container from '../Container/Index';

const Layout = ({children}) => {
    return (<>
        <Container>
            <Header/>
            {children}
            <Footer/>
        </Container>
        </>
    );
}

Layout.propTypes ={
    children: PropTypes.node.isRequired,
}

export default Layout;