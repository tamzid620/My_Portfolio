// import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/Navbar/NavigationBar';
import { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";

const Layout = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='relative'>
            <NavigationBar/>
            <Outlet />
            <Footer />
            {isVisible && (
        <div 
        onClick={scrollToTop}
        title="Go Top"
        className="fixed bottom-4 right-4 bg-white rounded-full w-[50px] border border-gray-300 z-50"
        >
          <IoIosArrowDropupCircle className="hover:text-gray-400" size={50} />
        </div>
      )}
        </div>
    );
};

export default Layout;