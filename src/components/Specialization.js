import React from "react";
import { MdCode, MdCloudUpload, MdLocalPolice } from "react-icons/md";
function Specialization() {
  return (
    <div className="container mx-auto p-4 md:px-10 lg:px-20 lg:py-36 relative z-10 font-cabinet">
      <div className="w-[40%] mx-auto">
        <p className="text-5xl font-extrabold leading-10 text-center text-gray-900">
          Our Specialization
        </p>
      </div>

      {/* Specializations */}

      <div className="flex flex-wrap gap-[3%] pt-10 md:pt-16 lg:pt-32">
        {/* DEVOPS */}
        <div className="flex w-full md:w-[45%] lg:w-[30%] px-8 py-4 bg-gradient-to-br from-pink-200 to-gray-50">
          <div className="inline-flex flex-col space-y-8 py-4 px-6">
            <MdCode className="text-5xl text-red-400" />

            <div className="flex flex-col space-y-1">
              <p className="text-3xl font-medium leading-loose ">
                DevOps as a Service
              </p>
              <p className="text-base font-medium leading-normal text-gray-500">
                Continuous Everything (Integration, Delivery or Deployment,
                Monitoring and Security), Release Engineering, Automated & Zero
                Downtime Deployments
              </p>
            </div>
          </div>
        </div>

        {/* CLOUD */}

        <div className="flex w-full md:w-[45%] lg:w-[30%] px-8 py-4 cloud ">
          <div className="inline-flex flex-col space-y-8 py-4 px-6">
            <MdCloudUpload className="text-5xl text-[#42A998]" />

            <div className="flex flex-col space-y-1">
              <p className="text-3xl font-medium leading-loose ">
                Cloud Migration
              </p>
              <p className="text-base font-medium leading-normal text-gray-500">
                Cloud Infrastructure Strategy and Design, Hybrid Cloud Setup,
                Data Migration, Cost Efficiency & Optimization
              </p>
            </div>
          </div>
        </div>

        {/* CYBER SECURITY */}

        <div className="flex w-full md:w-[45%] lg:w-[30%] px-8 py-4 cybersecurity">
          <div className="inline-flex flex-col space-y-8 py-4 px-6">
            <MdLocalPolice className="text-5xl text-[#A47BBA]" />

            <div className="flex flex-col space-y-3">
              <p className="text-3xl font-medium leading-9 ">
                Cyber Security Consultancy
              </p>
              <p className="text-base font-medium leading-normal text-gray-500">
                Cybersecurity Frameworks Compliance Setup, DevSecOps,
                Application and Cloud Security, Implementing Security Best
                Practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialization;
