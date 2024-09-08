"use client";
import React, { useState } from "react";
import { Hind } from "next/font/google";
import { AboutData } from "@/app/data";

import './aboutme.css'

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const HandleNext = () => {
    if (selectedIndex < AboutData.length - 1) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };

  const HandlePrev = () => {
    if (selectedIndex > 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[AboutData.length - 1], AboutData.length - 1);
    }
  };

  return (
    <React.Fragment>
      <div
        id="about-me-component"
        className="bg-[#E0F3FD] pt-[250px] mt-4  pb-[100px] lg:pb-[600px] relative lg:h-[800px]"
      >
        <div className="container m-auto">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px]  text-[#EAF7FC]">
            About Me
          </h1>
          <h1 className="relative font-recoletaBlack text-5xl  text-[#48AFDE] mb-5 -mt-40  md:px-24 px-5">
            About My Self
          </h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24">
            Multi Lingual Web Developer
          </h4>

          <section className="relative flex flex-col lg:flex-row px-5 md:px-24">
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              Before transitioning into tech, I spent 8 years in the
              construction industry. 4 years as a scaffolder and 4 years as a
              construction foreman. These experiences shaped my ability to lead
              teams, solve problems, and focus on delivering high-quality
              results, all of which I now apply to my work as a web developer.
            </p>

            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              Recently, I graduated from Le Wagon Tokyo’s full-time full-stack
              web development bootcamp, where I honed my skills in web
              development. I have a particular interest in JavaScript and React,
              and I am actively seeking a frontend web developer role where I
              can continue growing and contributing to meaningful projects.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              I’m driven by a love for learning and the endless pursuit of
              knowledge, as I believe it brings purpose to everything I do. My
              goal is to create impactful, user-centered projects while
              collaborating with teams to build innovative solutions. I also
              look forward to one day mentoring other aspiring developers. In my
              free time, I enjoy bouldering, skateboarding, bodybuilding, and
              practicing yoga.
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(45deg, #EAF7FC  70%,#48AFDE 30%)",
          width: "100%",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex  flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px sm:mt-0] transform translate-y-[-100px]">
          <div className=" hidden sm:flex w-full sm:w-1/2 lg:w-7/12">
            <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6 mr-0 lg:mr-10">
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#48AFDE -5px  10px 20px 0px" }}
                  className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center  items-center ${
                    selectedIndex == index
                      ? " -translate-y-2 bg-[#476571]"
                      : "hover:bg-[#476571] hover:shadow-xl hover:-translate-y-2 bg-white"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10  lg:w-16 lg:h-16">
                    <img
                      height={100}
                      width={100}
                      src={item.img}
                      alt="internet issues"
                    />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl font-recoletaBold transition-colors duration-500 mt-3
    ${
      selectedIndex === index
        ? "text-white"
        : "text-[#47626D] group-hover:text-white"
    }`}
                  >
                    {item.title}
                  </h4>

                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#476571] flex justify-center items-center font-bold text-white font-recoletaBold text-xl  ${
                      selectedIndex === index
                        ? "opacity-100 rotate-12"
                        : "group-hover:rotate-12"
                    }`}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10">
            <div
            style={{height: '30rem'}}
            className="bg-white  lg:mt-0 mt-10 rounded-xl p-10 xl:p-12 shadow-accent-color relative">
              <section
                className={`fade-left overflow-hidden ${
                  isFaded ? "fade-out" : ""
                }`}
              >
                <p
                  class={`text-[#47626D] ${hind.className}  text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100`}
                >
                  My Tech Skills Are:{" "}
                </p>
                <h2 class="font-recoletaBold text-[#47626D] text-3xl sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100">
                  {mapData?.title}
                </h2>
                <ul
                  class={`${hind.className} font-[300] list-disc text-[#47626D] ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform  opacity-100 undefined undefined`}
                >
                  {mapData?.array?.map((obj) => (
                    <li key={obj} class="mb-2">
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
              <div
                className={`absolute perspective-500 -top-7 sm:top-30 right-0 sm:-right-20 card ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <div className="card-inner">
                  <div className="rounded-2xl cursor-pointer  text-7xl  xl:text-9xl font-recoletaBlack text-white bg-[#47626D]  p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48  transform transition duration-500 transform-preserve -rotate-6 transform-preserve">
                    <span className="text-2xl xl:text-6xl mr-2 sm:mr-3">*</span>
                    {mapData.count}
                  </div>
                </div>
              </div>

              <div className="absolute right-10 -bottom-5 flex">
                <a
                  onClick={HandlePrev}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#47626D]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#47626D]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
