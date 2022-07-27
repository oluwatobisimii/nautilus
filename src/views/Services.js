import React from 'react'
import { cards } from "../assets/specialization"
import { motion } from "framer-motion"


import Layout from "../components/shared/Layout";

function SpecializationCard({ title, subtitle, image }) {
    const item = {
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
        hidden: { opacity: 0, y: 400 },
    }
    return (

        <motion.div
            variants={item}
            viewport={{ once: true, amount: 0.8 }}
            className=" md:w-[45%] lg:w-[30%]  flex flex-col border bg-[#F1F9FE] hover:border-[#009CF2] hover:shadow-xl shadow-[#a4dfff]" >
            <div className="bg-white">
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col space-y-3 items-start justify-start p-4 lg:p-9 ">
                <p className="text-2xl font-bold leading-7">{title}</p>
                <p className="w-full text-base font-medium leading-normal text-gray-500">
                    {subtitle}
                </p>
            </div>
        </motion.div>
    );
}

const Services = () => {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,

            }
        },
        hidden: { opacity: 0 },
    }



    return (
        <Layout>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={list}
            >

                <div className="font-cabinet w-full relative scroll-smooth no-scrollbar">
                    <div className="flex flex-wrap flex-col md:flex-row gap-[36px] lg:gap-[40px]">

                        {cards.map((card, index) => {
                            return (
                                <SpecializationCard
                                    key={index}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    image={card.image}
                                />
                            );
                        })}

                    </div>
                </div>
            </motion.div>
        </Layout>
    )
}

export default Services