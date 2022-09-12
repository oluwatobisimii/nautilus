import React from "react";
import footerLogo from "../assets/images/footerLogo.svg";
import { Link } from "react-router-dom";
import { RiTwitterFill, RiMediumFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="mt-10 bg-[#150E3B] font-cabinet selection:">
      <div className="container mx-auto p-4 md:px-10 md:py-10 lg:px-20 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-10 py-6">
          <div className="lg:space-y-6 flex lg:flex-col items-center justify-center">
            <img
              src={footerLogo}
              alt=""
              className="w-[40%] lg:w-full hidden lg:block"
            />
            <p className="text-xs font-medium tracking-wider leading-tight text-white">
              All Rights Reserved. Nautilus Technologies 2022
            </p>
          </div>
          <div className="flex flex-col text-center space-y-6 lg:w-[50%]">
            <div className="flex justify-center  space-x-6">
              <Link to="/">
                <p className="text-sm text-white">Home</p>
              </Link>

              <Link to="/about">
                <p className="text-sm text-white">About us</p>
              </Link>

              <Link to="/products">
                <p className="text-sm text-white">Products</p>
              </Link>

              <Link to="/case-studies">
                <p className="text-sm text-white">Case Studies</p>
              </Link>
            </div>
            <hr className="bg-[#459ED7] border-[#459ED7] " />
            <div className="flex justify-between flex-col md:flex-row space-y-3 md:space-y-0">
              <div className="text-white text-2xl flex space-x-4 mx-auto  md:mx-0">
                <a
                  href="https://twitter.com/nautilustechq"
                  rel="noreferrer"
                  target="_blank"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="https://medium.com/@Nautilus_Technologies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiMediumFill />
                </a>
                <a
                  href=" https://rb.gy/vispru"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </div>
              <p className=" md:w-48 text-base font-medium leading-tight text-white">
                912 Furlong Dr Grand Prairie TX 75036, USA
              </p>
              <div>
                <a
                  href="tel:+2348168087807"
                  className="text-sm font-medium leading-none text-white block"
                >
                  +234 816 8087 807
                </a>
                <a
                  href="mailto:hello@nautilus.tech"
                  className="text-base font-medium tracking-wide leading-tight text-white"
                >
                  hello@nautilus.tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
