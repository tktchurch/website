import React from 'react';
import Image from "next/image";
import Link from 'next/link';

function Ministries() {
    return (
        <div className=' overflow-x-hidden w-[100%]'>
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
                        className=' w-[273px] h-[273px] lg:w-[615px] lg:h-[615px]'
                      style={{ position: 'relative'}}>
                        <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'contain',
                                }}
                                src="/assets/images/img-min-header.png"
                              alt=""/>
                    </div>
                </div>
            </section>

            <section className="bg-[#0F0F0F] lg:p-24 h-full">

                <div
                className=' py-8 px-4 lg:pt-0 lg:px-0'
                style={{
                    marginBottom: "56px"
                }}>
                    <h2 className="font-semibold text-[28px] lg:text-[64px] text-white w-[40rem]">
                        Explore Ministries
                    </h2>
                    <p className="font-normal text-white text-[16px] lg:text-[28px] my-6 w-[38rem]">
                        We have a variety of different communities for you, have a look!
                    </p>
                </div>

                <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16 bg-black">
                    <div className="text-gray-700 text-center lg:px-4 py-2 lg:m-2">
                        <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px]" style={{
                            position: 'relative'}}>
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/20221129_150510_0000.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                                Connect with a life group
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                                Life groups are the life of our church. They are the extension of this church. <br/>  As our Senior Pastor says, “We are not a church with cells but we are a cell-based church”.
                            </p>
                       </div>
                       <Link href={"/ministries/lifegroups"}>
                            <button style={{
                                background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                                borderRadius: "12px"
                            }
                            } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]">
                                Read More
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
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/20221129_234516_0000-11.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 lg:m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                                Dominion International Bible College
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                                Bible college is a great way to learn more about the word of God and its teachings.

                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]">
                            Read More
                        </button>

                    </div>
                </div>


                <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/image32.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                                Girl Tribe
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                                A community of Brave, Strong, and Fierce Women that are committed <br/> to living a fearless and passionate life.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="rounded-lg flex flex-col lg:flex-row-reverse justify-around items-center lg:p-16 my-9 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/ECHURCH.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 lg:px-4 py-2 my-2 lg:m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                               E-Family
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                                Learn about our Holy Bible with a community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/20221129_150510_0000-31.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                                Teen X Youth
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                                Learn about our Holy Bible with a community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="rounded-lg flex flex-col lg:flex-row-reverse justify-around items-center lg:p-16 my-9 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/image57.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 lg:px-4 py-2 my-2 lg:m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                                King's Kids
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                                Learn about our Holy Bible with a <br/> community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]">
                            Read More
                        </button>

                    </div>
                </div>


                <div className="rounded-lg flex flex-col lg:flex-row justify-around items-center lg:p-16  bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="lg:mx-4 w-[320px] h-[280px] lg:w-[436px] lg:h-[372px] relative">
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/image56.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-[28px] lg:text-[36px]">
                                Limitless Love Foundation
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-[16px] lg:text-[32px] text-justify mt-4">
                                Learn about our Holy Bible with a  community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg lg:text-[28px]">
                            Read More
                        </button>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ministries;