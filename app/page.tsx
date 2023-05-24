"use client";
import React from "react";
import HomePageCarousel from "./(components)/HomePageCarousel";
import Image from "next/image";
import HomePageCarouselOurHistory from "./(components)/HomePageCarouselOurHistory";
import Link from "next/link";

function Home() {
  const meetOurFamilyImgSources = [
    //add meet our family data here
    {
      imgSource: "/assets/images/image50.png",
      personName: "Samuel Raj Kumar Patta",
      personRole: "Senior Pastors",
    },
    {
      imgSource: "/assets/images/image51.png",
      personName: "Merlyn Patta",
      personRole: "senior pastors",
    },
    {
      imgSource: "/assets/images/image50.png",
      personName: "Steven Patta",
      personRole: "Youth Director",
    },
    {
      imgSource: "/assets/images/image51.png",
      personName: "Deborah patta",
      personRole: "Creative director ",
    },
    {
      imgSource: "/assets/images/image50.png",
      personName: "Samuel Vishwanath",
      personRole: "Assitant Pastor",
    },
    {
      imgSource: "/assets/images/image51.png",
      personName: "Deepak Avinash",
      personRole: "Assitant Pastor",
    },
    {
      imgSource: "/assets/images/image50.png",
      personName: "Praveen Gummadi",
      personRole: "Assitant Pastor",
    },
    {
      imgSource: "/assets/images/image51.png",
      personName: "Mathew",
      personRole: "Assitant Pastor",
    },
  ];

  return (
    <div className="h-full bg-black">
      <HomePageCarousel />
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
            <div className="font-normal text-[15px] lg:text-2xl mt-6 text-start text-[#0F0F0F]">
              Sunday morning extension service
            </div>
            <div className="font-normal w-[90vw] text-[15px] lg:text-2xl mt-6 text-start text-[#0F0F0F] flex flex-row justify-center lg:w-fit lg:justify-start">
              <svg
                className=" w-[24px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              Kukatpally
            </div>
            <div className="font-normal text-[15px] lg:text-2xl mt-6 text-start text-[#0F0F0F] flex flex-row w-[90vw] lg:w-fit justify-center lg:justify-start">
              <svg
                className=" w-[24px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              10.30 Am
            </div>
            <Link
              href="/connect"
              className="rounded-lg mt-8 w-[14rem] bg-white hover:bg-slate-100 text-[#0F0F0F] h-14 text-[16px] lg:text-2xl px-6 lg:pt-4 lg:pb-12"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#6A24FE] lg:px-32 px-6 py-16">
        <div className="flex-col flex justify-items-start items-start">
          <h3 className=" text-[28px] lg:text-6xl text-white text-start font-semibold">
            Our History
          </h3>
          <HomePageCarouselOurHistory />
          <div className=" mt-8 w-full h-[307px] hidden lg:flex flex-row">
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/image53.png"}
                alt="Our History Image One"
              />
            </div>
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/image53_1.png"}
                alt="Our History Image Two"
              />
            </div>
            <div className="w-[33%] h-full relative">
              <Image
                fill
                className=" object-cover"
                src={"/assets/images/image53_2.png"}
                alt="Our History Image Three"
              />
            </div>
          </div>
          <p className="text-white leading-7 lg:leading-8 text-[15px] text-justify lg:text-xl mt-6">
            &nbsp;&nbsp;&nbsp;&nbsp;After a dramatic encounter with the
            Holy Spirit, Bishop.Samuel Rajkumar Patta who was then pursuing his
            Charted Accountancy was stirred in his heart to committing his life
            full time, to serve the Lord. After working in several
            organizations, God birthed in him a passion and desire to plant
            churches & raise leaders for the service of the Lord. Thus was the
            Genesis of The King’s Temple.
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Radical in his thinking, Rev. Samuel R. Patta desired to have The
            King’s Temple church in a Hotel Banquet Hall becoming a reason for
            ridicule and outright persecution from the traditional believers.
            But this did not stop him from pursuing his God-given dream to raise
            up a generation of young men and women who would lay down their
            lives for God’s Kingdom.
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Rev.Samuel Patta is married to Ps.Merlyn Patta, a powerful woman of
            God and together they form an unbeatable team blessed with two
            children Steven & Deborah who also serve as full-time Staff in The
            King’s Temple. The Church has been labeled “ a Word-based Church “,
            for the continued teaching, that everything happens from and
            according to His Word, and everyone is taught in no uncertain terms,
            not to depend on any human being, but to believe and depend only on
            our Source—God.
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Today, King's Temple is the fastest growing churches in the world,
            with seven services through the week with an active membership of
            over 10,000 people offline and reaching millions of people online
            every month, our Online church is in every continent and 30+
            countries with more than 2000+ who call the king's temple church as
            their home.
          </p>
        </div>
      </div>

      <div className="bg-white py-12 px-2 lg:p-32 max-w-[100vw]">
        <div className="flex-col flex items-center justify-center lg:justify-items-start lg:items-start">
          <h3 className=" text-2xl lg:text-6xl xl:ml-14 text-black text-start font-semibold">
            Meet Our Family
          </h3>

          <div className="flex flex-row lg:flex-row flex-wrap items-center gap-y-8 gap-16 lg:gap-12 mt-12 justify-center">
            {meetOurFamilyImgSources &&
              meetOurFamilyImgSources.map((data, index) => (
                <div key={index} className="flex flex-col">
                  <div
                    className="rounded-lg lg:w-[250px] lg:h-[250px] w-[100px] h-[100px]"
                    style={{
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-lg font-normal text-white text-lg"
                      src={data.imgSource}
                      alt="lg"
                    />
                  </div>
                  <p className="text-center lg:mt-6 text-[15px] lg:text-2xl font-semibold">
                    {data.personName}
                  </p>
                  <p className="text-center lg:mt-2 text-sm lg:text-xl font-normal">
                    {data.personRole}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
