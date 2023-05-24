"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

function Giving() {
    const [tempVar, setTempVar] = useState(0);
    const [currentInputFieldValue, setCurrentInputFieldValue] = useState<string>("")
    const [inputStatus, setInputStatus] = useState(true); // true = input field disabled
    const [isFirstInputHidden, setIsFirstInputHidden] = useState(false)
    const [isSecondInputHidden, setIsSecondInputHidden] = useState(true)

    const donationArray = ["10.00", "25.00", "50.00", "100.00", "250.00", "Custom Amount"]

    useEffect(() => {
        setCurrentInputFieldValue(donationArray[0])
    }, [])

    let handleDonationChange = (newValue : string) => {
        setCurrentInputFieldValue(newValue)
        setInputStatus(true)
        setIsFirstInputHidden(false)
        setIsSecondInputHidden(true)
    }

    useEffect(() => {
        if (currentInputFieldValue === "Custom Amount") {
            setCurrentInputFieldValue("")
            setInputStatus(false)
            setIsFirstInputHidden(!isFirstInputHidden)
            setIsSecondInputHidden(!isSecondInputHidden)
        }
    }, [currentInputFieldValue])
    return (
        <div>
            <div 
                style={{ backgroundImage: `url("/assets/images/image3.png")` }}
                className=' relative w-[100%] h-[250px] lg:h-[70vh] max-h-[650px] text-center items-center justify-center flex'>
                    <h1 className=' text-[28px] font-semibold text-white'>Give Online</h1>
                {/* <Image
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    src="/assets/images/image3.png"
                    alt=""/> */}
            </div>

            <div className="bg-[#fff] px-6 py-12 lg:p-24 2xl:p-60 flex flex-col items-center justify-center" >
                <h2 className=' text-[24px] lg:text-[40px] w-full lg:px-44 text-center font-semibold'>
                    The strength of The King's Temple Church can be found in the generosity & commitment of its people.
                </h2>
                <h3 className=' mt-20 text-[20px] font-semibold text-center'>
                Give online quickly, easily and securely using your mobile number or email address.
                </h3>
                <h2 className=' mt-16 text-[28px] font-semibold'>
                    International
                </h2>
                <div className=' flex flex-row border-[1px] border-gray-400 mt-4'>
                    <div className=' bg-gray-200 px-4 py-2 text-[20px] border-r-[1px] border-gray-400'>$</div>
                    <input hidden={isFirstInputHidden} className=' text-[20px] px-2' disabled={inputStatus} value={currentInputFieldValue} />
                    <input type='number' hidden={isSecondInputHidden} className=' text-[20px] px-2' />
                </div>
                <div className=' mt-4 w-[50%]'>
                    <select onChange={(event) => {handleDonationChange(event.target.value)}} id="donationAmounts" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {donationArray &&
                            donationArray.map((data, index) => (
                                <option key={index} value={data} selected={index === 0 ? true : false}>{index === 5 ? data : `$ ` + data}</option>
                            ))
                        }
                    </select>
                </div>
                <button className=' bg-gray-200 hover:bg-gray-300 px-4 py-2 mt-6 border-[1px] border-gray-400'>
                    Donate Now
                </button>
                <h2 className=' mt-10 text-[18px] font-semibold'>
                    Domestic (India)
                </h2>
                <h2 className=' text-[40px] w-full lg:px-44 text-center font-semibold mt-20'>
                    Why We Give
                </h2>
                <h2 className=' text-[18px] text-gray-700 w-full lg:px-12 text-center mt-8'>
                    We believe in the Biblical principle of tithing. In Malachi 3:10 (NLT) the Bible talks about bringing the first 10% (tithe) of your income into the storehouse (church). Tithes and Offerings received at The King's Temple fund the vision and activities of our church.
                </h2>
                <h2 className=' text-[18px] text-gray-700 w-full lg:px-12 text-center mt-8'>
                    Proverbs 21:26 says ‘the godly love to give’ (TLB), this is seen through the countless volunteer hours offered to run community programs, in those serving in church services and through those who financially support the church and its initiatives.
                </h2>
                {/* <h2 className="font-semibold text-[32px] lg:text-6xl text-white">
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
                </p> */}
            </div>
            <div className=' bg-[#313132] flex flex-col lg:flex-row gap-8 lg:gap-4 justify-center items-center lg:px-20 py-20'>
                <div className=' relative w-[300px] h-[200px] lg:w-[440px] lg:h-[300px]'>
                    <Image
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    src="/assets/images/image100.jpeg"
                    alt=""/>
                </div>
                <div className=' text-white flex flex-col gap-8 px-2 text-center'>
                    <h2 className=' text-[28px] font-semibold'>
                        WHEN YOU GIVE TO THIS MINISTRY:
                    </h2>
                    <ul className='text-left text-[20px] flex flex-col gap-4 list-disc px-8'>
                        <li>
                            You make a difference in the lives of thousands of people all over the world.
                        </li>
                        <li>
                            You make it possible to broadcast The King’s Temple worship experiences across the world and help fund future expansion.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Giving;