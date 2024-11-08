// Purpose: Home Component to display the home page of the website.
// Core React import
import React from "react";

// Next.js specific imports
import { Hind } from "next/font/google";
import Image from "next/image";

// Translation hook for internationalization
import { useTranslations } from "next-intl";

// Load the Hind font with specified weights and subsets
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  // Initialize translations for home component content
  const t = useTranslations("HomeComponent");

  return (
    <main id="home" role="main" aria-labelledby="page-title">
      <div
        className="home-background"
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
            <section
              className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent"
              aria-labelledby="intro-section"
            >
              <div className="container m-auto">
                <div className="header-xs lg:pl-24 sm:pl-10 pl-0 md:py-0 py-20 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl ${hind.className}`}
                    aria-label={t("greeting")}
                  >
                    {t("greeting")}
                  </p>
                  <h1
                    id="page-title"
                    className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3"
                  >
                    {t("name")}
                  </h1>
                  <h2
                    id="intro-section"
                    className={`text-[#223740] py-2 mb-10 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    {t("title")}
                  </h2>
                  <nav className="action-buttons" aria-label="Primary">
                    <a
                      href="/page/contactme"
                      className={`cursor-pointer bg-[#47aede] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold uppercase md:py-2 lg:py-3 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-2 ${hind.className}`}
                      aria-label={t("hireMe")}
                      role="button"
                    >
                      {t("hireMe")}
                    </a>
                    <a
                      href={t("resumeFileName")}
                      download={t("resumeFileName")}
                      className={`cursor-pointer ml-10 bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold uppercase md:py-2 lg:py-3 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#47aede] hover:show-lg transform hover:translate-y-2 ${hind.className}`}
                      aria-label={`${t("myResume")} (downloads PDF)`}
                      role="button"
                    >
                      {t("myResume")}
                    </a>
                  </nav>
                </div>
              </div>
            </section>
            <section
              className="col-span-12 pt-[50px] md:bg-transparent bg-[#d9eef7] md:pt-[130px] md:col-span-7"
              aria-label="Profile Image"
            >
              <div className="container m-auto">
                <Image
                  className="profile-image"
                  alt={`${t("name")} - ${t("title")}`}
                  src="/pixaryuta.png"
                  decoding="async"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
