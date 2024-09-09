import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";

export default function page() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
        <div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
          <div className="flex flex-col items-center justify-center  w-full h-full bg-[#223740]/70 backdrop-brightness-50">
            <div className="text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg">
              <a href="#contact" className="cursor-pointer">
                Contact Form
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide">
                Hire Me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px] ">
              <p className="text-white font-[300] text-cener text-xl">
                Looking for a reliable, professional full-stack web developer
                for your website or web application projects? Or perhaps you’d
                like to connect and collaborate on an exciting project? Feel
                free to reach out and let me know how I can assist you. I’d love
                to help!
              </p>
            </div>
          </div>
        </div>

        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px] pb-2
                ">
                  <div>
                    <FaLocationDot size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Let's Meet!</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Kanagawa, Kawasaki City</p>
                </div>
              </div>

              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px] pb-2">
                  <div>
                    <FiPhoneCall size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Reach Me At</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Mobile</p>
                </div>
                <div>
                  <p className="text-[#666666]">070-1481-7160</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px] pb-2">
                  <div>
                    <AiFillMail size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>E-Mail Address</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">yuta.asakura.se@gmail.com</p>
                </div>
              </div>

              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px] pb-2">
                  <div>
                    <AiOutlineFieldTime size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Active Hours</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Mon - Fri : 9am - 7pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
