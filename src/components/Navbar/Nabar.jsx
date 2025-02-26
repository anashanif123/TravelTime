import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState("navbar");

  const showNav = () => {
    console.log("Showing navbar");
    setActive("navbar activeNavbar");
  };

  const removeNavbar = () => {
    console.log("Hiding navbar");
    setActive("navbar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv" data-aos="fade-up" data-aos-delay="100">
          <a href="#" className="logo flex">
            <MdOutlineTravelExplore className="icon" />
            <span className="logoText">Travel</span>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex" data-aos="fade-up" data-aos-delay="200">
            <li className="navItem"><a href="#" className="navLink">Home</a></li>
            <li className="navItem"><a href="#" className="navLink">Packages</a></li>
            <li className="navItem"><a href="#" className="navLink">Shop</a></li>
            <li className="navItem"><a href="#" className="navLink">About</a></li>
            <li className="navItem"><a href="#" className="navLink">Pages</a></li>
            <li className="navItem"><a href="#" className="navLink">News</a></li>
            <li className="navItem"><a href="#" className="navLink">Contact</a></li>
            <button className="btn"><a href="#">Book Now</a></button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;