import React from "react";
import Button from "./shared/Button";
import Layout from "./shared/Layout";

const AboutHeader = () => {
  return (
    <section className="bg-[#150E3B]">
      <Layout>
        <div className="flex">
          <div className='w-[35%] space-y-8 flex flex-col'>
            <p className="text-sm font-medium text-blue-100">
              With us, the Testimonials are unending.
            </p>
            <p className="text-6xl font-medium leading-10 text-white">Case Studies</p>

            <Button styles="self-start mt-4">
                <p>Contact us</p>
            </Button>
          </div>
          <p className="text-lg font-medium tracking-wide leading-10 text-blue-100 w-[60%]">A sneak peek into ‘ how we automate end-to-end delivery pipeline across cloud platforms?', ‘how futuristic applications are built and tested?’, ‘how a complex business requirement inspires a path-breaking innovation?’, ‘how we create value by  solving emerging cybersecurity challenges through innovating methodology?’ and many more.</p>
        </div>
      </Layout>
    </section>
  );
};

export default AboutHeader;
