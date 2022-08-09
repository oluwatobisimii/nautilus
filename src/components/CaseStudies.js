import React from "react";
import Button from "./shared/Button";
import charis from "../assets/images/charis.png";
import unilever from "../assets/images/unilever.png";
import antelope from "../assets/images/antelope.png";
import integrated from "../assets/images/integrated.png";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

function CaseCard({ name, image, bgColor }) {
  return (
    <div className="flex flex-col md:w-[48%] lg:w-[23%]">
      <div
        className={` h-48 md:h-56 lg:h-48 overflow-hidden flex items-center justify-center bg-white`}
      >
        <img src={image} alt="" className="w-full " />
      </div>
      <div className="flex items-center p-4 w-full justify-between bg-[#ECF8FF]">
        <p className="font-medium">
          {name} {}
        </p>
        <MdChevronRight />
      </div>
    </div>
  );
}

function CaseStudies() {
  return (
    <section className="my-10 bg-[#150E3B] font-cabinet selection:">
      <div className="container mx-auto p-4 md:px-10 lg:px-20 lg:py-20">
        <div className="mt-10 flex space-y-6 md:space-y-0 md:flex-row flex-col items-center justify-between">
          <p className="text-5xl font-medium leading-10 text-center text-white ">
            Case Studies
          </p>
          <Link to="/case-studies">
            <Button>
              <p>View all Projects</p>
            </Button>
          </Link>
        </div>

        <div className="h-28 md:h-10"></div>
        <div className="flex w-full flex-col space-y-6 md:space-y-0 gap-5 md:flex-row justify-between flex-wrap pb-10">
          <CaseCard image={charis} name="Charis Oil" bgColor="[#041126]" />
          <CaseCard image={unilever} name="Unilever" bgColor="white" />
          <CaseCard image={antelope} name="Antelope" bgColor="white" />
          <CaseCard image={integrated} name="Integrated" bgColor="white" />
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
