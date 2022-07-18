import React from "react";
import Layout from "./shared/Layout";
import p1 from "../assets/images/p1.svg";
import p2 from "../assets/images/p2.svg";
import p3 from "../assets/images/p3.svg";
import p4 from "../assets/images/p4.svg";
import p5 from "../assets/images/p5.svg";
import p6 from "../assets/images/p6.svg";

const Partners = () => {
  return (
    <Layout className="">
      <div className="flex flex-col items-center space-y-10">
        <p className="text-4xl lg:text-5xl font-extrabold leading-10 text-center text-gray-900">
          Technology Partners
        </p>
        <div className="w-20 h-0.5 border-2 border-blue-500" />
      </div>
      <div className="flex lg:justify-between items-center flex-wrap justify-center gap-x-10 ">
        <img src={p6} alt="" />
        <img src={p5} alt="" />
        <img src={p4} alt="" />
        <img src={p3} alt="" />
        <img src={p2} alt="" />
        <img src={p1} alt="" />
      </div>
    </Layout>
  );
};

export default Partners;
