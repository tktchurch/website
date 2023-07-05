"use client"
import React, { useState } from "react";
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

function Giving() {
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  const handleClick = () => {
    setIsLoading(true); // Set loading state to true

    setTimeout(() => {
      // Simulate a 3-second delay
      setIsLoading(false); // Set loading state back to false
      // Perform the redirect to another page here
      window.location.href = "https://give.kingstemple.in"; // Replace with the desired URL
    }, 3000);
  };

  return (
    <div className="bg-black h-full text-white py-12 lg:py-24 2xl:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center font-semibold mb-8">
          Give Online
        </h2>

        <div className="w-full max-w-3xl mx-auto">
          <div className="text-gray-300">
            <p className="text-base lg:text-lg xl:text-xl text-center mb-8">
              We believe in the Biblical principle of tithing. In Malachi 3:10 (NLT), the Bible talks about bringing the first 10% (tithe) of your income into the storehouse (church). Tithes and Offerings received at The King's Temple fund the vision and activities of our church.
            </p>
            <p className="text-base lg:text-lg xl:text-xl text-center mb-8">
              Proverbs 21:26 says 'the godly love to give' (TLB). This is seen through the countless volunteer hours offered to run community programs, in those serving in church services, and through those who financially support the church and its initiatives.
            </p>
          </div>
          <button
            className="bg-white text-black w-full px-6 py-3 mt-8 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-colors duration-300"
            onClick={handleClick} // Attach the click event handler
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Donate Now"
            )}
          </button>
          <p className="text-gray-300 text-sm text-center mt-4">
            Your payment security is our priority. You will be redirected to a trusted and verified secure page for a seamless and worry-free payment experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Giving;