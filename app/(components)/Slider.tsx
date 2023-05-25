import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const SliderData = [
  {
    id: 1,
    events: [
      {
        id: 1,
        title: "Sunday Service",
        location: "svit auditorium, secunderabad ",
        time: "08:00 AM",
      },
      {
        id: 2,
        title: "Bilingual Service",
        location: "secunderabad",
        time: "11:00 AM",
      },
    ],
  },
  {
    id: 2,
    events: [
      {
        id: 2,
        title: "Sunday morning extension service",
        location: "Kukatpally",
        time: "10:30 AM",
      },
    ],
  },
  {
    id: 3,
    events: [
      {
        id: 3,
        title: "Friday Night service",
        location: "SVIT auditorium, secunderabad",
        time: "6:30 PM",
      },
    ],
  },
];

export default function Slider() {
  return (
    <>
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
        {SliderData.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col lg:flex-row justify-evenly items-center px-24 py-4 lg:py-24 bg-amber-400">
                <div className="text-gray-700 text-center px-4 lg:py-2 lg:m-2">
                  <div
                    className="mx-4 w-[224px] h-[202px] lg:w-[436px] lg:h-[372px]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                      className="font-normal text-white text-lg"
                      src="/assets/images/image46.png"
                      alt="lg"
                    />
                  </div>
                </div>
                <div className="text-gray-700 px-4 py-2 lg:m-2">
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-[32px] lg:text-7xl text-[#0F0F0F] text-start">
                      Explore Us
                    </h3>

                    <div className="flex gap-10 flex-col lg:gap-24 lg:flex-row">
                      {slide.events.map((event) => {
                        return (
                          <div className="flex flex-col items-center">
                            <div className="font-normal text-[15px] lg:text-2xl mt-6 text-start text-[#0F0F0F]">
                              {event.title}
                            </div>
                            <div className="font-normal w-[90vw] text-[15px] lg:text-2xl mt-6 text-start text-[#0F0F0F] flex flex-row justify-center lg:w-fit lg:justify-start">
                              <svg
                                className=" w-[24px] mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                              >
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                              </svg>
                              {event.location}
                            </div>
                            <div className="font-normal text-[15px] lg:text-2xl mt-6 text-start text-[#0F0F0F] flex flex-row w-[90vw] lg:w-fit justify-center lg:justify-start">
                              <svg
                                className=" w-[24px] mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                              </svg>
                              {event.time}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <Link
                      href="/connect"
                      className=" text-center pt-[1rem] rounded-lg mt-8 font-[500] w-[14rem] bg-white hover:bg-slate-100 text-[#0F0F0F] h-14 text-[16px] lg:text-2xl px-6 lg:pt-4 lg:pb-12"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
