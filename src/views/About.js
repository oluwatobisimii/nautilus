import React from "react";
import Layout from "../components/shared/Layout";
import aboutImage from "../assets/images/about.png";
import{motion} from "framer-motion"
import { MdBolt, MdAdd, MdRemove } from "react-icons/md";
import { HiOutlineSparkles, HiOutlineLightBulb,HiOutlineBadgeCheck } from "react-icons/hi";

function MissionCard() {

  const [overlay, setOverlay] = React.useState(false)
  return (
    <motion.div className=" w-full md:w-[40%] lg:w-[30%] border border-gray-200 bg-white hover:border-none hover:shadow-2xl hover:shadow-[#40a7f03b] group p-6 space-y-6 relative overflow-hidden">
      <div className="flex justify-between space-x-10">
        <div className="flex space-x-3 rounded-full items-center px-2 py-1 bg-[#F8F8F8] group-hover:bg-[#F1F9FE] group-hover:text-[#40A6F0]">
          <MdBolt />
          <p className="font-medium">How we do it</p>
        </div>
        <MdAdd
          className="p-3 rounded-full box-content
              bg-[#F8F8F8] group-hover:bg-[#40A6F0]
              group-hover:text-white hover:cursor-pointer
              "
         onClick={()=>{setOverlay(true)}}/>
      </div>
      <p className="text-5xl font-extrabold ">
        Our Mission <br />
      </p>

      <HiOutlineLightBulb className="text-[320px] font-extralight relative -right-6 text-[#F1F9FE] group-hover:text-[#40A6F0]" />
      {overlay && (
        <motion.div 
        initial={{y:"100%"}}
        animate={{y:"0"}}
        exit={{y:"100%"}}

        className="absolute -top-6 bg-[#40A6F0] left-0 w-full h-full flex flex-col p-6 space-y-4">
          <MdRemove
            className="p-3 rounded-full box-content
              bg-[#F8F8F8]  hover:cursor-pointer self-end
              "  onClick={()=>{setOverlay(false)}}
          />
          <p className="pt-10 text-4xl font-bold text-white">Our Mission</p>
          <p className="text-lg font-medium leading-[180%] text-white">
            Our mission is to make our clients happy by creating a world-class
            services that will definitely help in their marketing and branding.
            We will produce high-quality product and services that is 99.9%
            available and reliable to our clients.
            <br />
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

function VisionCard() {

  const [overlay, setOverlay] = React.useState(false)
  return (
    <motion.div className=" w-full md:w-[40%] lg:w-[30%] border border-gray-200 bg-white hover:border-none hover:shadow-2xl hover:shadow-[#40a7f03b] group p-6 space-y-6 relative overflow-hidden">
      <div className="flex justify-between space-x-10">
        <div className="flex space-x-3 rounded-full items-center px-2 py-1 bg-[#F8F8F8] group-hover:bg-[#F1F9FE] group-hover:text-[#40A6F0]">
          <MdBolt />
          <p className="font-medium">Why we do it</p>
        </div>
        <MdAdd
          className="p-3 rounded-full box-content
              bg-[#F8F8F8] group-hover:bg-[#40A6F0]
              group-hover:text-white hover:cursor-pointer
              "
         onClick={()=>{setOverlay(true)}}/>
      </div>
      <p className="text-5xl font-extrabold ">
        Our Vision <br />
      </p>

      <HiOutlineSparkles className="text-[320px] font-extralight relative -right-6 text-[#F1F9FE] group-hover:text-[#40A6F0]" />
      {overlay && (
        <motion.div 
        initial={{y:"100%"}}
        animate={{y:"0"}}
        exit={{y:"100%"}}

        className="absolute -top-6 bg-[#40A6F0] left-0 w-full h-full flex flex-col p-6 space-y-4">
          <MdRemove
            className="p-3 rounded-full box-content
              bg-[#F8F8F8]  hover:cursor-pointer self-end
              "  onClick={()=>{setOverlay(false)}}
          />
          <p className="pt-10 text-4xl font-bold text-white">Our Vision</p>
          <p className="text-lg font-medium leading-[180%] text-white">
          Our vision is to produce high-quality, reliable and user friendly services to our clients. We want to make our clients happy by creating world-class services that will definitely help in their day to day activities, marketing and branding.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

function CoreValues() {

  const [overlay, setOverlay] = React.useState(false)
  return (
    <motion.div className=" w-full md:w-[40%] lg:w-[30%] border border-gray-200 bg-white hover:border-none hover:shadow-2xl hover:shadow-[#40a7f03b] group p-6 space-y-6 relative overflow-hidden">
      <div className="flex justify-between space-x-10">
        <div className="flex space-x-3 rounded-full items-center px-2 py-1 bg-[#F8F8F8] group-hover:bg-[#F1F9FE] group-hover:text-[#40A6F0]">
          <MdBolt />
          <p className="font-medium">Who we are</p>
        </div>
        <MdAdd
          className="p-3 rounded-full box-content
              bg-[#F8F8F8] group-hover:bg-[#40A6F0]
              group-hover:text-white hover:cursor-pointer
              "
         onClick={()=>{setOverlay(true)}}/>
      </div>
      <p className="text-5xl font-extrabold ">
        Core Values <br />
      </p>

      <HiOutlineBadgeCheck className="text-[320px] font-extralight relative text-[#F1F9FE] group-hover:text-[#40A6F0]" />
      {overlay && (
        <motion.div 
        initial={{y:"100%"}}
        animate={{y:"0"}}
        exit={{y:"100%"}}

        className="absolute -top-6 bg-[#40A6F0] left-0 w-full h-full flex flex-col p-6 space-y-4">
          <MdRemove
            className="p-3 rounded-full box-content
              bg-[#F8F8F8]  hover:cursor-pointer self-end
              "  onClick={()=>{setOverlay(false)}}
          />
          <p className="pt-10 text-4xl font-bold text-white">Core Values</p>
          <p className="text-lg font-medium leading-[180%] text-white">

          <li>People</li> 
          <li>Excellence</li>
          <li>Integrity</li>
          <li>Founder Mentality</li>
          <li>Commitment to Client</li>
          <li>Teamwork</li>
                   </p>
        </motion.div>
      )}
    </motion.div>
  );
}

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-40">
        <div className="flex flex-col lg:flex-row justify-center gap-x-20">
          <div className="w-full lg:w-[40%] space-y-6 p-10" data-aos="fade-up">
            <p className="text-5xl font-extrabold leading-[105%] text-gray-900">
              About Nautilus
            </p>
            <p className="text-lg font-medium leading-loose text-gray-500">
              Nautilus Technologies is a DevOps and Cloud Consulting company
              that helps startups architect, build and maintain their Cloud
              Infrastructure at Scale. We provide startups with all they need to
              deliver and their products to their users in the most highly
              available, and reliable way.
              <br />
            </p>
          </div>
          <div
            className="w-full lg:w-[40%] min-h-[400px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease-in-back"
          >
            <img src={aboutImage} alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[48px] ">
          <VisionCard/>
          <MissionCard/>
          <CoreValues/>
        </div>
      </div>
    </Layout>
  );
};

export default About;
