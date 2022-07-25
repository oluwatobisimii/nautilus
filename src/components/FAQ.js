import React, {useState} from "react";

function QuestionCard(){

  const [toggle, setToggle] = useState(false)

  return(
    <div className="w-full flex flex-col">
        <div className="bg-blue-50 rounded-tl rounded-tr flex items-center px-4 py-2 justify-between cursor-pointer hover:bg-[#d2eeff] " onClick={()=>{setToggle(!toggle)}}>
          <p className="text-sm font-medium text-gray-900">
            What consulting services do you offer?
          </p>
          <p className="text-3xl font-light text-center text-gray-500 "  >{toggle ? "-":"+"}</p>
        </div>
        {toggle && <div className="bg-[#459ED7] rounded-bl rounded-br  flex space-x-4 p-4">

<div className="w-1 bg-white bg-opacity-50 rounded-bl rounded-br" />
<p className="text-sm font-medium leading-tight text-white w-[80%]">
  We offer consulting services in core areas of expertise including
  general security architecture, identity management, cloud security and
  software development.
</p>
</div>}
      </div>
  )
}

function FAQ() {
  return (
    <section className="container mx-auto p-4 md:px-10 lg:px-20 lg:py-36 font-cabinet flex justify-between lg:flex-row flex-col space-y-6 lg:space-y-0">
      <div className="lg:w-[35%] bg-[#E9F6FF] p-8 space-y-8" data-aos-duration="500" data-aos="fade-up" data-aos-delay="200">
        <div className="flex items-center space-x-6">
          <p className="bg-white text-3xl p-4 rounded-full w-12 h-12 flex items-center justify-center font-bold">
            ?
          </p>
          <div className="h-0.5 bg-[#459ED7] w-[60%]"></div>
        </div>
        <p className="w-64 h-32 text-5xl font-extrabold leading-10 text-[#150E3B]">
          Frequently asked questions
        </p>
        <p className=" text-xl font-medium leading-7 text-gray-500">
          Browse through these FAQs to find answer to commonly raised questions
        </p>
      </div>

      <div className="lg:w-[60%] flex flex-col space-y-4" data-aos-duration="500" data-aos="fade-up"
      data-aos-delay="300">
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      </div>

      
    </section>
  );
}

export default FAQ;
