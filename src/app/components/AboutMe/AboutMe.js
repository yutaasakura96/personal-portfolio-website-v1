"use client"; // Enables client-side rendering for this component

import React, { useState } from "react";
import { Hind } from "next/font/google"; // Google font for consistent styling
import Image from "next/image";
import { useTranslations } from "next-intl"; // Translation hook

import "./aboutme.css";

// Font configuration for the Hind font with multiple weights
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
  // Track if the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);
  // Track if the card is faded
  const [isFaded, setIsFaded] = useState(false);
  // Track the selected card index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Initialize translations with the 'AboutMe' namespace
  const t = useTranslations("AboutMe");
  // Access root-level translations for 'AboutData'
  const tGlobal = useTranslations();
  const aboutData = tGlobal.raw("AboutData");

  // Set initial map data
  const [mapData, setMapData] = useState(aboutData[0]);

  // Resets states and updates displayed map data
  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  // Handles clicking on a card, flips and fades the card, then updates data
  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  // Handles navigating to the next card in the list
  const HandleNext = () => {
    if (selectedIndex < aboutData.length - 1) {
      handleCardClick(aboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(aboutData[0], 0);
    }
  };

  // Handles navigating to the previous card in the list
  const HandlePrev = () => {
    if (selectedIndex > 0) {
      handleCardClick(aboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(aboutData[aboutData.length - 1], aboutData.length - 1);
    }
  };

  return (
    <React.Fragment>
      {/* Main container for the About Me section */}
      <div
        id="about-me-component"
        className="bg-[##eef7fb] pt-[250px] mt-4 pb-[100px] lg:pb-[250px] relative lg:h-100"
        style={{
          backgroundImage:
            "linear-gradient(108.7deg, #E0F3FD 0 45%, #eef7fb 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div>
            {/* Main title and subtitle for About Me */}
            <h1 className="relative font-recoletaBlack text-5xl text-[#48AFDE] mb-5 -mt-40 md:px-24 px-5">
              {t("aboutMeTitle")}
            </h1>
            <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24">
              {t("fullStackDeveloper")}
            </h4>
          </div>
          {/* Description section with image */}
          <section className="relative flex flex-col justify-between lg:flex-row px-5 md:px-24">
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 font-[200] ${hind.className} text-[16px] leading-7`}
            >
              {t("aboutMeDescription")}
            </p>
            <Image
              src="/customer-care4.png"
              alt="yuta"
              width={500}
              height={500}
              className="rounded-xl w-[35%] h-[35%] xl:w-[45%] lg:h-[50%] lg:w-[50%] md:w-full md:h-full sm:w-full sm:h-full xs"
              style={{ objectFit: "cover" }}
              priority
            />
          </section>
        </div>
        {/* Cards section displaying skills */}
        <section className="container flex pt-[250px] flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px sm:mt-0] transform translate-y-[-100px]">
          {/* Grid for displaying skill cards */}
          <div className="hidden sm:flex w-full sm:w-1/2 lg:w-7/12">
            <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6 mr-0 lg:mr-10">
              {aboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#48AFDE -5px  10px 20px 0px" }}
                  className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center items-center ${
                    selectedIndex == index
                      ? " -translate-y-2 bg-[#476571]"
                      : "hover:bg-[#476571] hover:shadow-xl hover:-translate-y-2 bg-white"
                  }`}
                  role="button"
                  tabIndex="0"
                  aria-label={`Skill card for ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(item, index);
                    }
                  }}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
                    <Image
                      height={100}
                      width={100}
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl font-recoletaBold transition-colors duration-500 mt-3 ${
                      selectedIndex === index
                        ? "text-white"
                        : "text-[#47626D] group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>

          {/* Card details section */}
          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10">
            <div
              style={{ height: "30rem" }}
              className="bg-white lg:mt-0 mt-10 rounded-xl p-10 xl:p-12 shadow-accent-color relative"
            >
              <section
                className={`fade-left overflow-hidden ${
                  isFaded ? "fade-out" : ""
                }`}
              >
                {/* Display selected card title and list of skills */}
                <p
                  className={`text-[#47626D] ${hind.className} text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100`}
                >
                  {t("myTechSkills")}
                </p>
                <h2 className="font-recoletaBold text-[#47626D] text-3xl sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100">
                  {mapData?.title}
                </h2>
                <ul
                  className={`${hind.className} font-[300] list-disc text-[#47626D] ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform opacity-100`}
                >
                  {mapData?.skills?.map((skill, index) => (
                    <li key={index} className="mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
              {/* Count card for selected item */}
              <div
                className={`absolute perspective-500 -top-7 sm:top-30 right-0 sm:-right-20 card ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <div className="card-inner">
                  <div className="rounded-2xl cursor-pointer text-7xl xl:text-9xl font-recoletaBlack text-white bg-[#47626D] p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48 transform transition duration-500 transform-preserve -rotate-6">
                    <span className="text-2xl xl:text-6xl mr-2 sm:mr-3">*</span>
                    {mapData.count}
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="absolute right-10 -bottom-5 flex">
                <a
                  onClick={HandlePrev}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg flex justify-center items-center bg-[#47626D]"
                  role="button"
                  tabIndex="0"
                  aria-label="Previous skill card"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      HandlePrev();
                    }
                  }}
                >
                  {/* Previous button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg flex justify-center items-center bg-[#47626D]"
                  role="button"
                  tabIndex="0"
                  aria-label="Next skill card"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      HandleNext();
                    }
                  }}
                >
                  {/* Next button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
