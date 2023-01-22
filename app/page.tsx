import React from 'react';
import NextJsCarousel from "./(components)/NextJsCarousel";
import Image from "next/image";

function Home() {

    return (
            <div className="h-full">

                { /* @ts-ignore */}
                {/*<NextJsCarousel/>*/}
                <div className="flex justify-evenly items-center p-24 bg-amber-400">
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
                                className="font-normal text-white text-lg" src="/assets/images/image46.png" alt="lg"/>
                        </div>

                    </div>
                    <div className="text-gray-700 px-4 py-2 m-2">
                        <div className="flex flex-col ">
                            <h3 className="font-semibold text-7xl text-[#0F0F0F] text-start">Explore Us</h3>
                            <div className="font-normal text-2xl mt-6 text-start text-[#0F0F0F]">Our timings and campuses.</div>
                            <div className="font-normal text-2xl mt-6 text-start text-[#0F0F0F]">Hyderabad, Telangana 500003</div>
                            <div className="font-normal text-2xl mt-6 text-start text-[#0F0F0F]">9:30am - 8:00pm</div>
                            <button className="rounded-lg bg-white text-[#0F0F0F] h-14 my-8 w-64 text-2xl">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#6A24FE] p-32">
                    <div className="flex-col flex justify-items-start items-start">
                        <h3 className="text-6xl text-white text-start font-semibold">
                            Our History
                        </h3>
                        <p className="text-white leading-10 text-2xl mt-6">
                            Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse turpis ante. Nulla elit sagittis elementum duis amet id sed ipsum ac. Sed sit faucibus mauris adipiscing. Gravida nibh quam enim amet dolor sed. A eget quis molestie commodo amet nisl.

                            Turpis eget aenean mollis congue diam facilisi suspendisse vel tristique. Elit nullam ut amet in cursus imperdiet mollis odio in. Ridiculus magna metus eleifend magna et ultrices quis in lorem. Dictumst pellentesque nibh malesuada turpis feugiat at viverra purus. Ut malesuada suspendisse elementum sed eu purus amet. Venenatis consectetur nunc ullamcorper tristique egestas convallis id neque neque. Ultrices aliquam nisl accumsan quis cum penatibus et. Eget sollicitudin aliquam eu et tellus cras. Nibh morbi tellus quam sed. Laoreet ac eu euismod porta.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-32">
                    <div className="flex-col flex justify-items-start items-start">
                        <h3 className="text-6xl text-black text-start font-semibold">
                            Meet Our Family
                        </h3>

                        <div className="grid grid-rows-1">
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
                            <p className="text-center mt-6 text-2xl font-semibold">Samuel Patta</p>
                            <p className="text-center mt-2 text-xl font-normal">Bishop</p>
                        </div>
                    </div>
                </div>




            </div>


        );
}

export default Home;
