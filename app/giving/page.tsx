import React from 'react';
import Image from "next/image";

function Giving() {
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
                    src="/assets/images/image4.png"
                    alt=""/>
            </div>

            <div className="bg-[#1E1E1E] p-24" >
                <h2 className="font-semibold text-6xl text-white">
                    Offer to Church
                </h2>

                <p className="text-white leading-loose text-2xl mt-6">
                    The strength of The King's Temple Church can be found in the generosity & commitment of its people. Commit some of what god gave you back to God.
                    <br/>
                    <div>
                        <input type="tel" id="phone"
                               className="bg-[#1E1E1E] mt-6 w-full rounded-xl border border-gray-300 text-[#FFFFFFB2]"
                               placeholder="Enter the amount to offer (in INR)" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default Giving;