import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function HomePageCarouselOurHistory() {
  const slides = [
    {
      url: "/assets/images/image53.png",
    },
    {
      url: '"/assets/images/image53_1.png"',
    },
    {
      url: '"/assets/images/image53_2.png"',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex : number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-full h-[200px] mt-8 lg:hidden lg:h-[600px] m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white hover:bg-slate-100 text-white cursor-pointer'>
        <BsChevronCompactLeft color='black' onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white hover:bg-slate-100 text-white cursor-pointer'>
        <BsChevronCompactRight color='black' onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center -mt-12'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer`}
          >
            {currentIndex === slideIndex ?
                <RxDotFilled color='white' /> : <RxDotFilled color='grey' />
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageCarouselOurHistory;