import React from 'react';
import Image from "next/image";

function Giving() {
    return (
        <div>
            <div 
                className=' relative w-[100%] h-[250px] lg:h-[60vh] max-h-[650px]'>
                <Image
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    src="/assets/images/image3.png"
                    alt=""/>
            </div>

            <div className="bg-[#1E1E1E] px-6 py-12 lg:p-24 2xl:p-60" >
                <h2 className="font-semibold text-[32px] lg:text-6xl text-white">
                    Offer to Church
                </h2>

                <p className="text-gray-300 leading-loose text-[16px] lg:text-[28px] text-justify mt-6">
                    The strength of The King's Temple Church can be found in the generosity & commitment of its people. Commit some of what god gave you back to God.
                    <br/>
                    <div className='flex flex-col lg:flex-row mt-6 lg:mt-14 gap-8'>
                        <input type="tel" id="phone"
                               className="bg-[#1E1E1E] w-full h-[50px] lg:h-[72px] rounded-xl border border-gray-300 text-[#FFFFFFB2] placeholder:text-gray-400 placeholder:text-[16px] lg:placeholder:text-[24px]"
                               placeholder="Enter the amount to offer (in INR)" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                        <button style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        }
                            className=' w-[100%] lg:w-[312px] h-[50px] lg:h-[72px] text-black text-[20px] lg:text-[28px]'
                        >
                            Offer
                        </button>
                    </div>
                </p>

                <h2 className="font-semibold text-[24px] lg:text-[36px] mt-20 text-white">
                    Why offer to church?
                </h2>

                <p className="text-gray-300 leading-loose text-justify text-[16px] lg:text-[28px] mt-6">
                    Turpis eget aenean mollis congue diam facilisi suspendisse vel tristique. Elit nullam ut amet in cursus imperdiet mollis odio in. Ridiculus magna metus eleifend magna et ultrices quis in lorem. Dictumst pellentesque nibh malesuada turpis feugiat at viverra purus. Ut malesuada suspendisse elementum sed eu purus amet. Venenatis consectetur nunc ullamcorper tristique egestas convallis id neque neque. Ultrices aliquam nisl accumsan quis cum penatibus et. Eget sollicitudin aliquam eu et tellus cras. Nibh morbi tellus quam sed. Laoreet ac eu euismod porta.
                </p>
            </div>
        </div>
    );
}

export default Giving;