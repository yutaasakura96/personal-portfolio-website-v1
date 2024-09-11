"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";
import CallToAction from "./components/CallToAction/CallToAction";
import Head from "next/head";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Yuta Asakura | Full-Stack Web Developer Portfolio</title>
        <meta
          name="description"
          content="Yuta Asakura's portfolio showcasing projects and skills in front-end web development, React, Next.js, and JavaScript."
        />
        <meta
          name="keywords"
          content="Yuta Asakura, front-end developer,full-stack developer, web development, JavaScript, React, Next.js, tailwind, portfolio"
        />
        <meta name="author" content="Yuta Asakura" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Yuta Asakura | Full-stack Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Yuta Asakura's projects in web development, specializing in React, Next.js, JavaScript, CSS, SASS, Tailwind, Bootstrap."
        />
        <meta property="og:image" content="/customer-care4.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@asakurayuta_" />
        <meta
          name="twitter:title"
          content="Yuta Asakura | Full-stack Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Yuta Asakura's portfolio showcasing projects and skills in Full-stack web development."
        />
        <meta name="twitter:creator" content="@asakurayuta_" />
        <meta name="twitter:image" content="/customer-care4.png" />

        {/* Mobile-Friendly Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="min-h-screen relative">
        <HomeComponent />
        <div
          className="mt-0 pt-5 -mb-40"
          id="portfolio"
          style={{
            backgroundImage:
              "linear-gradient(-80deg, #E0F3FD 0 50%,  #EEF7FB 0% 100%)",
            width: "100%",
          }}
        >
          <div className="container m-auto mobile-height">
            <p
              className="text-[300px]  text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden opacity-0"
              style={{ transform: "translate(0px,-20px)" }}
            >
              Portfolio
            </p>
            <div className="" style={{ transform: "translate(0px, -290px)" }}>
              <p className="text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl">
                Projects
              </p>
              <p
                className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
              >
                Here’s a look at some of my recent projects. As a full-stack web
                developer, I focus on building clean, responsive, and
                high-performing applications. Each project is a chance to refine
                my skills, whether I’m optimizing performance, enhancing user
                experience, or implementing the latest technologies. From
                concept to deployment, I ensure every detail is carefully
                crafted to deliver seamless functionality and a polished design.
                My passion for coding and problem-solving drives me to keep
                learning and adapting, making sure that every project I work on
                is modern, efficient, and built for real-world impact.
              </p>
            </div>
          </div>
          <div style={{ transform: "translate(0px,-190px)" }}>
            <MySlider />
          </div>
        </div>
        <AboutMe />
        <CallToAction />
      </main>
    </>
  );
}
