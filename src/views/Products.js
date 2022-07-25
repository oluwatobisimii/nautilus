import React from "react";
import Layout from "../components/shared/Layout";

const Products = () => {
  return (
    
    <Layout>
      <div className="flex flex-col space-y-40">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-[32px]">
          <div className="w-full lg:w-[40%] space-y-6">
            <p className="text-5xl font-extrabold leading-[105%] text-gray-900">
              Cloud Help Provider(CHP)
            </p>
            <p className="text-lg font-medium leading-loose text-gray-500">
              CHP is a dedicated cloud assessment tool which helps users analyze
              their requirements using a proprietary algorithm and match them
              with the right cloud platform. This all contributes to a smooth
              cloud adoption and migration, ensuring your IT capabilities can
              meet your current and future requirements for a better user
              experience.
              <br />
            </p>
          </div>
          <div className="bg-[#DEF3FF] w-full lg:w-[40%] min-h-[400px]"></div>
        </div>
        <div className="flex flex-col-reverse gap-y-[32px] lg:flex-row justify-between items-center">
          
          <div className="bg-[#DEF3FF] w-full lg:w-[40%] min-h-[400px]"></div>
          <div className="lg:w-[50%] space-y-6">
            <p className="text-5xl font-extrabold leading-[105%] text-gray-900">
            Chamberr
            </p>
            <p className="text-lg font-medium leading-loose  text-gray-500">
            What if you could launch software in one day and be available everywhere? Chamberr is a modern infrastructure for fast-growing companies that extend to regions beyond the first stage. – A single command deploys your code to AWS, GCP, Azure, digital Ocean and many more without writing any code or managing servers. – You can grow organically with a scalable, fault tolerant and high performing system that automatically handles load spikes. Chamberr is about starting fast and staying out of trouble.

              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[40%] space-y-6">
            <p className="text-5xl font-extrabold leading-[105%] text-gray-900">
              BlockOps
            </p>
            <p className="text-lg font-medium leading-loose text-gray-500">
            BlockOps helps fast-growing companies build their blockchain infrastructure in a scalable and cost-effective way in seconds. This tool makes it easier for anyone to launch and manage blockchain nodes. This means that more startups will be able to get up-and-running with the technology, improving innovation, efficiency, and trust.
              <br />
            </p>
          </div>
          <div className="bg-[#DEF3FF] w-full lg:w-[40%] min-h-[400px]"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
