import React from "react";
import footerLogo from "../assets/images/footerLogo.svg";
import { RiTwitterFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="mt-10 bg-[#150E3B] font-cabinet selection:">
      <div className="container mx-auto p-4 md:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-10 py-6">
          <div className="lg:space-y-6 flex lg:flex-col items-center justify-center">
            <img src={footerLogo} alt="" className="w-[40%] lg:w-full hidden lg:block" />
            <p class="text-xs font-medium tracking-wider leading-tight text-white">
              All Rights Reserved. Nautilus Technologies 2022
            </p>
          </div>
          <div class="flex flex-col text-center space-y-6 lg:w-[50%]">
            <div className="flex space-x-6">
              <p class="text-sm text-white">Home</p>
              <p class="text-sm text-white">About us</p>
              <p class="text-sm text-white">Products</p>
              <p class="text-sm text-white">Industries</p>
              <p class="text-sm text-white">Partners</p>
            </div>
            <hr class="bg-[#459ED7] border-[#459ED7] " />
            <div className="flex justify-between flex-col lg:flex-row space-y-3 lg:space-y-0">
              <div class="text-white text-2xl flex space-x-4 mx-auto lg:mx-0">
                <RiTwitterFill />
                <RiInstagramFill />
                <RiLinkedinFill />
              </div>
              <p className=" lg:w-48 text-base font-medium leading-tight text-white">
                912 Furlong Dr Grand Prairie TX 75036, USA
              </p>
              <div>
                <p className="text-sm font-medium leading-none text-white">
                  +234 816 8087 807
                </p>
                <p className="text-base font-medium tracking-wide leading-tight text-white">
                  shell@nautilus.tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
