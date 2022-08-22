import React from "react";

import localhost from "../assets/partners/localhost.svg";
import anya from "../assets/partners/anya.png";
import Button from "./shared/Button";

function Update() {
  return (
    <section className="container mx-auto pt-0 p-0 md:p-6 md:pt-0 lg:px-20 pb-10 lg:pt-0 w-screen">
      <div className=" flex flex-col  bg-[#F8FCFF]  w-full justify-between shadow-2xl shadow-[#0000000F]  lg:px-20 lg:py-20 p-10 px-11 space-y-16 md:space-y-8">
        <div
          className="flex  lg:space-x-8  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col">
            <p className=" text-5xl md:text-6xl lg:text-5xl 2xl:text-7xl leading-none">
              Our <br className="md:hidden" /> Partners
            </p>
          </div>
        </div>

        <a
          href="https://www.joinlocalhost.com/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col md:flex-row space-y-6 bg-white md:items-center md:px-4 md:space-y-0 lg:w-full hover:shadow-xl shadow-[#b4b4b402]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-[70%] md:w-[40%]">
            <img
              src={localhost}
              alt=""
              className="text-[#FB9600]  p-4 text-2xl"
            />
          </div>

          <div className="flex flex-col space-y-6 bg-white p-6 md:py-6 md:px-4 md:w-[60%]">
            <p className="lg:text-lg  text-gray-400  ">
              A community of Cloud, DevOps and Site reliability engineers.
              Focused on helping to grow and foster the DevOps community in
              Africa
            </p>

            <Button styles="self-start">
              <p>Join community</p>
            </Button>
          </div>
        </a>
        <a
          href="https://join-anya.webflow.io/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col md:flex-row space-y-6 bg-white md:items-center md:px-4 md:space-y-0 lg:w-full hover:shadow-xl shadow-[#b4b4b402]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className=" md:w-[40%]">
            <img src={anya} alt="" className="text-[#FB9600]  p-4 text-2xl" />
          </div>

          <div className="flex flex-col space-y-6 bg-white p-6 md:py-6 md:px-4 md:w-[60%]">
            <p className="lg:text-lg  text-gray-400  ">
              Anya is a community-centered organization focused on developing an
              ecosystem of Web3 innovation. They organize training programs
              where Web3 talents are groomed, and also paid.
            </p>

            <Button styles="self-start">
              <p>Join community</p>
            </Button>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Update;
