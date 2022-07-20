import React from "react";
import Layout from "./shared/Layout";

const Contacts = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-center pt-10" id="contact">
        <div className="flex flex-col lg:w-[35%] space-y-6">
          <p className="text-base font-normal text-blue-500">
            We’ll like to know more
          </p>
          <p className="w-72 text-5xl font-semibold">
            Tell us about your project
          </p>
        </div>
        <form className="shadow-2xl lg:w-[50%] flex flex-wrap p-6 lg:p-10 space-y-6 lg:space-y-10">
          <div className="flex flex-col w-full space-y-2">
            <label
              htmlFor="full_name"
              className="font-medium tracking-widest uppercase font-roboto text-sm"
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="full_name"
              id="full_name"
              className="border border-gray-200 px-8 py-4"
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label
              htmlFor="email"
              className="font-medium tracking-widest uppercase font-roboto text-sm"
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              name="email"
              id="email"
              className="border border-gray-200 px-8 py-4"
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label
              htmlFor="full_name"
              className="font-medium tracking-widest uppercase font-roboto text-sm"
            >
              Timeline
            </label>
            <input
              type="date"
              placeholder="Enter your full name"
              name="full_name"
              id="full_name"
              className="border border-gray-200 px-8 py-4"
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label
              htmlFor="email"
              className="font-medium tracking-widest uppercase font-roboto text-sm"
            >
              MORE INFORMATION
            </label>
            <textarea
              type="textarea"
              placeholder="enter your messsage here"
              name="email"
              id="email"
              className="border border-gray-200 px-8 py-4 resize-none "
            />
          </div>

          <button className="inline-flex items-center justify-center h-14 px-8 py-4 bg-[#459ED7]">
            <p className="text-base font-bold text-white uppercase">Send request</p>
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contacts;
