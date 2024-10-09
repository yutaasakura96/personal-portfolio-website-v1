import React from "react";
import { Hind } from "next/font/google";
import Image from "next/image";
import { useTranslations } from "next-intl";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  const t = useTranslations("HomeComponent");
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
                <div className="header-xs lg:pl-24 sm:pl-10 pl-0 md:py-0 py-20 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE]   text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    {t('greeting')}
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                  {t('name')}
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 mb-10 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                     {t('title')}
                  </h2>
                  <a
                    href="/page/contactme"
                    className={`cursor-pointer
                       bg-[#47aede] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold uppercase md:py-2 lg:py-3 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    {t('hireMe')}
                  </a>
                  <a
                    href={t('resumeFileName')}
                    download={t('resumeFileName')}
                    className={`cursor-pointer ml-10
                       bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold uppercase md:py-2 lg:py-3 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    {t('myResume')}
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
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
