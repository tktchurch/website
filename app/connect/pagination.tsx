"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';

const images = [
  { id: 1, src: "/assets/images/image53.png" },
  { id: 2, src: "/assets/images/image53_1.png" },
  { id: 3, src: "/assets/images/image53_2.png" },
  { id: 4, src: "/assets/images/image52.png" },
];

const Pagination = () => {

    const divRef = useRef(null);

    const scrollAmount = 100;

  const scrollClick = (element : any, a : any) => {
    setTimeout(() => {
      element.scrollLeft += a;
    }, 0);
  };

  return (
    <div className=' flex h-[220px] flex-row gap-[20px] overflow-x-auto no-scrollbar'>
      {images && 
        images.map((data, index) => (
          <Image
            width={377}
            height={200}
            className=' object-cover'
            src={data.src}
            key={index}
            alt='Some alternate text' 
          />
        ))
      }
    </div>
  );
};

export default Pagination;
