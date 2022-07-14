import React from "react";
import Layout from "./shared/Layout";
import cloud from "../assets/images/cloud.svg";
import devops from "../assets/images/devops.svg";
import software from "../assets/images/software.svg";
import SRE from "../assets/images/SRE.svg";
import cyberSecurity from "../assets/images/cyberSecurity.svg";
import training from "../assets/images/training.svg";

const cards = [
  {
    title: "Cloud Migration",
    subtitle:
      "Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup, Data Migration, Cost Efficiency & Optimization",
    image: cloud,
  },
  {
    title: "Cloud Migration",
    subtitle:
      "Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup, Data Migration, Cost Efficiency & Optimization",
    image: devops,
  },
  {
    title: "Cloud Migration",
    subtitle:
      "Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup, Data Migration, Cost Efficiency & Optimization",
    image: software,
  },
  {
    title: "Cloud Migration",
    subtitle:
      "Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup, Data Migration, Cost Efficiency & Optimization",
    image: SRE,
  },
  {
    title: "Cloud Migration",
    subtitle:
      "Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup, Data Migration, Cost Efficiency & Optimization",
    image: cyberSecurity,
  },
  {
    title: "Cloud Migration",
    subtitle:
      "Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup, Data Migration, Cost Efficiency & Optimization",
    image: training,
  },
];

function SpecializationCard({ title, subtitle, image }) {
  return (
    <div className="w-[30%] flex flex-col border hover:border-[#009CF2] hover:shadow-xl shadow-[#a4dfff]">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="inline-flex flex-col space-y-3 items-start justify-start p-9 bg-[#F1F9FE]">
        <p className="text-2xl font-bold leading-normal text-center">{title}</p>
        <p className="w-full text-base font-medium leading-normal text-gray-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function SpecializationNew() {
  return (
    <Layout>
      <div>
        <p className="text-5xl font-extrabold leading-10 text-gray-900">
          Our Specialization
        </p>
      </div>

      <div className="h-24 w-full"></div>

      <div className="font-cabinet w-full overflow-x-auto relative">
        <div className="flex gap-[2%] w-[200%] overflow-x-auto">
          {cards.map((card) => {
            return (
              <SpecializationCard
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
