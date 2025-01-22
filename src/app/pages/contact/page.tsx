import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import logo from "@/app/assets/Ellipse3.png"

const ContactPage: React.FC = () => {
  return (
    <div className="bg-green-500 min-h-screen justify-center flex flex-col  relative">
    <div
      className=" flex flex-col items-center font-Inter w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:  `url('https://images.unsplash.com/photo-1574484184081-afea8a62f9c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        //  // Replace with your image path
      }}
    >
      {/* Back Button */}
      <div className="absolute top-4 left-4 flex items-center text-white cursor-pointer text-sm sm:text-base">
        <span className="text-lg mr-1">&#8592;</span>
        Back
      </div>

      {/* Header Section */}
      <div className="bg-black bg-opacity-70 text-white rounded-md px-4 py-2 text-center mb-6">
        <h1 className="text-base sm:text-lg font-semibold">
          Feel free to contact us we are <br /> available for you around 24/7
        </h1>
      </div>

      {/* Contact Information Card */}
      <div className="w-full max-w-3xl bg-gray-700 bg-opacity-80 rounded-2xl shadow-lg p-6 sm:p-10">
        <div className=" flex flex-col sm:grid-cols-2 gap-4 items-center">
          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-3xl sm:text-4xl" />
            <p className="text-white font-Inter Font-semibold text-[19px]  lg:text-[21px]">9445676806</p>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-4">
            <FaFacebookF className="text-blue-600 text-3xl sm:text-4xl" />
            <p className="text-white font-Inter Font-semibold text-[19px]  lg:text-[21px]">
              GreenBite@facebook.com
            </p>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4">
            <FaInstagram className="text-pink-500 text-3xl sm:text-4xl" />
            <p className="text-white font-Inter Font-semibold text-[19px]  lg:text-[21px]">
              Green_Bite@instagram.com
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedinIn className="text-blue-700 text-3xl sm:text-4xl" />
            <p className="text-white font-Inter Font-semibold text-[19px]  lg:text-[21px]">
              GreenBite@linkedin.com
            </p>
          </div>

          {/* Gmail */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-red-500 text-3xl sm:text-4xl" />
            <p className="text-white font-Inter Font-semibold text-[19px]  lg:text-[21px]">
              supportgb@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="absolute bottom-4 flex items-center text-white">
        <Image
        src={logo}// Replace with your logo path
        alt="GreenBite Logo"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <p className="ml-2 font-bold text-sm sm:text-base">GreenBite</p>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;