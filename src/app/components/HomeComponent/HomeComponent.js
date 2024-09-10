import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hind } from "next/font/google";
import Image from "next/image";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(60deg, #E0F3FD 0 50%, #eef7fb 0 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-white  flex flex-col justify-center col-span-12 md:col-span-5  md:bg-transparent">
              <div className="container m-auto">
                <div className="llg:pl-24 sm:pl-10 pl-0 md:py-0 py-20 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE]   text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    I'm Yuta Asakura
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    Full-Stack Web Developer
                  </h2>
                  <a
                    href="/#portfolio"
                    className={`cursor-pointer inline-block bg-[#47aede] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    Projects
                  </a>
                  <a
                    href="yutafullstackcv.pdf"
                    download="yuta yutafullstackcv.pdf"
                    className={`cursor-pointer ml-10 inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:bg-transparent bg-[#d9eef7] md:pt-[130px] md:col-span-7">
              <div className="container m-auto">
                <Image
                  className=""
                  alt="Full-Stack Developer"
                  src="/pixaryuta.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3">
              <div
                className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl  px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
                style={{ boxShadow: "#48afde -5px 10px 20px 0" }}
              >
                <div className="lg:py-10 md:py-6 sm:py-6 cursor-all-scroll">
                  <Slider {...settings}>
                    <img src='/html.svg' alt='html' className='h-20 w-10'/>
                    <img src='/css.svg' alt='css' className='h-20 w-10'/>
                    <img src='/sass.svg' alt='sass' className='h-20 w-10'/>
                    <img src='/bootstrap.svg' alt='bootstrap' className='h-20 w-10'/>
                    <img src='/tailwind.svg' alt='tailwind' className='h-20 w-10'/>
                    <img src='/javascript.svg' alt='javascript' className='h-20 w-10'/>
                    <img src='/react.svg' alt='react' className='h-20 w-10'/>
                    <img src='/nextjs.svg' alt='next' className='h-20 w-10'/>
                    <img src='/vercels.svg' alt='vercels' className='h-20 w-10'/>
                    <img src='/heroku.svg' alt='heroku' className='h-20 w-10'/>
                    <img src='/netlify.svg' alt='netlify' className='h-20 w-10'/>
                    <img src='/ruby.svg' alt='ruby' className='h-20 w-10'/>
                    <img src='/rails.svg' alt='rails' className='h-20 w-10'/>
                    <img src='/postgres.svg' alt='postgres' className='h-20 w-10'/>
                    <img src='/git.svg' alt='git' className='h-20 w-10'/>
                    <img src='/github.svg' alt='github' className='h-20 w-10'/>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
