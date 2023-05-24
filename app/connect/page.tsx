import React from "react";
import Image from "next/image";
import Pagination from "./pagination";
import Link from "next/link";

function ConnectPage() {
  return (
    <div className="h-full bg-[#1E1E1E]">
      <div className="rounded-xl lg:p-24">
        <Link href="https://youtu.be/hpwT-Tjuu14" target="_blank">
          <div
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0) 15%, rgba(0,0,0,1)), url("/assets/images/image2.png")`,
            }}
            className="text-white flex flex-col justify-center lg:justify-start items-center gap-6 lg:bg-center bg-cover lg:bg-blend-darken h-[318px] lg:h-[600px]"
          >
            <svg
              className="w-[107px] lg:flex h-[73px] lg:mt-[250px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
            <p className=" text-[28px] lg:text-[54px] tracking-widest">
              WORSHIP NIGHT
            </p>
            <p className=" text-[18px] lg:text-[24px]">29th Sept, 2023</p>
          </div>
        </Link>

        <div className="bg-[#1E1E1E] pt-24 w-full px-4 pb-6 lg:pb-0">
          <h2 className="font-semibold text-[28px] lg:text-6xl text-white">
            Watch more Videos
          </h2>
          <p className="text-white leading-loose text-[18px] lg:text-2xl mt-3 mb-3 lg:mb-0">
            Here are more of our videos!
          </p>
          <br />
          <Pagination />L
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 justify-evenly items-center p-6 lg:p-24 bg-amber-400">
        <div className="text-gray-700 justify-self-start py-2 m-2">
          <div className="flex flex-col flex-wrap  items-start justify-items-start">
            <h3 className="font-semibold text-[32px] lg:text-7xl text-[#0F0F0F] text-start justify-self-start">
              Join E-church
            </h3>
            <div className="font-normal text-[16px] lg:text-2xl mt-6 text-start text-[#0F0F0F]">
              If you can’t get to us physically, we’ve still got you covered.
              Join the E-Church <br /> and be a part of the church virtually.
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 lg:mt-0">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZ2puzI1Ce9Ctu3p6qHFYKyhCKtRCRYQ4zz9jMUYemFpiyIQ/viewform"
                target="_blank"
              >
                <button className="rounded-lg bg-white text-[#0F0F0F] font-[500] h-14 lg:my-8 px-4 lg:px-0 lg:w-64 text-[18px] lg:text-2xl">
                  Join Us
                </button>
              </Link>

              <Link href="https://wa.me/message/QSETEFWQGZHRE1" target="_blank">
                <button className="rounded-lg bg-transparent text-[#000] font-[500] border-2 border-[#000] h-14 px-4 lg:px-0 lg:my-8 lg:w-64 text-[18px] lg:text-2xl">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-gray-700 text-center px-4 py-2 m-2 justify-self-end">
          <div className="mx-4 relative lg:w-[526px] lg:h-[474px] w-[260px] h-[202px]">
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
      </div>

      <div className="bg-white p-6 lg:p-32">
        <div className="flex-col flex justify-items-start items-start">
          <h3 className="text-[32px] lg:text-6xl text-black text-start font-semibold">
            Watch us live on
          </h3>

          <div className="flex flex-row w-[90%] overflow-x-auto lg:gap-35 py-4 lg:py-0 lg:flex-wrap justify-between">
            <div>
              <div className="rounded-lg mx-4 mt-4 lg:mt-20 relative w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]">
                <Image
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  className="rounded-lg font-normal px-4 text-white text-lg bg-[#f4f0f0]"
                  src="/assets/images/image24.png"
                  alt="lg"
                />
              </div>
              <p className="text-center mt-2 text-[16px] lg:text-xl font-normal">
                Thu 09:00pm
              </p>
            </div>

            <div>
              <div className="rounded-lg mx-4 mt-4 lg:mt-20 relative w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]">
                <Image
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  className="rounded-lg font-normal text-white text-lg px-4 bg-[#f4f0f0]"
                  src="/assets/images/image26.png"
                  alt="lg"
                />
              </div>
              <p className="text-center mt-2 text-[16px] lg:text-xl font-normal">
                Daily 04:00pm
              </p>
              <p className="text-center mt-2 text-[16px] lg:text-xl font-normal">
                Mon & Fri 06:00pm
              </p>
            </div>

            <div>
              <div className="rounded-lg mx-4 mt-4 lg:mt-20 relative w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]">
                <Image
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  className="rounded-lg font-normal text-white text-lg px-4 bg-[#f4f0f0]"
                  src="/assets/images/image25.png"
                  alt="lg"
                />
              </div>
              <p className="text-center mt-2 text-[16px] lg:text-xl font-normal">
                Mon - Fri 06:00pm
              </p>
            </div>

            <div>
              <div className="rounded-lg mx-4 mt-4 lg:mt-20 relative w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]">
                <Image
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  className="rounded-lg font-normal text-white text-lg px-4 bg-[#f4f0f0]"
                  src="/assets/images/image27.png"
                  alt="lg"
                />
              </div>
              <p className="text-center mt-2 text-[16px] lg:text-xl font-normal">
                Thu 09:00am
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectPage;
