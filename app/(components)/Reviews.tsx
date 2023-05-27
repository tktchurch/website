import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SliderData = [
  {
    id: 1,
    review:
      "Its indescribable to put it in sentence than to containerized ourselves with the word of god from great man of god through this resource. make it invincible. 😊 ",
    rating: 5,
    name: "Prashanth Shavanam",
  },
  {
    id: 2,
    review: "Very useful. Liked the interface, God bless 🖤",
    rating: 5,
    name: "Saga official",
  },
  {
    id: 3,
    review:
      "So excited to be part of this amazing church app..really gonna help us. I could see pastoral care is next level in TKT. I appreciate the unique ideas for taking word & Pastoral care to church. Continuously Encouraging us to be spiritual. Once again Thank you for developing such app...",
    rating: 5,
    name: "Abraham Munigala",
  },
];

export default function Reviews() {
  const reviews = 5;

  return (
    <div className="reviews-container">
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
        {SliderData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="bg-black text-white text-center lg:py-5 px-5 flex flex-col gap-3 justify-center items-center h-80 lg:h-96">
                <p className="max-w-[750px] lg:text-lg my-10 overflow-hidden">
                  {item.review}
                </p>

                <div className="ratings flex gap-1 mx-auto w-auto">
                  {Array.from({ length: item.rating }).map(() => {
                    return (
                      <span className="">
                        <img
                          width={18}
                          src="/assets/images/star.jpg"
                          alt="star"
                        />
                      </span>
                    );
                  })}
                </div>

                <h3>{item.name}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
