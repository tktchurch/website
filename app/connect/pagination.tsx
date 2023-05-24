"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

const images = [
  { id: 1, src: "https://www.youtube.com/embed/p9khrxrP4NE" },
  { id: 2, src: "https://www.youtube.com/embed/skqjaADxtcU" },
  { id: 3, src: "https://www.youtube.com/embed/mbEY8zYf4y0" },
  { id: 4, src: "https://www.youtube.com/embed/R90HPzNCgw4" },
  { id: 4, src: "https://www.youtube.com/embed/skqjaADxtcU" },
];

const Pagination = () => {
  const divRef = useRef(null);

  const scrollAmount = 100;

  const scrollClick = (element: any, a: any) => {
    setTimeout(() => {
      element.scrollLeft += a;
    }, 0);
  };

  return (
    <div className=" flex h-[220px] flex-row gap-[20px] overflow-x-auto no-scrollbar">
      {images &&
        images.map((data, index) => (
          <iframe
            width="350"
            height="220"
            src={data.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ))}
    </div>
  );
};

export default Pagination;
