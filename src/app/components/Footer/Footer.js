import React from "react";
import { useTranslations } from "next-intl";

// Purpose: Footer component to display social media links and footer text
export default function Footer() {
  // Initialize translations for footer content
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#232323] sm:px-6 lg:space-y-16 lg:px-8">
      <div className="xl:max-w-6xl 2xl:max-w-7xl px-10 md:px-20 xl:px-44 mx-auto sm:pt-10 overflow-hidden">

        {/* Section Title for 'Follow Me' text */}
        <p className="text-center pt-2 block lg:block font-bold text-[#48AFDE] text-2xl uppercase mb-5">
          {t("followMe")}
        </p>

        {/* Social Links Container */}
        <div className="flex flex-wrap justify-between items-center">

          {/* Twitter Link */}
          <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
            <a
              className="group flex flex-col items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/asakurayuta_"
              aria-label="Follow Yuta Asakura on Twitter"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                 <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
              <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                Twitter
              </h5>
            </a>
          </div>

          {/* GitHub Link */}
          <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
            <a
              className="group flex flex-col items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/yutaasakura96"
              aria-label="View Yuta Asakura's GitHub Profile"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                className="w-6 h-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                GitHub
              </h5>
            </a>
          </div>

          {/* Wantedly Link */}
          <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
            <a
              className="group flex flex-col items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.wantedly.com/id/yutaasakura"
              aria-label="Follow Yuta Asakura on Wantedly"
            >
              <svg
                role="img"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                height="100"
                width="100"
                className="w-6 h-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                aria-hidden="true"
                fill="currentColor"
              >
               <path
                  d="M76.8875 60.645833333333336c-0.7125000000000001 -0.4625 -2.741666666666667 -3.1833333333333336 -8.358333333333333 -16.59166666666667a38.300000000000004 38.300000000000004 0 0 0 -0.9875 -2.191666666666667l-1.1416666666666668 -2.766666666666667 -9.841666666666669 -23.758333333333336H36.875l9.841666666666669 23.758333333333336 9.841666666666669 23.775000000000002 9.0875 21.945833333333336a0.8166666666666668 0.8166666666666668 0 0 0 1.5083333333333333 0l9.887500000000001 -23.675000000000004a0.41666666666666674 0.41666666666666674 0 0 0 -0.15416666666666667 -0.49583333333333335zm-36.875 0c-0.7125000000000001 -0.4625 -2.741666666666667 -3.1833333333333336 -8.358333333333333 -16.59166666666667a37.37916666666667 37.37916666666667 0 0 0 -0.9833333333333334 -2.1875000000000004l-1.1500000000000001 -2.7708333333333335 -9.833333333333334 -23.758333333333336H0l9.841666666666669 23.758333333333336 9.841666666666669 23.775000000000002 9.0875 21.945833333333336a0.8166666666666668 0.8166666666666668 0 0 0 1.5083333333333333 0l9.891666666666667 -23.675000000000004a0.4083333333333334 0.4083333333333334 0 0 0 -0.15833333333333335 -0.49583333333333335ZM100 26.562500000000004a11.879166666666668 11.879166666666668 0 0 1 -11.879166666666668 11.883333333333333 11.879166666666668 11.879166666666668 0 0 1 -11.883333333333333 -11.883333333333333 11.879166666666668 11.879166666666668 0 0 1 11.883333333333333 -11.879166666666668A11.879166666666668 11.879166666666668 0 0 1 100 26.562500000000004Z"
                  strokeWidth="1"
                ></path>
              </svg>
              <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                Wantedly
              </h5>
            </a>
          </div>

          {/* LinkedIn Link */}
          <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
            <a
              className="group flex flex-col items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/yuta-asakura/"
              aria-label="Connect with Yuta Asakura on LinkedIn"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
              <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                LinkedIn
              </h5>
            </a>
          </div>

          {/* Instagram Link */}
          <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
            <a
              className="group flex flex-col items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/yutanasia/"
              aria-label="Follow Yuta Asakura on Instagram"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
              <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                Instagram
              </h5>
            </a>
          </div>

          {/* Gmail Link */}
          <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
            <a
              className="group flex flex-col items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:yuta.asakura.se@gmail.com"
              aria-label="Send an email to Yuta Asakura"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                Gmail
              </h5>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text with Dynamic Year */}
      <p className="text-white text-center pt-2 pb-2" style={{ marginTop: 0 }}>
        © {new Date().getFullYear()}. {t("footerText")}
      </p>
    </footer>
  );
}
