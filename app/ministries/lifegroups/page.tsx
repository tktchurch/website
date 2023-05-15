import React from 'react';
import Image from "next/image";

function Lifegroups() {
    return (
        <div>
            <div  
                className=' relative w-[100%] lg:h-[700px] h-[250px]'>
                <Image
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    src="/assets/images/image_3.png"
                    alt=""/>
            </div>

            <div className="bg-[#1E1E1E] px-6 py-12 lg:p-24" >
                <div className=' flex flex-row justify-between'>
                    <h2 className="font-semibold text-[28px] lg:text-6xl text-white">
                        Life Groups
                    </h2>
                    <button className=' lg:w-[300px] px-5 lg:px-0 flex flex-row justify-center items-center '
                        style={{
                            background: "linear-gradient(92.64deg, #FFBE18 -6.43%, #FF9518 108.58%)",
                            borderRadius: "12px"
                        }
                        }
                    >
                        <svg className=' fill-black w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
                        </svg>
                        <p className=' text-[16px] lg:text-[28px] ml-[20px]'>Share</p>
                    </button>
                </div>

                <p className="text-white leading-loose text-[16px] lg:text-2xl mt-6 text-justify">
                    Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse turpis ante. Nulla elit sagittis elementum duis amet id sed ipsum ac. Sed sit faucibus mauris adipiscing. Gravida nibh quam enim amet dolor sed. A eget quis molestie commodo amet nisl.
<br/>
<br/>
                    Turpis eget aenean mollis congue diam facilisi suspendisse vel tristique. Elit nullam ut amet in cursus imperdiet mollis odio in. Ridiculus magna metus eleifend magna et ultrices quis in lorem. Dictumst pellentesque nibh malesuada turpis feugiat at viverra purus. Ut malesuada suspendisse elementum sed eu purus amet. Venenatis consectetur nunc ullamcorper tristique egestas convallis id neque neque. Ultrices aliquam nisl accumsan quis cum penatibus et. Eget sollicitudin aliquam eu et tellus cras. Nibh morbi tellus quam sed. Laoreet ac eu euismod porta.
                </p>
            </div>
        </div>
    );
}

export default Lifegroups;