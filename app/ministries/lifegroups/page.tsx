import React from 'react';
import Image from "next/image";

function Lifegroups() {
    return (
        <div>
            <div  style={{ position: 'relative',
                width: '100%', height: '700px' }}>
                <Image
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    src="/assets/images/image3.png"
                    alt=""/>
            </div>

            <div className="bg-[#1E1E1E] p-24" >
                <h2 className="font-semibold text-6xl text-white">
                    Life Groups
                </h2>

                <p className="text-white leading-loose text-2xl mt-6">
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