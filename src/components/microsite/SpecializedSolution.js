import React from "react";
import Layout from "../shared/Layout";
import node from "../../assets/images/nodes.svg";

export const solutions = [
  {
    logo: "",
    name: "Managed nodes",
  },
  {
    logo: "",
    name: "self-Managed nodes",
  },
  {
    logo: "",
    name: "Api Services",
  },
];

function SpecializedSolution() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-extrabold leading-10 text-gray-900  text-center">
          BlockOps specialized solution
        </h1>
        <div className="flex gap-[28px] ">
        {solutions.map((query, index) => {
          return (
            <div className="mt-32 w-[334px] h-[222px] bg-[#0C0E1F] text-white rounded-lg  hover:bg-sky-700 cursor-pointer">
              <div
                key={index}
                className="flex flex-col  self-center text-white p-8 hover:bg-red visible hover:invisible "
              >
                <img
                  src={node}
                  alt={query.name}
                  className="w-[50px] h-[50px]"
                />
                <h2 className="font-bold text-2xl w-[185px] mt-[16px] ">{query.name}</h2>
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
