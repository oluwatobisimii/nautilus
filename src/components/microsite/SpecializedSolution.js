import React from "react";
import Layout from "../shared/Layout";
import ManagedNode from "../../assets/images/customer-service.png";
import SelfManaged from "../../assets/images/project-management.png";
import ApiService from "../../assets/images/api.png";

export const solutions = [
  {
    name: "Managed nodes",
    logo: ManagedNode,
    information:
      "Fully managed blockchain node deployment for startups. Quickly spin up infrastructure worldwide with BlockOps, and design a production-ready infrastructure without downtime or performance issues.",
  },
  {
    name: "self-Managed nodes",
    logo: SelfManaged,
    information:
      "We provide the environment for your team to manage your node deployment. Spin-off chains to run your applications.",
  },
  {
    name: "Api Services",
    logo: ApiService,
    information: "Connecting your applications to Blockops core",
  },
];

function SpecializedSolution() {
  return (
    <Layout>
      <div className="">
        
        <h1 className="md:text-3xl text-xl font-extrabold  text-gray-900  text-center">
          BlockOps specialized solution
        </h1>
        <div className="flex flex-col items-center md:gap-[28px] md:flex-row ">
          {solutions.map((query, index) => {
            return (
              <div key={index} className="group md:mt-32 mt-4 w-[250px] md:w-[334px] h-[150px] md:h-[222px] bg-[#0C0E1F] text-white rounded-lg   cursor-pointer transition delay-100   hover:scale-110   ">
                <div
                  className="flex flex-col  self-center text-white p-8 block group-hover:hidden group-hover:transition-opacity duration-1000 ease-in-out text-center animate-fade hover:opacity-0"
                >
                  <div className="bg-white w-[55px] h-[55px] rounded p-1 self-center">
                    <img
                      src={query.logo}
                      alt={query.name}
                      className="w-[50px] h-[50px]"
                    />
                  </div>
                  <div>
                    <h2 className={`font-bold md:text-2xl text-lg  mt-[16px] `}>
                      {query.name}
                    </h2>
                  </div>
                </div>
                <div className="hidden group-hover:block hover:transition delay-200 duration-100 ">
                  <div className="flex flex-col self-center text-center md:p-4 ">
                    <div>
                      <h2 className={`font-bold md:text-2xl text-lg  mt-[16px] `}>
                        {query.name}
                      </h2>
                      <p className="text-xs md:text-sm">{query.information}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default SpecializedSolution;
