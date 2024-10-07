"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AboutMe from "./components/AboutMe/AboutMe";
import CallToAction from "./components/CallToAction/CallToAction";
import Head from "next/head";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
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
        <div className="hide-slider w-[100vw] absolute left-0 lg:py-10 md:py-6 sm:py-6 cursor-all-scroll infinite-icons">
          <Slider {...settings}>
            <Image
              src="/html.svg"
              alt="html"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons "
            />
            <Image
              src="/css.svg"
              alt="css"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons "
            />
            <Image
              src="/sass.svg"
              alt="sass"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/bootstrap.svg"
              alt="bootstrap"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/tailwind.svg"
              alt="tailwind"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/javascript.svg"
              alt="javascript"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/react.svg"
              alt="react"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/nextjs.svg"
              alt="next"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/vercels.svg"
              alt="vercels"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/heroku.svg"
              alt="heroku"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/netlify.svg"
              alt="netlify"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/ruby.svg"
              alt="ruby"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/rails.svg"
              alt="rails"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/postgres.svg"
              alt="postgres"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/git.svg"
              alt="git"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/github.svg"
              alt="github"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
          </Slider>
        </div>
        <div
          className="mt-0 pt-5 -mb-40"
          id="portfolio"
          style={{
            backgroundImage:
              "linear-gradient(-80deg, #E0F3FD 0 50%,  #EEF7FB 0% 100%)",
            width: "100%",
          }}
        >
          <div className="container m-auto">
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
          <div style={{ transform: "translate(0px,-170px)" }}>
            <MySlider />
          </div>
        </div>
        <AboutMe />
        <CallToAction />
      </main>
    </>
  );
}
