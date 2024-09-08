import React, { useState, useEffect } from "react";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Index({ id, data, DataArray }) {
  return (
    <React.Fragment>
      <div className="relative">
        <img
          src={data?.images[0]}
          alt="bg photo"
          className="h-[400px]  lg:mt-24 sm:mt-0  object-fill"
          width={0}
          height={20}
          sizes="100vw"
          style={{ width: "100%", backgroundSize: "cover" }}
        />
        <div className="overlay absolute top-0 left-0 h-full z-20 botder-t border-gray-300 bg-black bg-opacity-50"></div>
      </div>

      <div className="absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px] justify-center  items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0  sm:text-left">
        <div className="container m-auto">
          <div className="max-w-[650px] w-[100%] m-auto">
            <p className="opacity-3 sm:text-left text-center font-sans text-[#223740] mt-20 lg:mt-10 md:-mt-10">
              Project Sample
            </p>
            <h1 className="opacity-3 text-[#223740] sm:text-left text-center w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
              {data?.title}
            </h1>
          </div>
        </div>
      </div>

      <div
        className="grid  grid-cols-12  relative space-x-0 lg:space-x-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%",
        }}
      >
        <div className="col-span-12  lg:col-span-8 mb-20 scrol lg:px-0 sm:px-20">
          {data?.images.map((item) => (
            <div
              key={item}
              className="flex justify-center lg:justify-end  items-center"
            >
              <img
                src={item}
                alt="portfolio photos"
                height={100}
                width={800}
                className="mt-20 rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="col-span-12  lg:col-span-4 lg:px-0 sm:px-20">
          <div className="mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1  px-3 sticky top-36 pb-14">
            <h1 className="text-3xl  mb-4 text-[#48AFDE]">{data?.name}</h1>
            <p className="text-[14px] font-sans mb-4 text-[#223740]">
              {data?.des}
            </p>
            <p className="text-[14px] font-sans mb-4 text-[#223740]">
              {" "}
              {data?.des1}
            </p>
            <p id="highlight" className="my-2  text-dark text-[20px] font-sans">
              Tech Stack:
            </p>
            <div className="flex flex-wrap">
              {data.tech.map((tech, index) => (
                <h1
                  key={index}
                  className="mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]"
                >
                  {tech}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
