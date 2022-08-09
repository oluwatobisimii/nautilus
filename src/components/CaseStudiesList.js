import React, { useState, useEffect } from "react";
import Layout from "./shared/Layout";
import { MdChevronRight } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { data } from "../assets/data.js";

function OverlayCard({ setOverlay, index }) {
  const [tab, setTab] = useState("background");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#F1FAFF] fixed top-0 left-0 overflow-y-scroll no-scrollbar h-screen w-screen lg:top-1/2 lg:h-[82vh] lg:-translate-y-1/2 z-60 lg:left-1/2 lg:-translate-x-1/2 lg:w-[80%] 2xl:w-[70%] p-6 lg:py-12 lg:px-16 lg:pt-0 2xl:p-20 flex flex-col space-y-6 lg:space-y-10 shadow-2xl shadow-[#b6beff02]"
    >
      <div
        class="block fixed top-0 right-0 p-4 bg-[#57a0ea] text-2xl text-white rounded-full self-end m-4 "
        onClick={() => {
          setOverlay(false);
        }}
      >
        <HiX className="text-2xl" />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0 lg:h-full">
        <div className="space-y-5 lg:w-[30%]">
          <img src={data[index].image} alt="" />
          <div className="space-y-4">
            <div
              className="flex space-x-6 cursor-pointer group"
              onClick={() => {
                setTab("background");
              }}
            >
              {tab === "background" ? (
                <div className="w-2 bg-black"></div>
              ) : (
                <div className="w-2 bg-transparent group-hover:bg-[#a1d6ff]"></div>
              )}

              {tab === "background" ? (
                <p className="text-base font-bold">Background</p>
              ) : (
                <p className="text-base text-gray-600 group-hover:font-medium">
                  Background
                </p>
              )}
            </div>
            <hr />
            <div
              className="flex space-x-6 cursor-pointer group"
              onClick={() => {
                setTab("challenges");
              }}
            >
              {tab === "challenges" ? (
                <div className="w-2 bg-black"></div>
              ) : (
                <div className="w-2 bg-transparent group-hover:bg-[#a1d6ff]"></div>
              )}

              {tab === "challenges" ? (
                <p className="text-base font-bold">Business Challenges</p>
              ) : (
                <p className="text-base text-gray-600 group-hover:font-medium">
                  Business Challenges
                </p>
              )}
            </div>
            <hr />
            <div
              className="flex space-x-6 cursor-pointer group"
              onClick={() => {
                setTab("ourApproach");
              }}
            >
              {tab === "ourApproach" ? (
                <div className="w-2 bg-black"></div>
              ) : (
                <div className="w-2 bg-transparent group-hover:bg-[#a1d6ff]"></div>
              )}

              {tab === "ourApproach" ? (
                <p className="text-base font-bold">Our Approach</p>
              ) : (
                <p className="text-base text-gray-600 group-hover:font-medium">
                  Our Approach
                </p>
              )}
            </div>
            <hr />
            <div
              className="flex space-x-6 cursor-pointer group"
              onClick={() => {
                setTab("customerOutcome");
              }}
            >
              {tab === "customerOutcome" ? (
                <div className="w-2 bg-black"></div>
              ) : (
                <div className="w-2 bg-transparent group-hover:bg-[#a1d6ff]"></div>
              )}

              {tab === "customerOutcome" ? (
                <p className="text-base font-bold">Customer Outcome</p>
              ) : (
                <p className="text-base text-gray-600 group-hover:font-medium">
                  Customer Outcome
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white lg:p-16 p-4 lg:w-[65%] ">
          {tab === "background" && (
            <div>
              <p className=" font-medium lg:text-xl leading-[180%] text-gray-900 whitespace-pre-line lg:h-full lg:overflow-y-scroll no-scrollbar">
                {data[index].background}
              </p>
            </div>
          )}

          {tab === "challenges" && (
            <p className=" font-medium lg:text-xl leading-[180%] text-gray-900 whitespace-pre-line lg:h-full overflow-y-scroll ">
              {data[index].challenges}
            </p>
          )}

          {tab === "ourApproach" && (
            <p className=" font-medium lg:text-xl leading-[180%] text-gray-900 whitespace-pre-line lg:h-full overflow-y-scroll ">
              {data[index].ourApproach}
            </p>
          )}
          {tab === "customerOutcome" && (
            <p className=" font-medium lg:text-xl leading-[180%] text-gray-900 whitespace-pre-line lg:h-full overflow-y-scroll ">
              {data[index].customerOutcome}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CaseCard({ name, image, bgColor, setOverlay, index, setIndex }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:w-[48%] lg:w-[250px]"
      onClick={() => {
        setOverlay(true);
        setIndex(index);
      }}
    >
      <div
        className={`h-48 overflow-hidden flex items-center justify-center bg-white`}
      >
        <img src={image} alt="" className="w-full" />
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

  const [overlay, setOverlay] = React.useState(false);
  const [caseIndex, setCaseIndex] = React.useState(0);

  return (
    <div className="relative">
      <Layout>
        <div className="inline-flex space-x-10 items-start justify-start py-10 lg:py-0 overflow-x-scroll w-full no-scrollbar">
          <div
            className="inline-flex flex-col space-y-1 items-start cursor-pointer"
            onClick={() => setActiveTab("all")}
          >
            <p className="text-base font-bold text-gray-900 uppercase">All</p>
            {activeTab === "all" && (
              <div className="animate w-full h-0.5 border border-blue-500" />
            )}
          </div>
          <div
            className="inline-flex flex-col space-y-1 items-start cursor-pointer"
            onClick={() => setActiveTab("fintech")}
          >
            <p className="text-base font-bold text-gray-900 uppercase">
              Fintech
            </p>
            {activeTab === "fintech" && (
              <div className="w-full h-0.5 border border-blue-500" />
            )}
          </div>
          <div
            className="inline-flex flex-col space-y-1 items-start cursor-pointer"
            onClick={() => setActiveTab("consulting")}
          >
            <p className="text-base font-bold text-gray-900 uppercase">
              Consulting
            </p>
            {activeTab === "consulting" && (
              <div className="w-full h-0.5 border border-blue-500" />
            )}
          </div>
          <div
            className="inline-flex flex-col space-y-1 items-start cursor-pointer"
            onClick={() => setActiveTab("ecommerce")}
          >
            <p className="text-base font-bold text-gray-900 uppercase">
              Ecommerce
            </p>
            {activeTab === "ecommerce" && (
              <div className="w-full h-0.5 border border-blue-500" />
            )}
          </div>
          <div
            className="inline-flex flex-col space-y-1 items-start cursor-pointer"
            onClick={() => setActiveTab("business")}
          >
            <p className="text-base font-bold text-gray-900 uppercase">
              business
            </p>
            {activeTab === "business" && (
              <div className="w-full h-0.5 border border-blue-500" />
            )}
          </div>
          <div
            className="inline-flex flex-col space-y-1 items-start cursor-pointer"
            onClick={() => setActiveTab("manufacturing")}
          >
            <p className="text-base font-bold text-gray-900 uppercase">
              manufacturing
            </p>
            {activeTab === "manufacturing" && (
              <div className="w-full h-0.5 border border-blue-500" />
            )}
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 flex flex-wrap md:flex-row flex-col gap-[24px]"
        >
          {filtered.map((item, index) => {
            return (
              <CaseCard
                key={index}
                name={item.title}
                setOverlay={setOverlay}
                setIndex={setCaseIndex}
                index={index}
                image={item.image}
              />
            );
          })}
        </motion.div>

        {overlay && <OverlayCard setOverlay={setOverlay} index={caseIndex} />}
      </Layout>
    </div>
  );
};

export default CaseStudiesList;
