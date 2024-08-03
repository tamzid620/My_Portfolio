import { Link } from "react-router-dom";
import "./NavCss.css";
import { useEffect } from "react";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolling, setScrolling] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setScrolling(true);
  //   } else {
  //     setScrolling(false);
  //   }
  // };
  // navmenu open close option -----------
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    const toggleNav = () => {
      // Animate Links
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });

      // Hamburger Animation
      hamburger.classList.toggle("toggle");
      setIsOpen(!isOpen);
    };

    const closeNav = () => {
      // Close the menu
      if (isOpen) {
        navLinks.classList.remove("open");
        links.forEach((link) => {
          link.classList.remove("fade");
        });

        hamburger.classList.remove("toggle");
        setIsOpen(false);
      }
    };

    hamburger.addEventListener("click", toggleNav);

    links.forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    return () => {
      hamburger.removeEventListener("click", toggleNav);
      links.forEach((link) => {
        link.removeEventListener("click", closeNav);
      });
    };
  }, [isOpen]);

  return (
    <nav 
    style={{ fontFamily: "Nunito Sans, sans-serif"}}
    className='fixed z-10 
     bg-white opacity-90'>
      <div className="flex items-center justify-between">
        {/* resturant logo section  */}
        <div>
          <Link to="/">
            <img
              className="w-[140px]"
              src="./icons/logo-svg.png"
              alt=""
              title="Resturant_Logo"
            />
          </Link>
        </div>

      </div>
      <div className="hamburger ">
        <div className={'line1'}></div>
        <div className={'line2'}></div>
        <div className={'line3'}></div>
      </div>
      <ul className="nav-links ">
        <li className=" text-black" title="Home">
          <Link  to="/">Home</Link>
        </li>
        <li className=" text-black" title="Order Tracking">
          <Link to="/myproject">Projects</Link>
        </li>
        <li className=" text-black" title="Menu">
          <Link to="/blog">About Me</Link>
        </li>

      </ul>

      <ul className=" lg:hidden md:flex sm: hidden text-black mt-5 -ms-[90px]">
  <li className="mr-10 text-2xl font-semibold " title="Home">
    <Link to="/">Home</Link>
  </li>
  <li className="mr-10 text-2xl font-semibold" title="Projects">
    <Link to="/myproject">Projects</Link>
  </li>
  <li className=" text-2xl font-semibold" title="About Me">
    <Link to="/blog">About Me</Link>
  </li>
</ul>

    </nav>
  );
};

export default NavigationBar;
