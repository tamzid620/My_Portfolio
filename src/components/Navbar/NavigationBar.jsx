import { Link } from "react-router-dom";
import "./NavCss.css";
import { useEffect } from "react";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
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
    className='fixed z-10 
     bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300
      shadow-lg shadow-stone-700 opacity-90'>
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
      <div className="hamburger">
        {/* <div className={`line1 ${isOpen ? "line1-open" : ""}`}></div>
        <div className={`line2 ${isOpen ? "line2-open" : ""}`}></div>
        <div className={`line3 ${isOpen ? "line3-open" : ""}`}></div> */}
        <div className={'line1'}></div>
        <div className={'line2'}></div>
        <div className={'line3'}></div>
      </div>
      <ul className="nav-links text-black">
        <li title="Home">
          <Link  to="/">Home</Link>
        </li>
        <li title="Order Tracking">
          <Link to="/myproject">Projects</Link>
        </li>
        <li title="Menu">
          <Link to="/blog">About Me</Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavigationBar;
