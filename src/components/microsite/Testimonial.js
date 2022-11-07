import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";

import ApiService from "../../assets/images/api.png";

export const testimonials = [
  {
    id: 1,
    testimonial:
      "Amazon Web Services (AWS) is an amazing public cloud infrastructure platform. At my organization, we are using AWS for all our major business services that help us to run the application and mobile applications seamlessly and smoothly. AWS provides ovide us agility to scale up and ...",
    img:"https://randomuser.me/api/portraits/med/women/15.jpg",
    name:"Annabelle Haugvaldstad"
  },
  {
    id: 2,
    testimonial:
      "I had a pretty average experience with AWS maybe because many of the functions I cannot perform alone and always need a second person to help me out. I have been using this software for the last 2 months and though I learned so much about the software always I come up with new ...",
    img:"https://randomuser.me/api/portraits/med/women/58.jpg",
    name:"Amber Rose"

  },
  {
    id: 3,
    testimonial:
      "ntegrating AWS seems next to impossible you will always need a person with solid technical knowledge of AWS and to perform the required action. Though they have good customer support at times they take way too long to reply. Even though there is plenty of information available still ... ",
    img:"https://randomuser.me/api/portraits/med/men/86.jpg",
    name:"Bale Dave"

    },
  {
    id: 4,
    testimonial:
      "The best feature that I like the most is the AWS EC2 servers, this is really innovative and agile in nature, this can be scale up and down at any point. I can buy EC2 instances at any time and am able to add more if required, this allows us full flexibility and is very important for our overall application ...",
    img:"https://randomuser.me/api/portraits/med/men/98.jpg",
    name:"Perry Shawn"

    },
];

function Testimonial() {


  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={6} dotWidth={30} />;
    },
  };

  return (
    <div className="w-screen h-[569px] bg-[#E5EFFF] pt-[64px] mt-[98px]">
      <h1 className="text-center text-xl md:text-3xl font-bold ">Success Stories</h1>
      <div className="md:w-[544px] w-[300px] md:h-[307px] h-[350px] bg-white mx-auto mt-[22px] md:p-8 p-2">
        <Slider {...settings}>
          {testimonials.map(query => {
            return(
              <div key={query.id}>
              <div className="flex flex-col self-strech">
                <p className="font-normal md:text-base text-xs md:text-sm">
                  {query.testimonial}
                </p>
                <div className="flex gap-2 mt-8 ">
                  <img src={query.img} alt="" className="rounded-full"/>
                  <div className="flex flex-col self-center">
                    <h5 className="font-bold md:text-base">{query.name}</h5>
                    <h6 className="text-sm">Devops king developer</h6>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
