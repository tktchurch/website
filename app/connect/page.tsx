import React from 'react';
import Image from "next/image";

function ConnectPage() {
    return (
        <div className="h-full bg-[#1E1E1E]">
                <div className="rounded-xl p-24">
                    <div className="rounded drop-shadow-lg" style={{
                        borderRadius: "25px",
                        position: 'relative',
                        width: '100%', height: '900px' }}>
                        <Image
                            className="rounded drop-shadow-lg"
                            fill
                            sizes="100vw"
                            style={{
                                borderRadius: "25px",
                                objectFit: 'fill',
                            }}
                            src="/assets/images/image2.png"
                            alt=""/>
                    </div>

                    <div className="bg-[#1E1E1E] pt-24" >
                        <h2 className="font-semibold text-6xl text-white">
                            Watch more Videos
                        </h2>
                        <p className="text-white leading-loose text-2xl mt-3">
                            Here are more of our videos!
                        </p>
                    </div>
                </div>


            <div className="grid grid-cols-2 gap-4 justify-evenly items-center p-24 bg-amber-400">

                <div className="text-gray-700 justify-self-start py-2 m-2">
                    <div className="flex flex-col flex-wrap  items-start justify-items-start">
                        <h3 className="font-semibold text-7xl text-[#0F0F0F] text-start justify-self-start">Join E-church</h3>
                        <div className="font-normal text-2xl mt-6 text-start text-[#0F0F0F]">If you can’t get to us physically, we’ve  still got you covered. Join the E-Church <br/> and be a part of the church virtually.</div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="rounded-lg bg-white text-[#0F0F0F] h-14 my-8 w-64 text-2xl">
                                Join Us
                            </button>
                            <button className="rounded-lg bg-transparent text-[#000] border-2 border-[#000] h-14 my-8 w-64 text-2xl">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700 text-center px-4 py-2 m-2 justify-self-end">

                    <div className="mx-4" style={{
                        position: 'relative',
                        width: '526px', height: '474px' }}>
                        <Image
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                            className="font-normal text-white text-lg" src="/assets/images/image46.png" alt="lg"/>
                    </div>

                </div>


            </div>


            <div className="bg-white p-32">
                <div className="flex-col flex justify-items-start items-start">
                    <h3 className="text-6xl text-black text-start font-semibold">
                        Watch us live on
                    </h3>

                    <div className="grid grid-flow-col gap-48 place-content-center  content-center justify-evenly justify-items-center">
                        <div>
                            <div className="rounded-lg mx-4 mt-20" style={{
                                position: 'relative',
                                width: '250px', height: '250px' }}>
                                <Image
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    className="rounded-lg font-normal text-white text-lg" src="/assets/images/image50.png" alt="lg"/>
                            </div>
                            <p className="text-center mt-2 text-xl font-normal">Thu 09:00pm</p>
                        </div>

                        <div>
                            <div className="rounded-lg mx-4 mt-20" style={{
                                position: 'relative',
                                width: '250px', height: '250px' }}>
                                <Image
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    className="rounded-lg font-normal text-white text-lg" src="/assets/images/image50.png" alt="lg"/>
                            </div>
                            <p className="text-center mt-2 text-xl font-normal">Bishop</p>
                        </div>

                        <div>
                            <div className="rounded-lg mx-4 mt-20" style={{
                                position: 'relative',
                                width: '250px', height: '250px' }}>
                                <Image
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    className="rounded-lg font-normal text-white text-lg" src="/assets/images/image50.png" alt="lg"/>
                            </div>
                            <p className="text-center mt-2 text-xl font-normal">Bishop</p>
                        </div>

                        <div>
                            <div className="rounded-lg mx-4 mt-20" style={{
                                position: 'relative',
                                width: '250px', height: '250px' }}>
                                <Image
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    className="rounded-lg font-normal text-white text-lg" src="/assets/images/image50.png" alt="lg"/>
                            </div>
                            <p className="text-center mt-2 text-xl font-normal">Bishop</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ConnectPage;