"use client";

// Purpose: The main page of the website, containing the home, portfolio, about, and call-to-action sections

// External Libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Next.js Components
import Image from "next/image";
import Head from "next/head";

// Font configuration
import { Hind } from "next/font/google";

// Translation hook
import { useTranslations } from "next-intl";

// Internal components
import HomeComponent from "./components/HomeComponent/HomeComponent";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";
import WorkHistory from "./components/WorkHistory/WorkHistory";
import CallToAction from "./components/CallToAction/CallToAction";

// Configure the Hind font for consistent text styling
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const t = useTranslations("HomePage"); // Access translations in the "HomePage" namespace

  // Slider settings for infinite auto-scrolling with variable width
  const settings = {
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
      { breakpoint: 1760, settings: { slidesToShow: 6, slidesToScroll: 1 } },
      { breakpoint: 1460, settings: { slidesToShow: 6, slidesToScroll: 1 } },
      { breakpoint: 1290, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1100, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <Head>
        {/* SEO meta tags */}
        <title>{t("pageTitle")}</title>
        <meta name="description" content={t("pageDescription")} />
        <meta name="keywords" content={t("pageKeywords")} />
        <meta name="author" content="Yuta Asakura" />
        <link rel="canonical" href="https://www.asakurayuta.dev/" />

        {/* Open Graph meta tags for social media sharing */}
        <meta
          property="article:author"
          content="https://www.linkedin.com/in/asakurayuta/"
        />
        <meta property="og:title" content={t("ogTitle")} />
        <meta property="og:description" content={t("ogDescription")} />
        <meta property="og:image" content="/public/portfolio-image.png" />
        <meta property="og:url" content="https://www.asakurayuta.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="article:published_time"
          content="2024-9-06T00:00:00+00:00"
        />
        <meta
          property="article:modified_time"
          content="2024-11-06T00:00:00+00:00"
        />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@asakurayuta_" />
        <meta name="twitter:title" content={t("twitterTitle")} />
        <meta name="twitter:description" content={t("twitterDescription")} />
        <meta name="twitter:creator" content="@asakurayuta_" />
        <meta name="twitter:image" content="/public/portfolio-image.png" />

        {/* Mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "author": {
                "@type": "Person",
                "name": "Yuta Asakura",
                "url": "https://www.linkedin.com/in/asakurayuta/"
              },
              "datePublished": "2024-09-06",
              "dateModified": "2024-11-06",
              "headline": "Full-Stack Web Developer Portfolio",
              "description": "Yuta Asakura's portfolio showcasing full-stack web development projects and experience.",
              "mainEntityOfPage": "https://www.asakurayuta.dev/",
              "image": "https://www.asakurayuta.dev/personal-portofolio-en.png"
            }
          `}
        </script>
      </Head>
      <main className="min-h-screen relative">
        <section aria-labelledby="home-section">
          <HomeComponent />
        </section>

        {/* Horizontal slider for tech stack icons */}
        <section
          aria-label="Tech stack carousel"
          className="hide-slider w-[100vw] absolute left-0 lg:py-10 md:py-6 sm:py-6 cursor-all-scroll infinite-icons"
        >
          <Slider {...settings}>
            {/* Icon images for various tech stacks */}
            <Image
              src="/html.svg"
              alt="HTML logo - Markup language for structuring web pages"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/css.svg"
              alt="CSS logo - Styling language for designing web pages"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/sass.svg"
              alt="Sass logo - Preprocessor scripting language that is interpreted into CSS"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/bootstrap.svg"
              alt="Bootstrap logo - Frontend framework for responsive web design"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/tailwind.svg"
              alt="Tailwind CSS logo - Utility-first CSS framework for fast UI development"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/typescript.svg"
              alt="TypeScript logo - Superset of JavaScript for type-safe development"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/javascript.svg"
              alt="JavaScript logo - Programming language for dynamic web content"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/vuejs.svg"
              alt="Vue.js logo - Progressive JavaScript framework for building user interfaces"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/nuxtjs.svg"
              alt="Nuxt.js logo - Framework for creating server-rendered Vue applications"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/pinia.svg"
              alt="Pinia logo - State management library for Vue applications"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/react.svg"
              alt="React logo - JavaScript library for building user interfaces"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/nextjs.svg"
              alt="Next.js logo - React framework for server-rendered applications"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/vercels.svg"
              alt="Vercel logo - Platform for frontend frameworks and static sites"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/heroku.svg"
              alt="Heroku logo - Cloud platform for deploying web applications"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/netlify.svg"
              alt="Netlify logo - Platform for deploying static sites and web applications"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/java.svg"
              alt="Java logo - Object-oriented programming language for web and mobile apps"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/ruby.svg"
              alt="Ruby logo - Programming language for building web applications"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/rails.svg"
              alt="Ruby on Rails logo - Web application framework written in Ruby"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/postgres.svg"
              alt="PostgreSQL logo - Open-source relational database system"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/vite.svg"
              alt="Vite logo - Frontend build tool for fast and efficient development"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/npm.svg"
              alt="NPM logo - Package manager for JavaScript"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/git.svg"
              alt="Git logo - Version control system for tracking changes in source code"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/github.svg"
              alt="GitHub logo - Platform for hosting and collaborating on Git repositories"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/vscode.svg"
              alt="Visual Studio Code logo - Code editor by Microsoft for various languages"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/postman.svg"
              alt="Postman logo - Tool for API development and testing"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
          </Slider>
        </section>

        {/* Portfolio section with gradient background */}
        <section
          className="mt-0 pt-5 -mb-40 bg-[#EEF7FB] md:bg-[linear-gradient(90deg,#EEF7FB_0_50%,#E0F3FD_0_100%)]"
          id="portfolio"
          aria-labelledby="portfolio-section"
        >
          <div className="container m-auto">
            <div
              style={{ transform: "translate(0px, -290px)" }}
              className="md:mt-[500px] mt-[350px]"
            >
              {/* Portfolio title and description */}
              <h2
                id="portfolio-section"
                className="text-[#48AFDE] md:pl-[80px] px-5 font-extrabold text-5xl"
              >
                {t("projectsTitle")}
              </h2>
              <p
                className={`max-w-xl md:pl-[80px] px-5 font-[500] text-[16px] text-[#47626D] leading-8 mt-5 p-5 ${hind.className}`}
              >
                {t("projectsDescription")}
              </p>
            </div>
          </div>
          <div style={{ transform: "translate(0px,-170px)" }}>
            {/* Portfolio project slider */}
            <MySlider />
          </div>
        </section>

        {/* About and call-to-action sections */}
        <section aria-labelledby="about-section">
          <AboutMe />
        </section>
        <section aria-labelledby="work-history-section">
          <WorkHistory />
        </section>
        <section aria-labelledby="cta-button-section">
          <CallToAction />
        </section>
      </main>
    </>
  );
}
