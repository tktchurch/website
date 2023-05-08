import React from 'react';
import Image from "next/image";
import Link from 'next/link';

function Ministries() {
    return (
        <div>
            <section className="bg-[#6A24FE] h-[600px] justify-around items-center grid grid-cols-2 gap-4">
                <div className="flex flex-col p-24 col-start-1 col-end-3 ml-48">
                    <h1 className="text-white font-semibold text-7xl leading-snug">
                        Samuel Patta <br/> Ministries
                    </h1>
                    <button className="rounded-lg bg-white hover:bg-slate-100 text-[#6A24FE] hover:font-semibold h-14 my-8 w-64 text-2xl">
                        Become Member
                    </button>
                </div>
                <div className="col-end-7 col-span-2 mr-36">
                    <div  style={{ position: 'relative',
                        width: '615px', height: '615px' }}>
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

            <section className="bg-[#0F0F0F] p-24 h-full">

                <div
                style={{
                    marginBottom: "56px"
                }}>
                    <h2 className="font-semibold text-6xl text-white w-[40rem]">
                        Explore Ministries
                    </h2>
                    <p className="font-normal text-white text-[28px] my-6 w-[38rem]">
                        We have a variety of different communities for you, have a look!
                    </p>
                </div>

                <div className="rounded-lg flex justify-around items-center p-16  bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="mx-4" style={{
                            position: 'relative',
                            width: '436px', height: '372px' }}>
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
                            <p className="font-semibold text-white text-3xl">
                                Connect with a life group
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-2xl mt-4">
                                Life groups are the life of our church. They are the extension of this church. <br/>  As our Senior Pastor says, “We are not a church with cells but we are a cell-based church”.
                            </p>
                       </div>
                       <Link href={"/ministries/lifegroups"}>
                            <button style={{
                                background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                                borderRadius: "12px"
                            }
                            } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="rounded-lg flex flex-row-reverse justify-around items-center p-16  bg-black my-9">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="mx-4" style={{
                            position: 'relative',
                            width: '436px', height: '372px' }}>
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/20221129_234516_0000-11.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-3xl">
                                Dominion International Bible College
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-2xl mt-4">
                                Bible college is a great way to learn more about the word of God and its teachings.

                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg">
                            Read More
                        </button>

                    </div>
                </div>


                <div className="rounded-lg flex justify-around items-center p-16 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="mx-4" style={{
                            position: 'relative',
                            width: '436px', height: '372px' }}>
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
                            <p className="font-semibold text-white text-3xl">
                                Girl Tribe
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-2xl mt-4">
                                A community of Brave, Strong, and Fierce Women that are committed <br/> to living a fearless and passionate life.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="rounded-lg flex flex-row-reverse justify-around items-center p-16 my-9 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="mx-4" style={{
                            position: 'relative',
                            width: '436px', height: '372px' }}>
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/ECHURCH.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-3xl">
                               E-Family
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-2xl mt-4">
                                Learn about our Holy Bible with a <br/> community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="rounded-lg flex justify-around items-center p-16 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="mx-4" style={{
                            position: 'relative',
                            width: '436px', height: '372px' }}>
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
                            <p className="font-semibold text-white text-3xl">
                                Teen X Youth
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-2xl mt-4">
                                Learn about our Holy Bible with a community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="rounded-lg flex flex-row-reverse justify-around items-center p-16 my-9 bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="mx-4" style={{
                            position: 'relative',
                            width: '436px', height: '372px' }}>
                            <Image
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                className="font-normal text-white text-lg" src="/assets/images/image57.png" alt="lg"/>
                        </div>
                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-3xl">
                                King's Kids
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-2xl mt-4">
                                Learn about our Holy Bible with a <br/> community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg">
                            Read More
                        </button>

                    </div>
                </div>


                <div className="rounded-lg flex justify-around items-center p-16  bg-black">
                    <div className="text-gray-700 text-center px-4 py-2 m-2">
                        <div className="mx-4" style={{
                            position: 'relative',
                            width: '436px', height: '372px' }}>
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
                            <p className="font-semibold text-white text-3xl">
                                Limitless Love Foundation
                            </p>
                            <p  className="font-normal text-[#FFFFFF99] text-2xl mt-4">
                                Learn about our Holy Bible with a  community of enlightened souls.
                            </p>
                        </div>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        } className="rounded-lg font-medium text-black h-14 my-8 w-64 text-lg">
                            Read More
                        </button>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ministries;