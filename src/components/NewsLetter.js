import React from 'react'
import Layout from './shared/Layout'
import newsLetter from "../assets/images/newsletter.svg"

export const NewsLetter = () => {
  return (
    <section className="bg-[#150E3B] p-4 lg:p-10">
    <Layout>
<div className="bg-[#F1FAFF] flex flex-col space-y-6 lg:space-y-0 lg:flex-row px-10 py-20 first-letter:items-center justify-center">
<div className="w-1/2 lg:w-[30%]">
    <img src={newsLetter} alt="" />
</div>
<div className="flex flex-col space-y-8  lg:w-[55%]">
<p className="text-4xl lg:text-5xl font-extrabold leading-10 text-gray-900">Stay up to date</p>
<p className="text-lg font-normal leading-7 text-gray-500">Get news and tips on DevOps/Cloud space. You'll also be the first to know when we roll out new products and have discounted services.</p>
<div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row">
<input className=" lg:w-[50%] bg-white border border-blue-200 p-4 rounded-none " placeholder='your@email.com'/>
<button className="px-8 py-4 font-medium text-white bg-[#150E3B]" 
>Subscribe</button>
</div>
</div>
</div>
    </Layout>
    </section>
  )
}
