import React from "react";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
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
    </React.Fragment>
  );
}
