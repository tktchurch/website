"use client";
import React from "react";
import HomePageCarousel from "./(components)/HomePageCarousel";
import Image from "next/image";
import HomePageCarouselOurHistory from "./(components)/HomePageCarouselOurHistory";
import Link from "next/link";
import Slider from "./(components)/Slider";


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
      personRole: "assistant Pastor",
    },
    {
      imgSource: "/assets/images/image51.png",
      personName: "Deepak Avinash",
      personRole: "assistant Pastor",
    },
    {
      imgSource: "/assets/images/image50.png",
      personName: "Praveen Gummadi",
      personRole: "assistant Pastor",
    },
    {
      imgSource: "/assets/images/image51.png",
      personName: "Mathew",
      personRole: "assistant Pastor",
    },
  ];

  return (
    <div className="h-full bg-black">
      <HomePageCarousel />
      <Slider />

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
          <p className="text-white text-center leading-7 lg:leading-8 text-[15px] lg:text-xl mt-6">
            After a dramatic encounter with the Holy Spirit, Bishop.Samuel
            Rajkumar Patta who was then pursuing his Charted Accountancy was
            stirred in his heart to committing his life full time, to serve the
            Lord. After working in several organizations, God birthed in him a
            passion and desire to plant churches & raise leaders for the service
            of the Lord. Thus was the Genesis of The King’s Temple.
            <br />
            <br />
            Radical in his thinking, Rev. Samuel R. Patta desired to have The
            King’s Temple church in a Hotel Banquet Hall becoming a reason for
            ridicule and outright persecution from the traditional believers.
            But this did not stop him from pursuing his God-given dream to raise
            up a generation of young men and women who would lay down their
            lives for God’s Kingdom.
            <br />
            <br />
            Bishop Samuel Patta is married to Ps.Merlyn Patta, a powerful woman
            of God and together they form an unbeatable team blessed with two
            children Steven & Deborah who also serve as full-time Staff in The
            King’s Temple. The Church has been labeled “ a Word-based Church “,
            for the continued teaching, that everything happens from and
            according to His Word, and everyone is taught in no uncertain terms,
            not to depend on any human being, but to believe and depend only on
            our Source—God.
            <br />
            <br />
            Today, King's Temple is the fastest growing churches in the world,
            with seven services through the week with an active membership of
            over 10,000 people offline and reaching millions of people online
            every month, our Online church is in every continent and 30+
            countries with more than 2000+ who call the king's temple church as
            their home.
          </p>
        </div>
      S</div>

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
