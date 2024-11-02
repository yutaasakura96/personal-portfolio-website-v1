'use client';

// Purpose: The main page of the website, containing the home, portfolio, about, and call-to-action sections

// External libraries
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Head from 'next/head';

// Font configuration
import { Hind } from 'next/font/google';

// Translation hook
import { useTranslations } from 'next-intl';

// Internal components
import HomeComponent from './components/HomeComponent/HomeComponent';
import MySlider from './components/SliderCard/MySlider';
import AboutMe from './components/AboutMe/AboutMe';
import CallToAction from './components/CallToAction/CallToAction';

// Configure the Hind font for consistent text styling
const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
  const t = useTranslations('HomePage'); // Access translations in the "HomePage" namespace

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
    cssEase: 'linear',
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
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
        <meta name="keywords" content={t('pageKeywords')} />
        <meta name="author" content="Yuta Asakura" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={t('ogTitle')} />
        <meta property="og:description" content={t('ogDescription')} />
        <meta property="og:image" content="/personal-portofolio-en.png" />
        <meta property="og:url" content="https://www.asakurayuta.dev/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@asakurayuta_" />
        <meta name="twitter:title" content={t('twitterTitle')} />
        <meta name="twitter:description" content={t('twitterDescription')} />
        <meta name="twitter:creator" content="@asakurayuta_" />
        <meta name="twitter:image" content="/personal-portofolio-en.png" />

        {/* Mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              alt="HTML logo - Markup language for web pages"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/css.svg"
              alt="CSS logo - Styling language for web pages"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/sass.svg"
              alt="Sass logo - CSS preprocessor for styling"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/bootstrap.svg"
              alt="Bootstrap logo - Frontend framework for responsive design"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            <Image
              src="/tailwind.svg"
              alt="Tailwind CSS logo - Utility-first CSS framework"
              width={0}
              height={80}
              className="h-20 px-10 infinite-icons"
            />
            {/* More Image components with detailed alt text */}
          </Slider>
        </section>

        {/* Portfolio section with gradient background */}
        <section
          className="mt-0 pt-5 -mb-40"
          id="portfolio"
          aria-labelledby="portfolio-section"
          style={{
            backgroundImage:
              'linear-gradient(-80deg, #E0F3FD 0 50%, #EEF7FB 0% 100%)',
            width: '100%',
          }}
        >
          <div className="container m-auto">
            <div
              style={{ transform: 'translate(0px, -290px)' }}
              className="mt-[500px]"
            >
              {/* Portfolio title and description */}
              <h2 id="portfolio-section" className="text-[#48AFDE] md:pl-[80px] px-5 font-extrabold text-5xl">
                {t('projectsTitle')}
              </h2>
              <p
                className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
              >
                {t('projectsDescription')}
              </p>
            </div>
          </div>
          <div style={{ transform: 'translate(0px,-170px)' }}>
            <MySlider /> {/* Portfolio project slider */}
          </div>
        </section>

        {/* About and call-to-action sections */}
        <section aria-labelledby="about-section">
          <AboutMe />
        </section>
        <section aria-labelledby="cta-button-section">
          <CallToAction />
        </section>
      </main>
    </>
  );
}
