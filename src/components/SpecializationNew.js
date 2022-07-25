import React from "react";
import Layout from "./shared/Layout";
import cloud from "../assets/images/cloud.svg";
import devops from "../assets/images/devops.svg";
import software from "../assets/images/software.svg";
import SRE from "../assets/images/SRE.svg";
import cyberSecurity from "../assets/images/cyberSecurity.svg";
import training from "../assets/images/training.svg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const cards = [
  {
    title: "Cloud Migration",
    subtitle:
      "Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup, Data Migration, Cost Efficiency & Optimization",
    image: cloud,
  },
  {
    title: "DevOps",
    subtitle:
      "Continuous Everything (Integration, Delivery or Deployment, Monitoring and Security), Release Engineering, Automated & Zero Downtime Deployments",
    image: devops,
  },
  {
    title: "Cyber Security Consultancy",
    subtitle:
      "Cybersecurity Frameworks Compliance Setup, DevSecOps, Application and Cloud Security, Implementing Security Best Practices",
    image: cyberSecurity,
  },
  {
    title: "SRE and Infrastructure as a service",
    subtitle:
      "Setting up Infrastructure to achieve a 99.99% SLA across all verticals, Automating repetitive processes to reduce",
    image: SRE,
  },
  {
    title: "Software and App/Development",
    subtitle:
      "Mobile development, Web development, Desktop development, Data science/Engineering.",
    image: software,
  },
  {
    title: "Training and Support",
    subtitle:
      "We strongly believe in Kaizen (Continuous Improvement) and because of this we have setup a strong continuous learning and sharing by offering training and coaching in several technologies and methodologies.",
    image: training,
  },
  
];

function SpecializationCard({ title, subtitle, image }) {
  return (
    <div className="w-[300px] lg:w-[30%]  flex flex-col border bg-[#F1F9FE] hover:border-[#009CF2] hover:shadow-xl shadow-[#a4dfff]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
      <div className="bg-white">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col space-y-3 items-start justify-start p-4 lg:p-9 ">
        <p className="text-2xl font-bold leading-7">{title}</p>
        <p className="w-full text-base font-medium leading-normal text-gray-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function SpecializationNew() {
React.useEffect(() => {
//   function(){
//     if(direction == 'left'){
//         element.scrollLeft -= step;
//     } else {
//         element.scrollLeft += step;
//     }
//     scrollAmount += step;
//     if(scrollAmount >= distance){
//         window.clearInterval(slideTimer);
//     }
// }
})

const moveRight = function(){
  const element = document.getElementById("outsider")
  element.scrollLeft += 350;
}
const moveLeft = function(){
  const element = document.getElementById("outsider")
  element.scrollLeft -= 350;
}


  
  return (
    <Layout>
      <div className="pt-10 text flex lg:space-x-10 space-x-4 items-center">
        <p className=" text-3xl md:text-5xl font-extrabold leading-10 text-gray-900">
          Our Specialization
        </p>

        <MdChevronLeft className="shadow p-2 lg:p-4 bg-white cursor-pointer rounded-full box-content text-2xl" onClick={moveLeft}/>
        <MdChevronRight className="shadow p-4 bg-white cursor-pointer rounded-full box-content text-2xl" onClick={moveRight}/>
      </div>

      <div className="h-10 lg:h-24 w-full"></div>

      <div className="font-cabinet w-full overflow-x-scroll relative scroll-smooth no-scrollbar" id="outsider">
        <div className="flex gap-[36px] lg:gap-[2%] w-[600%] lg:w-[200%] overflow-x-auto" >
          {cards.map((card, index) => {
            return (
              <SpecializationCard
              key={index}
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
