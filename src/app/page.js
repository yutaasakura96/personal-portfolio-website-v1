"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";
import CallToAction from "./components/CallToAction/CallToAction";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div
        id="portfolio"
        className="mt-0 pt-5 -mb-40"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #eef7fb 0 45%, white 0% 100%)",
          width: "100%",
        }}
      >
        <div className='container m-auto'>
          <p className='text-[300px] text-[#f7fbfd] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden'
          style={{transform:"translate(0px, -20px)"}}
          >portfolio</p>
          <div style={{transform:"translate(0px, -250px)"}}>
            <p className='text-[#48afde] md:pl-[80px] px-5 font-extrabold text-5xl'>Recent Works</p>
            <p className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#47626d] leading-8 mt-5 ${hind.className}`}>Here’s a look at some of my recent projects. As a full-stack web developer, I focus on building clean, responsive, and high-performing applications. Each project is a chance to refine my skills, whether I’m optimizing performance, enhancing user experience, or implementing the latest technologies. From concept to deployment, I ensure every detail is carefully crafted to deliver seamless functionality and a polished design. My passion for coding and problem-solving drives me to keep learning and adapting, making sure that every project I work on is modern, efficient, and built for real-world impact.</p>
          </div>
        <div style={{transform:"translate(0px, -170px)"}}>
          <MySlider/>
        </div>
        </div>
        <AboutMe/>
        <CallToAction/>
      </div>
    </main>
  );
}
