import React from "react";
import logo from "@/app/assets/Ellipse3.png"
import Image from "next/image";
export default function About()
 {
  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-green-500`}>
        <div  className="w-full h-[600px] bg-cover bg-center"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1507654304600-18d902b183b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D')`
           }}>
      <div className="relative w-[90%] max-w-4xl rounded-xl  shadow-lg">
        {/* Background Image */}
        <div
          className="w-full h-full lg:mt-48 lg:ml-48 mt-11 bg-[#101110] lg:opacity-70 opacity-85 ml-4"
        >
          {/* Content Overlay */}
          <div className="bg-black bg-opacity-50 p-6 sm:p-10 text-white">
            {/* Logo in Top-Right */}
            
              <Image
                src={logo}
                alt="Logo"
                className="absolute top-[21px]  w-12 h-12 sm:w-16 sm:h-16"
              /> <p className='text-[30px] font-bold text-white pl-16 font-Inter'>GreenBite</p>
            

            {/* Title */}
            <h1 className="text-center text-2xl sm:text-4xl font-bold font-inter mb-4">
            About Us
            </h1>

            {/* Subtitle */}
            <h2 className="text-center text-lg sm:text-xl font-semibold font-inter mb-6">
            Cultivating Freshness, Delivering Goodness
            </h2>

            {/* Description */}
            <p className="text-center text-base sm:text-lg font-inter">
            At Greenbite, we&apos;re driven by a simple passion: connecting people with the bounty of nature. We believe everyone deserves access to fresh, organic produce, grown with respect for the land and nurtured with care. Thats why we&apos;ve created a convenient and reliable delivery service that brings the farm straight to your doorstep.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

