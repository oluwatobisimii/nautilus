import React, { useState, useEffect } from "react";
import Layout from "./shared/Layout";
import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import emptyImage from "../assets/images/empty.png"
const data = [
  {
    title: "Integrated Payments Service Limited",
    category: "fintech",
  },
  {
    title: "Composable Finance",
    category: "fintech",
  },
  {
    title: "Tirbl Network",
    category: "fintech, ecommerce",
  },
  {
    title: "Antelope Consulting",
    category: "consulting",
  },
  {
    title: "Worldbay Technologies",
    category: "consulting",
  },
  {
    title: "Africa Prudential Plc",
    category: "consulting",
  },
  {
    title: "Grocedy",
    category: "ecommerce",
  },
  {
    title: "12Baskets",
    category: "ecommerce",
  },
  {
    title: "Charis Oil and Gas",
    category: "business",
  },
  {
    title: "Unilever",
    category: "manufacturing",
  },
];

function CaseCard({ name, image, bgColor }) {
  return (
    <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className="flex flex-col lg:w-[250px]">
      <div
        className={`h-48 overflow-hidden flex items-center justify-center bg-white`}
      >
        <img src={emptyImage} alt="" className="w-full" />
      </div>
      <div className="flex items-center p-4 w-full justify-between bg-[#ECF8FF]">
        <p className="font-medium">
          {name} {}
        </p>
        <MdChevronRight />
      </div>
    </motion.div>
  );
}

const CaseStudiesList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    if (activeTab === "all") {
      setFiltered(data);
      return;
    }

    const listFiltering = data.filter((item) =>
      item.category.includes(activeTab)
    );
    setFiltered(listFiltering);

    return () => {};
  }, [activeTab]);

  return (
    <Layout>
      <div className="inline-flex space-x-10 items-start justify-start py-10 overflow-x-scroll w-full no-scrollbar">
        <div
          className="inline-flex flex-col space-y-1 items-start cursor-pointer"
          onClick={()=>setActiveTab("all")}
        >
          <p className="text-base font-bold text-gray-900 uppercase">All</p>
          {activeTab === "all" && <div className="animate w-full h-0.5 border border-blue-500" />}
        </div>
        <div
          className="inline-flex flex-col space-y-1 items-start cursor-pointer"
          onClick={()=>setActiveTab("fintech")}
        >
          <p className="text-base font-bold text-gray-900 uppercase">Fintech</p>
          {activeTab === "fintech" &&<div className="w-full h-0.5 border border-blue-500" />}
        </div>
        <div
          className="inline-flex flex-col space-y-1 items-start cursor-pointer"
          onClick={()=>setActiveTab("consulting")}
        >
          <p className="text-base font-bold text-gray-900 uppercase">
            Consulting
          </p>
          {activeTab === "consulting" && <div className="w-full h-0.5 border border-blue-500" />}
        </div>
        <div
          className="inline-flex flex-col space-y-1 items-start cursor-pointer"
          onClick={()=>setActiveTab("ecommerce")}
        >
          <p className="text-base font-bold text-gray-900 uppercase">
            Ecommerce
          </p>
          {activeTab === "ecommerce" && <div className="w-full h-0.5 border border-blue-500" />}
        </div>
        <div
          className="inline-flex flex-col space-y-1 items-start cursor-pointer"
          onClick={()=>setActiveTab("business")}
        >
          <p className="text-base font-bold text-gray-900 uppercase">
            business
          </p>
          {activeTab === "business" && <div className="w-full h-0.5 border border-blue-500" />}
        </div>

        
      </div>

      <motion.div layout className="mt-10 flex flex-wrap lg:flex-row flex-col gap-[24px]">
        {filtered.map((item, index) => {
          return <CaseCard key={index} name={item.title} />;
        })}
      </motion.div>
    </Layout>
  );
};

export default CaseStudiesList;
