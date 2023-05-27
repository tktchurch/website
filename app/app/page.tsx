"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Reviews from "../(components)/Reviews";

function App() {
  const [tempVar, setTempVar] = useState(0);

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  // const leftImageRef = useRef(null);
  // const rightImageRef = useRef(null);
  // const centerImageRef = useRef(null);

  const scrollToDiv = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // setTimeout(() => {
  //     handleMouseOver()
  // }, 1000);

  useEffect(() => {
    setTimeout(() => {
      if (tempVar === 0) {
        setTempVar(1);
        const centerImage = document.getElementById("centerImage");
        const rightImage = document.getElementById("rightImage");
        const leftImage = document.getElementById("leftImage");
        if (typeof window !== "undefined") {
          if (centerImage !== null) {
            console.log("HELLO");
            centerImage.classList.add("lg:translate-y-[-15%]");
            centerImage.classList.add("translate-y-0");
          }
          if (rightImage !== null) {
            rightImage.classList.add("lg:translate-y-[-20%]");
            rightImage.classList.add("translate-y-0");
            rightImage.classList.add("lg:translate-x-[50%]");
          }
          if (leftImage !== null) {
            leftImage.classList.add("lg:translate-y-[-20%]");
            leftImage.classList.add("translate-y-0");
            leftImage.classList.add("lg:translate-x-[-50%]");
          }
        }
      }
    }, 1000);
  }, []);

  // let handleMouseOver = () => {
  //     if (tempVar === 0) {
  //         setTempVar(1)
  //         const centerImage = document.getElementById("centerImage");
  //         const rightImage = document.getElementById("rightImage");
  //         const leftImage = document.getElementById("leftImage");
  //         if (typeof window !== "undefined") {
  //             if (centerImage !== null) {
  //                 console.log("HELLO")
  //                 centerImage.classList.add("lg:translate-y-[-15%]");
  //                 centerImage.classList.add("translate-y-0");
  //             }
  //             if (rightImage !== null) {
  //                 rightImage.classList.add("lg:translate-y-[-20%]");
  //                 rightImage.classList.add("translate-y-0");
  //                 rightImage.classList.add("lg:translate-x-[50%]");
  //             }
  //             if (leftImage !== null) {
  //                 leftImage.classList.add("lg:translate-y-[-20%]");
  //                 leftImage.classList.add("translate-y-0");
  //                 leftImage.classList.add("lg:translate-x-[-50%]");
  //             }
  //         }
  //     }
  // }

  return (
    <div>
      <div
        ref={div1Ref}
        // onMouseEnter={() => {handleMouseOver()}}
        // onMouseOver={() => {handleMouseOver()}}
        onClick={() => scrollToDiv(div2Ref)}
        className="bg-[#000] text-white h-[60vh] lg:h-[100vh] relative flex justify-center items-center overflow-hidden"
      >
        <h1 className=" absolute top-0 left-1/2 transform -translate-x-1/2 lg:left-0 lg:-translate-x-0 text-center w-[100%] lg:top-20 text-[32px] font-semibold lg:font-semibold lg:text-[64px]">
          Reimagining Church Experience
        </h1>

        {/* left mobile image */}

        {/* <div className="py-12 border border-red-400 w-full"></div><br /> */}

        <div
          id="leftImage"
          className="w-[325px] h-[340px] lg:h-[640px]  rounded-lg relative top-[0%] mt-12 lg:top-[55%] left-[10%] lg:left-[15%] -rotate-12 transition-transform duration-700 ease-in-out translate-y-[35%]"
        >
          <Image
            fill
            src={"/assets/images/app/phone1.png"}
            alt="Phone Image One"
          />
        </div>

        {/* right mobile image */}
        <div
          id="rightImage"
          className="w-[325px] h-[340px] lg:h-[640px]  rounded-lg  relative top-[7%] lg:top-[58%] -right-1/4 lg:-right-[9%] rotate-12 transition-transform duration-700 ease-in-out translate-y-[35%]"
        >
          <Image
            fill
            src={"/assets/images/app/phone2.png"}
            alt="Phone Image two"
          />
        </div>

        {/* center mobile image */}
        <div
          id="centerImage"
          className="w-[325px] h-[340px] lg:h-[640px]  rounded-lg  relative -top-[5%] lg:top-[35%] right-[33%] lg:right-[20%] transition-transform duration-700 ease-in-out translate-y-[35%]"
        >
          <Image
            fill
            src={"/assets/images/app/phone3.png"}
            alt="Phone Image three"
          />
        </div>
      </div>
      <div
        ref={div2Ref}
        onClick={() => scrollToDiv(div3Ref)}
        className="bg-[#FEBB24] text-white h-[100vh] flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px]"
      >
        <div>
          <h1 className=" text-[28px] lg:text-[64px] text-black lg:w-[800px] font-semibold">
            Watch us live
          </h1>
          <h2 className=" text-black text-[16px] lg:text-[36px] lg:w-[800px]">
            Experience all our services live stream directly on the app, be well
            informed of all the upcoming events of the church
          </h2>
        </div>
        <div className=" w-[70%] h-[75%] lg:w-[240px] lg:h-[533px] relative">
          <Image
            fill
            src={"/assets/images/app/phone1.png"}
            alt="phone image one"
          />
        </div>
      </div>
      <div
        ref={div3Ref}
        onClick={() => scrollToDiv(div4Ref)}
        className="bg-[#FFFFFF] text-white h-[100vh] flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px]"
      >
        <div>
          <h1 className=" text-[28px] lg:text-[56px] text-black lg:w-[800px] font-semibold">
            Connect, learn and grow with us
          </h1>
          <h2 className=" text-black text-[16px] lg:text-[36px] lg:w-[800px]">
            Experience all our services live stream directly on the app, be well
            informed of all the upcoming events of the church
          </h2>
        </div>
        <div className=" mt-6 w-[70%] h-[75%] lg:w-[240px] lg:h-[533px] relative">
          <Image
            fill
            src={"/assets/images/app/phone2.png"}
            alt="phone image one"
          />
        </div>
      </div>
      <div
        ref={div4Ref}
        onClick={() => scrollToDiv(div5Ref)}
        className="bg-[#6A24FE] text-white h-[100vh] flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px]"
      >
        <div>
          <h1 className=" text-[28px] lg:text-[64px] text-white lg:w-[800px] font-semibold">
            Request Services
          </h1>
          <h2 className=" text-white text-[16px] lg:text-[36px] lg:w-[800px]">
            Avail the services of the church, send in your prayer request and
            also we have made it available for you to give yout tithes and
            offerings domesitcally and internationally
          </h2>
        </div>
        <div className=" w-[70%] h-[75%] lg:w-[240px] lg:h-[533px] relative">
          <Image
            fill
            src={"/assets/images/app/phone3.png"}
            alt="phone image one"
          />
        </div>
      </div>
      <div
        ref={div5Ref}
        onClick={() => scrollToDiv(div6Ref)}
        className=" h-[274px] lg:h-[100vh] relative"
      >
        <Image
          className=" object-cover lg:object-contain"
          fill
          src={"/assets/images/Frame279722.png"}
          alt="final image of app page"
        />
      </div>

      <Reviews />

      <div
        ref={div6Ref}
        className=" h-[200px] lg:h-[400px] bg-white text-black flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px] overflow-hidden"
      >
        <div className=" w-[70%] lg:w-[320px] h-[100%] hidden lg:flex lg:h-[710px] top-[45%] relative">
          <Image
            className=""
            fill
            src={"/assets/images/app/phone1.png"}
            alt="phone image one"
          />
        </div>
        <div>
          <h1 className=" text-[28px] lg:text-[64px] text-black lg:w-[800px] font-semibold">
            Download the app
          </h1>

          <div className="flex flex-col sm:flex-row py-3 gap-4 mt-5">
            <Link
              href="https://play.google.com/store/apps/details?id=com.tktchurch.android"
              target="_blank"
            >
              <button className=" text-black px-3 py-2 flex gap-2 justify-around items-center border-black rounded-lg border-2 bg-gray-100">
                <img
                  width={30}
                  src={"/assets/images/play-store-logo.png"}
                  alt="store"
                />
                <span className="font-semibold">Get on Play Store</span>
              </button>
            </Link>

            <Link
              href="https://apps.apple.com/in/app/tkt-church/id1660405270"
              target="_blank"
            >
              <button className=" text-black px-3 py-2 flex gap-2 justify-around items-center border-black rounded-lg border-2 bg-gray-100">
                <img
                  width={30}
                  src={"/assets/images/apple-store-logo.png"}
                  alt="store"
                />
                <span className="font-semibold">Get on Apple Store</span>
              </button>
            </Link>
          </div>
          <h2 className=" text-black text-[16px] lg:text-[30px] lg:w-[800px] font-light"></h2>
        </div>
      </div>
      {/* <Reviews /> */}
    </div>
  );
}

export default App;
