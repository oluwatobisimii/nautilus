import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../assets/logoNav.svg";

// import {
//     RiShieldUserFill,
//     RiMenuLine,
//     RiCloseLine,
//   } from "react-icons/ri";

import { HiMenu, HiX } from "react-icons/hi"



const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About us",
    to: "/about",
  },
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "Case Studies",
    to: "/case-studies",
  },
  {
    name: "Services",
    to: "/services",
  },
]

function NavLink(props) {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const activeRestPage = location[1] !== ''
  const mainNavPropStyle = activeRestPage ? "lg:text-black" : "lg:text-black"

  const navClassName =
    location[1] === props.to.split("/")[1]
      ? `  border-white lg:border-b-2 pb-3 lg:inline-block lg:border-[#009BFF] ${mainNavPropStyle}`
      : ` ${mainNavPropStyle}  border-white lg:border-none`;



  return <li className="block border-b pb-3 lg:border-none lg:inline-block font-medium">
    <Link to={props.to} className={navClassName} onClick={props.clickHandler}>{props.name}</Link>
  </li>
}






const Navbar = () => {

  // const navToggleHandler = () => {
  //     setNavToggle(!navToggle);
  //     const navContainer = document.querySelector(".navContainer");
  //     navContainer.classList.toggle("navActive");
  //   };

  const [navToggle, setNavToggle] = useState(false);

  const clickHandler = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      navToggle ? setNavToggle(false) : setNavToggle(true)
    }
  };

  // const { pathname } = useLocation();
  // const location = pathname.split("/");


  const visbleNav = navToggle ? "navContainer text-white font-bold text-2xl" : "hidden lg:block"

  const navMenuContainer = `${visbleNav} lg:block  bg-[#009BFF] lg:bg-transparent flex lg:flex-row lg:space-x-8`

  return (
    <div className="flex items-center justify-between h-20 md:h-1/6 p-4 lg:h-[12vh] md:px-10 lg:px-20 relative z-30 font-cabinet">
      <nav className="w-screen container mx-auto p-4 md:px-10 lg:px-16 flex justify-between">
        <div className="w-1/3 lg:w-36">
          <Link to="/">
            <img src={logoWhite} alt="" />
          </Link>
        </div>


        {navToggle ? <HiX style={{
          fontSize: "24px"
        }} className="lg:hidden"
          onClick={clickHandler}
        /> : <HiMenu style={{
          fontSize: "24px"
        }} className="lg:hidden"
          onClick={clickHandler}
        />}
        <ul className={navMenuContainer}>
          {links.map((link, index) => {
            return <NavLink
              key={index}
              name={link.name}
              to={link.to}
              clickHandler={clickHandler}
            />
          })}
          <a className="inline-flex items-center justify-center px-7 py-2.5 bg-blue-500 rounded-md" href="#contact">
            <p className="text-white font-medium">Contact</p>
          </a>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar