import React from "react";
import Layout from "../components/shared/Layout";
import aboutImage from "../assets/images/about.png";

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

        {/* <div className="flex flex-col lg:flex-row">
          <div className="border rounded-3xl border-gray-200 group ">
            <p className="text-5xl font-bold group-hover:text-[#4d4fa3]">
              Our Vision <br />
            </p>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default About;
