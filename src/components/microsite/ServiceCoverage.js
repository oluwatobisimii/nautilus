import React from 'react'
import { solutions } from './SpecializedSolution';
import node from "../../assets/images/nodes.svg";

function ServiceCoverage() {
  return (
  
    <div className='align-center  mx-auto '>
      <h1 className="text-3xl  font-bold leading-10  text-gray-900  text-center mt-[62px]">
        AWS services coverage
      </h1>
      <div className="flex gap-[28px] justify-center ">
        {solutions.map((query, index) => {
          return (
            <div className="mt-[37px] w-[334px] h-[222px] bg-[#0C0E1F] text-white rounded-lg">
              <div
                key={index}
                className="flex flex-col  self-center text-white p-8"
              >
                <img
                  src={node}
                  alt={query.name}
                  className="w-[50px] h-[50px]"
                />
                <h2 className="font-bold text-2xl w-[185px] mt-[16px]">{query.name}</h2>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  
  )
}

export default ServiceCoverage
