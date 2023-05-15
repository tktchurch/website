"use client";
import Image from 'next/image';
import React, {useRef} from 'react';

function App() {
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);

    const scrollToDiv = (ref : any) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div ref={div1Ref} onClick={() => scrollToDiv(div2Ref)} className='bg-[#000] text-white h-[60vh] lg:h-[100vh] relative flex justify-center items-center overflow-hidden'>
                <h1 className=' absolute top-2 left-1/2 transform -translate-x-1/2 lg:left-0 lg:-translate-x-0 text-center w-[100%] lg:top-20 text-[32px] font-semibold lg:font-normal lg:text-[64px]'>Reimagining Church Experience</h1>
                <div className='w-[288px] h-[306px] lg:h-[640px] border-[1.5px] rounded-lg border-white relative top-[28%] mt-12 lg:top-[50%] left-[10%] lg:left-[5%] -rotate-12'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge21.png"}
                        alt='Phone Image One'
                    />
                </div>
                <div className='w-[288px]  h-[306px] lg:h-[640px] border-[1.5px] rounded-lg border-white relative top-[35%] lg:top-[50%] -right-1/4 lg:-right-[15%] rotate-12'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge331.png"}
                        alt='Phone Image One'
                    />
                </div>
                <div className='w-[288px] h-[306px] lg:h-[640px] border-[1.5px] rounded-lg border-white relative top-[25%] lg:top-[30%] right-[33%] lg:right-[20%]'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge34-2.png"}
                        alt='Phone Image One'
                    />
                </div>
            </div>
            <div ref={div2Ref} onClick={() => scrollToDiv(div3Ref)} className='bg-[#FEBB24] text-white h-[100vh] flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px]'>
                <div>
                    <h1 className=' text-[28px] lg:text-[64px] text-black lg:w-[800px] font-semibold'>Watch us live</h1>
                    <h2 className=' text-black text-[16px] lg:text-[36px] lg:w-[800px]'>
                        Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.
                    </h2>
                </div>
                <div className=' w-[70%] h-[75%] lg:w-[240px] lg:h-[533px] relative'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge34-2.png"}
                        alt='phone image one'
                    />
                </div>
            </div>
            <div ref={div3Ref} onClick={() => scrollToDiv(div4Ref)} className='bg-[#FFFFFF] text-white h-[100vh] flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px]'>
                <div>
                    <h1 className=' text-[28px] lg:text-[56px] text-black lg:w-[800px] font-semibold'>Connect, learn and grow with us</h1>
                    <h2 className=' text-black text-[16px] lg:text-[36px] lg:w-[800px]'>
                        Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.
                    </h2>
                </div>
                <div className=' mt-6 w-[70%] h-[75%] lg:w-[240px] lg:h-[533px] relative'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge21.png"}
                        alt='phone image one'
                    />
                </div>
            </div>
            <div ref={div4Ref} onClick={() => scrollToDiv(div5Ref)} className='bg-[#6A24FE] text-white h-[100vh] flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px]'>
                <div>
                    <h1 className=' text-[28px] lg:text-[64px] text-white lg:w-[800px] font-semibold'>Request Services</h1>
                    <h2 className=' text-white text-[16px] lg:text-[36px] lg:w-[800px]'>
                        Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.
                    </h2>
                </div>
                <div className=' w-[70%] h-[75%] lg:w-[240px] lg:h-[533px] relative'>
                    <Image
                        fill
                        src={"/assets/images/AndroidLarge331.png"}
                        alt='phone image one'
                    />
                </div>
            </div>
            <div ref={div5Ref} onClick={() => scrollToDiv(div6Ref)} className=' h-[274px] lg:h-[100vh] relative'>
                <Image 
                    className=' object-cover lg:object-contain'
                    fill
                    src={"/assets/images/Frame279722.png"}
                    alt='final image of app page'
                />
            </div>
            <div ref={div6Ref} className=' h-[200px] lg:h-[400px] bg-white text-black flex flex-col lg:flex-row justify-between items-center px-6 py-6 lg:py-0 lg:px-[90px] overflow-hidden'>
                <div className=' w-[70%] lg:w-[320px] h-[100%] hidden lg:flex lg:h-[710px] top-[35%] relative'>
                    <Image
                        className=''
                        fill
                        src={"/assets/images/AndroidLarge34-2.png"}
                        alt='phone image one'
                    />
                </div>
                <div>
                    <h1 className=' text-[28px] lg:text-[64px] text-black lg:w-[800px] font-semibold'>Download the app</h1>
                    <h2 className=' text-black text-[16px] lg:text-[30px] lg:w-[800px] font-light'>
                        Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default App;

// import { useRef } from 'react';

// const App = () => {
//   const div1Ref = useRef(null);
//   const div2Ref = useRef(null);

//   const scrollToDiv = (ref : any) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <div
//         ref={div1Ref}
//         onClick={() => scrollToDiv(div2Ref)}
//         style={{ height: '100vh', backgroundColor: 'red' }}
//       >
//         Div 1
//       </div>
//       <div
//         ref={div2Ref}
//         onClick={() => scrollToDiv(div1Ref)}
//         style={{ height: '100vh', backgroundColor: 'blue' }}
//       >
//         Div 2
//       </div>
//     </div>
//   );
// };

// export default App;
