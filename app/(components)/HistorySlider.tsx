import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function HistorySlider() {
  return (
    <>
      <div className=" mt-8 w-full h-[307px] hidden lg:flex flex-row">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="events-slider"
        >
          <SwiperSlide key={1}>
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/history/1.png"}
                alt="Our History Image One"
              />
            </div>
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/history/6.jpg"}
                alt="Our History Image Two"
              />
            </div>
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/history/3.jpg"}
                alt="Our History Image Three"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide key={2}>
            {/* <div className=" mt-8 w-full h-[307px] hidden lg:flex flex-row"> */}
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/history/1.png"}
                alt="Our History Image One"
              />
            </div>
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/history/6.jpg"}
                alt="Our History Image Two"
              />
            </div>
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/history/3.jpg"}
                alt="Our History Image Three"
              />
            </div>
            {/* </div>
            ; */}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
