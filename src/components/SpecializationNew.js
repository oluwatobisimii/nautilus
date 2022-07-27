import React from "react";
import Layout from "./shared/Layout";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {cards} from "../assets/specialization"


function SpecializationCard({ title, subtitle, image }) {
  return (
    <div className="w-[350px] lg:w-full px-5">
      <div className="w-full border hover:border-[#009CF2] hover:shadow-xl shadow-[#a4dfff] bg-[#F1F9FE] flex flex-col">
        <div className="bg-white">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col space-y-3 items-start justify-start p-4 lg:p-9 w-full">
          <p className="text-2xl font-bold leading-7">{title}</p>
          <p className="w-full text-base font-medium leading-normal text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>
     
    </div>
  );
}

export default function SpecializationNew() {
  React.useEffect(() => {
    //   function(){
    //     if(direction == 'left'){
    //         element.scrollLeft -= step;
    //     } else {
    //         element.scrollLeft += step;
    //     }
    //     scrollAmount += step;
    //     if(scrollAmount >= distance){
    //         window.clearInterval(slideTimer);
    //     }
    // }
  })

  // const moveRight = function () {
  //   const element = document.getElementById("outsider")
  //   element.scrollLeft += 350;
  // }
  // const moveLeft = function () {
  //   const element = document.getElementById("outsider")
  //   element.scrollLeft -= 350;
  // }

  let slider = React.useRef(null)

  const shiftLeft = ()=>{
    slider.slickNext()
}

const shiftRight = ()=>{
    slider.slickPrev()
}

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Layout>
      <div className="pt-10 text flex lg:space-x-10 space-x-4 items-center">
        <p className=" text-3xl md:text-5xl font-extrabold leading-10 text-gray-900">
          Our Specialization
        </p>

        <MdChevronLeft className="shadow p-2 lg:p-4 bg-white cursor-pointer rounded-full box-content text-2xl" onClick={shiftRight} />
        <MdChevronRight className="shadow p-4 bg-white cursor-pointer rounded-full box-content text-2xl" onClick={shiftLeft} />
      </div>

      <div className="h-10 lg:h-24 w-full"></div>

      <div className="font-cabinet w-full overflow-hidden relative" id="outsider" >
        <Slider {...settings} className="w-full " ref={e => slider = e }>
          
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
        </Slider>
      </div>
    </Layout>
  );
}
