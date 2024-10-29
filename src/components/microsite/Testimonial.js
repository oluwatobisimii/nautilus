// // import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import MagicSliderDots from "react-magic-slider-dots";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-magic-slider-dots/dist/magic-dots.css";
// import { testimonials } from "./constant";
// // import ApiService from "../../assets/images/api.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonials } from "./constant";

function Testimonial() {
  return (
    <div className="w-screen h-[569px] bg-[#E5EFFF] pt-[64px] mt-[98px]">
      <h1 className="text-center text-xl md:text-3xl font-bold ">Success Stories</h1>
      <div className="md:w-[544px] w-[300px] md:h-[307px] h-[350px] bg-white mx-auto mt-[22px] md:p-8 p-2">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
        >
          {testimonials.map(query => {
            return (
              <SwiperSlide key={query.id}>
                <div className="flex flex-col self-strech">
                  <p className="font-normal text-xs md:text-sm">
                    {query.testimonial}
                  </p>
                  <div className="flex gap-2 mt-8 ">
                    <img src={query.img} alt="" className="rounded-full" />
                    <div className="flex flex-col self-center">
                      <h5 className="font-bold md:text-base">{query.name}</h5>
                      <h6 className="text-sm">Devops king developer</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
}



// function Testimonial() {
//   return (
//     <div className="w-screen h-[569px] bg-[#E5EFFF] pt-[64px] mt-[98px]">
//       <h1 className="text-center text-xl md:text-3xl font-bold ">
//         Success Stories
//       </h1>
//       <div className="md:w-[544px] w-[300px] md:h-[307px] h-[350px] bg-white mx-auto mt-[22px] md:p-8 p-2">
//         <Swiper
//           pagination={{ clickable: true }}
//           modules={[Pagination]}
//           slidesPerView={1}
//           spaceBetween={20}
//         >
//           {testimonials.map((query) => (
//             <SwiperSlide key={query.id}>
//               <div className="flex flex-col self-stretch">
//                 <p className="font-normal text-xs md:text-sm">
//                   {query.testimonial}
//                 </p>
//                 <div className="flex gap-2 mt-8 ">
//                   <img
//                     src={query.img}
//                     alt=""
//                     className="rounded-full"
//                     width={50}
//                     height={50}
//                   />
//                   <div className="flex flex-col self-center">
//                     <h5 className="font-bold md:text-base">{query.name}</h5>
//                     <h6 className="text-sm">Devops king developer</h6>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

export default Testimonial;
