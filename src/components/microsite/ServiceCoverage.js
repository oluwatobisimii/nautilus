import React from 'react'
import ManagedNode from "../../assets/images/customer-service.png";
import SelfManaged from "../../assets/images/project-management.png";
import ApiService from "../../assets/images/api.png";

const serviceCoverage = [
  {
    name: "Managed services",
    logo: ManagedNode,
    information:"Managed blockchain node deployment for startups. Quickly spin up infrastructure worldwide with BlockOps, and design a production-ready infrastructure without downtime or performance issues."
  },
  {
    name: "Cloud adoption",
    logo:SelfManaged,
    information:"Continuous Everything (Integration, Delivery or Deployment, Monitoring and Security), Release Engineering, Automated & Zero Downtime Deployments"
  },
  {
    name: "Security Compliance",
    logo:ApiService,
    information:" Cybersecurity Frameworks Compliance Setup, DevSecOps, Application, and Cloud Security, Implementing Security Best Practices"
  },
]

function ServiceCoverage() {
  return (
  
    <div className='align-center  mx-auto '>
      <h1 className="md:text-3xl text-lg  font-bold   text-gray-900  text-center md:mt-[62px] mt-8">
        AWS services coverage
      </h1>
      <div className="flex flex-col items-center md:justify-center md:gap-[28px] md:flex-row ">
          {serviceCoverage.map((query, index) => {
            return (
              <div key={index} className="group md:mt-32 mt-4 w-[250px] md:w-[334px] h-[150px] md:h-[222px] bg-[#0C0E1F] text-white rounded-lg   cursor-pointer transition delay-100   hover:scale-110   ">
                <div
                  key={index}
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

        <div className='my-[200px] md:mx-12 mx-4 bg-[#E5EFFF] text-black  h-[200px] md:p-12 p-2 shadow-xl'>
          <div className='flex md:flex-row flex-col justify-between md:px-[150px] px-6'>
              <div className='flex flex-col md:w-[50%] '>
                <h1 className="md:text-3xl  font-bold ">Ready To Get Started</h1>
                <p className='text-sm md:text-base'>
                We’re on your side, doing what it takes to get the job done right — from the first consultation to your daily operations. Contact us for a free quote.
                </p>
              </div>
              <button className='border-solid border-2 border-black w-[100px] h-[50px] mt-4 self-start md:text-center md:self-center rounded '>
            Let's Talk
          </button>
          </div>
          
        </div>
    </div>
  
  )
}

export default ServiceCoverage
