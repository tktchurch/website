import React from "react";
import Image from "next/image";
import Link from "next/link";

function Ministries() {
  return (
    <div className=" overflow-x-hidden w-[100%]">
      <section className="bg-[#6A24FE] h-[500px] lg:px-20 lg:h-[600px] justify-center lg:justify-around items-center flex flex-col lg:flex-row lg:gap-4">
        <div className="flex flex-col w-full lg:p-0 items-center lg:items-start">
          <h1 className="text-white font-semibold text-[28px] lg:w-fit lg:text-[84px] leading-snug">
            Samuel Patta Ministries
          </h1>
          <button className="rounded-lg bg-white hover:bg-slate-100 text-[#6A24FE] hover:font-semibold h-14 my-8 px-8 lg:px-8 lg:w-fit text-[16px] lg:text-[28px]">
            Become Member
          </button>
        </div>
        <div className="">
          <div
            className=" w-[273px] h-[273px] lg:w-[615px] lg:h-[615px]"
            style={{ position: "relative" }}
          >
            <Image
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
              src="/assets/images/img-min-header.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0F0F0F] lg:p-24 h-full">
        <div
          className=" py-8 px-4 lg:pt-0 lg:px-0"
          style={{
            marginBottom: "56px",
          }}
        >
          <h2 className="font-semibold text-[28px] lg:text-[64px] text-white w-[40rem]">
            Explore Ministries
          </h2>
          <p className="font-normal text-white text-[16px] lg:text-[28px] my-6 w-[38rem]">
            We have a variety of communities for you!
          </p>
        </div>

        <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16 bg-black">
          <div className="text-gray-700 text-center lg:px-4 py-2 lg:m-2">
            <div
              className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px]"
              style={{
                position: "relative",
              }}
            >
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="font-normal text-white text-lg"
                src="/assets/images/20221129_150510_0000.png"
                alt="lg"
              />
            </div>
          </div>
          <div className="text-gray-700 px-4 py-2 m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                Connect with a life group
              </p>
              <p className="font-normal text-[#FFFFFF99] text-[16px] lg:text-xl text-justify mt-4">
                <p>
                  Life groups are the life of our church. They are the extension
                  of this church. As our Senior Pastor says, “We are not a
                  church with cells but we are a cell-based church”. This is to
                  emphasize the importance of life groups in our church.{" "}
                </p>

                <p>
                  They help a big church in a big city feel like home. They are
                  small gatherings in your neighborhood where you connect and
                  make new friends, form relationships with other like-minded
                  believers and grow together in the Word and share your ideas
                  with others.
                </p>
                <p>
                  Find a life group and join us for an amazing experience with
                  God.
                </p>
              </p>
            </div>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSceFEdbJsp8iS0hRPKPJANZIeCSE0XuFfaDVejVpjApd9T4bA/viewform"
              target="_blank"
            >
              <button
                style={{
                  background:
                    "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                  borderRadius: "12px",
                }}
                className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]"
              >
                Join us
              </button>
            </Link>
          </div>
        </div>

        <div className="rounded-lg flex flex-col lg:flex-row-reverse justify-around items-center lg:p-16  bg-black my-9">
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="font-normal text-white text-lg"
                src="/assets/images/20221129_234516_0000-11.png"
                alt="lg"
              />
            </div>
          </div>
          <div className="text-gray-700 px-4 py-2 lg:m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                Dominion International Bible College
              </p>
              <p className="font-normal text-[#FFFFFF99] text-[16px] lg:text-lg text-justify mt-4">
                <p>
                  Dominion International Bible College is an initiative of The
                  King’s Temple Church.{" "}
                </p>

                <p>
                  Through intensive study and discussion, students at Bible
                  college can develop a deeper understanding of this ancient
                  text and its impact on our lives.
                </p>

                <p>
                  In addition to offering academic training in biblical studies,
                  We also provide practical training through internships,
                  missions, and other opportunities. This combination of
                  theoretical and practical instruction gives graduates a
                  well-rounded foundation to serve God.
                </p>

                <p>
                  If you are interested in learning more about the Word of God,
                  Consider enrolling in a Bible college today.
                </p>
              </p>
            </div>
            <Link href="http://wa.link/0d7n6n" target="_blank">
              <button
                style={{
                  background:
                    "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                  borderRadius: "12px",
                }}
                className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]"
              >
                Join us
              </button>
            </Link>
          </div>
        </div>

        <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16 bg-black">
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="font-normal text-white text-lg"
                src="/assets/images/image32.png"
                alt="lg"
              />
            </div>
          </div>
          <div className="text-gray-700 px-4 py-2 m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                Girl Tribe
              </p>
              <p className="font-normal text-[#FFFFFF99] text-[16px] lg:text-lg text-justify mt-4">
                <p>
                  Girl Tribe, an initiative of The king’s Temple Church is a
                  community of Brave, Strong, and Fierce Women that are
                  committed to living a fearless and passionate life.
                </p>

                <p>
                  We believe in the power of discovering destiny and creating a
                  world and lifestyle outside the norm.No filters are needed!
                  You can be assured that you will always have a family you can
                  count on.
                </p>

                <p>So find your tribe TODAY!</p>
              </p>
            </div>
            <Link href="http://wa.link/gs27cy" target="_blank">
              <button
                style={{
                  background:
                    "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                  borderRadius: "12px",
                }}
                className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]"
              >
                Join us
              </button>
            </Link>
          </div>
        </div>

        <div className="rounded-lg flex flex-col lg:flex-row-reverse justify-around items-center lg:p-16 my-9 bg-black">
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="font-normal text-white text-lg"
                src="/assets/images/ECHURCH.png"
                alt="lg"
              />
            </div>
          </div>
          <div className="text-gray-700 lg:px-4 py-2 my-2 lg:m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                E-Family
              </p>
              <p className="font-normal text-[#FFFFFF99] text-[16px] lg:text-lg text-justify mt-4">
                <p>
                  E-family is king's temple church online family, Becoming an
                  E-family member is as easy as joining online each week.
                </p>
                <p>
                  The church's online experience incldues a live stream of
                  worship services interactive chat and a team ready to join in
                  prayer.
                </p>
                <p>
                  We believer that there is no distance in spirit, we pray that
                  your live and faith in God will increase through fellowship
                  with us, if you would don't have a church that you can call as
                  home we would love you to be a part of it.
                </p>
              </p>
            </div>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZ2puzI1Ce9Ctu3p6qHFYKyhCKtRCRYQ4zz9jMUYemFpiyIQ/viewform"
              target="_blank"
            >
              <button
                style={{
                  background:
                    "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                  borderRadius: "12px",
                }}
                className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]"
              >
                Join us
              </button>
            </Link>
          </div>
        </div>

        <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16 bg-black">
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="font-normal text-white text-lg"
                src="/assets/images/20221129_150510_0000-31.png"
                alt="lg"
              />
            </div>
          </div>
          <div className="text-gray-700 px-4 py-2 m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                Teen X Youth
              </p>
              <p className="font-normal text-[#FFFFFF99] text-[16px] lg:text-lg text-justify mt-4">
                <p>Welcome to the Teen X Youth community! </p>
                <p>
                  We are a group of young people who come together to grow in
                  our faith, build relationships, and serve others.{" "}
                </p>
                <p>
                  Teen X Youth offers a variety of activities and events,
                  including 1-1 conversations with our Youth leaders, Teen X
                  Youth night which happens once a month, Life group which
                  happens every week, and our annual Youth Conference
                  “AWAKENING” that we run every year.{" "}
                </p>

                <p>
                  Our goal is to provide a supportive and welcoming environment
                  where young people can share their hardships and realize that
                  they aren’t alone -Jesus is right beside them.
                </p>
              </p>
            </div>
            <Link href="http://wa.link/hk38rx" target="_blank">
              <button
                style={{
                  background:
                    "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                  borderRadius: "12px",
                }}
                className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]"
              >
                Join us
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="rounded-lg flex flex-col lg:flex-row-reverse justify-around items-center lg:p-16 my-9 bg-black">
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="font-normal text-white text-lg"
                src="/assets/images/image57.png"
                alt="lg"
              />
            </div>
          </div>
          
          <div className="text-gray-700 lg:px-4 py-2 my-2 lg:m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                King's Kids
              </p>
              <p className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                Learn about our Holy Bible with a <br /> community of
                enlightened souls.
              </p>
            </div>
            <button
              style={{
                background:
                  "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                borderRadius: "12px",
              }}
              className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]"
            >
              Join us
            </button>
          </div>
        </div> */}

        <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16  bg-black">
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "fill",
                  backgroundSize: "",
                }}
                className="font-normal text-white text-lg"
                src="/assets/images/llf.png"
                alt="lg"
              />
            </div>
          </div>
          <div className="text-gray-700 px-4 py-2 m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                Limitless Love Foundation
              </p>
              <p className="font-normal text-[#FFFFFF99] text-[16px] lg:text-lg text-justify mt-4">
                <p>
                  There's nothing like the feeling of giving to someone in need
                  and knowing that you’re making a difference in their life.
                  Limitless Life Foundation is all about using our resources to
                  help those who are in need.
                </p>

                <p>
                  In 2013, we The King’s Temple made up our hearts to start
                  helping and serving the needy in a significant way. We want to
                  make a genuine difference in the communities, villages, towns,
                  and cities where God has opened doors for us.
                </p>

                <p>
                  It is with this heart of loving people as Christ loved us, we
                  have launched the 'LIMITLESS LOVE FOUNDATION". The vision of
                  LLF (Limitless Love Foundation) is to love & empower the
                  underprivileged.
                </p>
              </p>
            </div>
            <Link href="https://wa.link/wvg0yl" target="_blank">
              <button
                style={{
                  background:
                    "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                  borderRadius: "12px",
                }}
                className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]"
              >
                Join us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ministries;
