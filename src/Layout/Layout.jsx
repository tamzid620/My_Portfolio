// import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/Navbar/NavigationBar';

const Layout = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;