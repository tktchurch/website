import Image from 'next/image';
import React from 'react';

function App() {
    return (
        <div>
            <div className='bg-[#000] text-white h-[640px] relative flex justify-center items-center overflow-hidden'>
                <h1 className=' absolute top-5 text-[64px]'>Reimagining Church Experience</h1>
                <div className='w-[288px] h-[640px] border-[1.5px] rounded-lg border-white relative top-[50%] left-[5%] -rotate-12'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge21.png"}
                        alt='Phone Image One'
                    />
                </div>
                <div className='w-[288px] h-[640px] border-[1.5px] rounded-lg border-white relative top-[50%] -right-[15%] rotate-12'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge331.png"}
                        alt='Phone Image One'
                    />
                </div>
                <div className='w-[288px] h-[640px] border-[1.5px] rounded-lg border-white relative top-[30%] right-[20%]'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge34-2.png"}
                        alt='Phone Image One'
                    />
                </div>
            </div>
            <div className='bg-[#FEBB24] text-white h-[600px] flex justify-between items-center px-[90px]'>
                <div>
                    <h1 className=' text-[64px] text-black w-[800px] font-semibold'>Watch us live</h1>
                    <h2 className=' text-black text-[36px] w-[800px]'>
                        Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.
                    </h2>
                </div>
                <div className=' w-[240px] h-[533px] relative'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge34-2.png"}
                        alt='phone image one'
                    />
                </div>
            </div>
            <div className='bg-[#FFFFFF] text-white h-[600px] flex justify-between items-center px-[90px]'>
                <div>
                    <h1 className=' text-[56px] text-black w-[800px] font-semibold'>Connect, learn and grow with us</h1>
                    <h2 className=' text-black text-[36px] w-[800px]'>
                        Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.
                    </h2>
                </div>
                <div className=' w-[240px] h-[533px] relative'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge21.png"}
                        alt='phone image one'
                    />
                </div>
            </div>
            <div className='bg-[#6A24FE] text-white h-[600px] flex justify-between items-center px-[90px]'>
                <div>
                    <h1 className=' text-[64px] text-white w-[800px] font-semibold'>Request Services</h1>
                    <h2 className=' text-white text-[36px] w-[800px]'>
                        Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.
                    </h2>
                </div>
                <div className=' w-[240px] h-[533px] relative'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge331.png"}
                        alt='phone image one'
                    />
                </div>
            </div>
        </div>
    );
}

export default App;