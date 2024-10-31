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
import { useTranslations } from "next-intl";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const t = useTranslations("HomePage");

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
        <title>{t("pageTitle")}</title>
        <meta name="description" content={t("pageDescription")} />
        <meta name="keywords" content={t("pageKeywords")} />
        <meta name="author" content="Yuta Asakura" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={t("ogTitle")} />
        <meta property="og:description" content={t("ogDescription")} />
        <meta property="og:image" content="/personal-portofolio-en.png" />
        {/* <meta property="og:image" content="/customer-care4.png" /> */}
        <meta property="og:url" content="https://www.asakurayuta.dev/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@asakurayuta_" />
        <meta name="twitter:title" content={t("twitterTitle")} />
        <meta name="twitter:description" content={t("twitterDescription")} />
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
            <div style={{ transform: "translate(0px, -290px)" }} className='mt-[500px]'>
              <p className="text-[#48AFDE] md:pl-[80px] px-5 font-extrabold text-5xl">
                {t("projectsTitle")}
              </p>
              <p
                className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
              >
                {t("projectsDescription")}
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
