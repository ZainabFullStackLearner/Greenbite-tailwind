import Image from "next/image"
import hero from "./assets/papayamain.png"
import { FaSearch } from 'react-icons/fa';
import QuoteCard from "./components/card";
import { FaWhatsapp } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Fresh from "./assets/Rectangle 15.png"
import map from "./assets/Rectangle 13.png"
import sat from "./assets/unsplash_QDq3YliZg48.png"


export default function Home(){
  return (
    <div className="bg-green-500">

      <div className=" w-full ">
        <Image
          src={hero}
          alt="papaya"
          className="pt-3 lg:w-[1400px] w-full lg:h-[539px] lg:px-8 h-[470px]"
        />
        <h1 className="font-Inter font-semibold text-[23px] lg:text-[48px] text-white text-centre absolute top-[83px] lg:top-[130px] lg:ml-[160px]">
          Bite into adventure, get GreenBite delivered.
        </h1>

        <p className="pt-3 lg:px-8 font-Inter font-semibold text-[17px] text-white lg:text-xl absolute top-[153px] lg:top-[240px] lg:ml-[290px] lg:w-[830px]">
          Explore a world of organic flavors and skip the supermarket, embrace the wild so that you can experience fresh and organic goodness delivered to your doorstep.
        </p>
        <div className="flex items-center justify-center left-[50px] lg:min-w-fit py-4 absolute top-[310px] lg:left-[520px]">
          <div className="relative">
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Shop / Explore our products"
              className="lg:w-[110%] pl-10 lg:pr-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[98%] bg-[#010F02]"
            />
          </div>
        </div>
<p className="text-center text-base sm:text-lg font-inter">
  At Greenbite, we&apos;re driven by a simple passion: connecting people with the bounty of nature. We believe everyone deserves access to fresh, organic produce, grown with respect for the land.
</p>
      </div>
      <div className="w-full h-16 md:h-20 bg-cover bg-center mt-28"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}>
        <h2 className="text-white font-Inter font-bold text-xl pt-8 lg:text-[34px] ml-2  lg:ml-28">Our Links</h2>
        <div className="flex flex-row lg:text-[30px] text-[23px] gap-5 ml-28 absolute top-[665px] lg:top-[800px] lg:left-64 lg:gap-11">
          <FaInstagram className="bg-red-600 p-2 text-white rounded-full lg:w-11 lg:h-11 w-8 h-8" />
          <FaLinkedinIn className="bg-blue-600 p-2 text-white rounded-full lg:w-11 lg:h-11 w-8 h-8" />
          <ImFacebook className="bg-blue-500 p-2 text-white rounded-full lg:w-11 lg:h-11 w-8 h-8" />
          <FaWhatsapp className="bg-green-600 p-2 text-white rounded-full lg:w-11 lg:h-11 w-8 h-8" />
        </div>
      </div>
      <div className="bg-green-300 mt-11 rounded-lg lg:flex sm:grid-cols-1 md:grid-cols-2 gap-5 ml-1 mr-1">
        <div className="pt-5 lg:mt-6 ml-5">
          <QuoteCard
            bgColor="bg-green-600"
            quote="Eating organic food is a moral necessity."
            author="Wendell Berry"
            description="Berry, a poet and farmer, saw organic agriculture as not just a dietary choice, but a way of life that respects the land and promotes community."
          />
        </div>
        <div className="mt-11 ml-5">
          <QuoteCard
            bgColor="bg-[#0B6643]"
            quote="Food should be the shortest and simplest distance between a hungry person and a good meal."
            author="-Michael Pollan"
            description="Berry, a poet and farmer, saw organic agriculture as not just a dietary choice, but a way of life that respects the land and promotes community."
          />
        </div>
        <div className="mt-11 ml-5">
          <QuoteCard
            bgColor="bg-[#011701]"
            quote="Eating organic food is a moral necessity."
            author="Wendell Berry"
            description="importance of understanding where our food comes from and choosing options that prioritize quality and sustainability."
          />
        </div>
        <div className="mt-11 ml-5">
          <QuoteCard
            bgColor="bg-green-700"
            quote="A tomato seed, a spoonful of soil, a ray of sunlight, and water from a cloud -- what alchemy is that?"
            author=" -Barbara Kingsolver"
            description="Kingsolver, celebrates the miracle of organic growth and reminds us of the interconnectedness of life."
          />
        </div>
      </div>
      <div className="bg-green-800 lg:h-[500px]">
        <div className="bg-green-800 rounded-lg p-3 lg:flex sm:grid-cols-1 md:grid-cols-3 mt-24 pt-2 gap-8 mb-7">
          <Image src={Fresh} alt="fresh" className="mb-4 lg:ml-44" />
          <h1 className="text-white font-Inter font-bold text-[26px] text-center lg:absolute top-[1700px] lg:left-[280px] bg-green-800">FRESH</h1>
          <Image src={map} alt="map" className="mb-4" />
          <h1 className="text-white font-Inter font-bold text-[26px] text-center lg:absolute top-[1700px] left-[636px] bg-green-800">LOCATION</h1>
          <Image src={sat} alt="farm" className="mb-4" />
          <h1 className="text-white font-Inter font-bold text-[26px] text-center lg:absolute top-[1700px] left-[970px] bg-green-800">SATISFACTION</h1>
        </div>
      </div>
    </div>
  );
}
