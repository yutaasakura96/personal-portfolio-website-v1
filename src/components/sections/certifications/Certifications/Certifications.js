"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Certifications = () => {
  const t = useTranslations("HomePage");
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section
      id="certifications-component"
      className="pt-24 pb-12 relative lg:h-100 bg-[#E0F3FD] md:bg-[linear-gradient(90deg,#E0F3FD_0_50%,#EEF7FB_0_100%)]"
      aria-labelledby="certifications-title"
    >
      <div className="container m-auto">
        <h1 id="certifications-title" className="text-5xl text-[#48AFDE] mb-12 md:px-24 px-5">
          {t("certificationsTitle")}
        </h1>
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AWS Cloud Practitioner */}
            <div
              style={{ boxShadow: "#48AFDE -5px 10px 20px 0px" }}
              className="px-6 py-4 lg:px-10 lg:py-4 rounded-xl bg-white transition-all transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <button
                    onClick={() => openModal("/images/certifications/aws-ccp.png")}
                    className="transition-transform hover:scale-105 focus:outline-none"
                    aria-label="View full size AWS Cloud Practitioner certification"
                  >
                    <Image
                      src="/images/certifications/aws-ccp.png"
                      alt="AWS Cloud Practitioner Badge"
                      width={200}
                      height={120}
                      className="object-contain"
                    />
                  </button>
                </div>
                <h2 className="text-4xl font-semibold text-[#48AFDE] mb-4">
                  AWS Cloud Practitioner
                </h2>
                <p className={`text-[#223740] text-center ${hind.className} text-[16px] leading-7`}>
                  {t("awsCloudPractitionerDescription")}
                </p>
              </div>
            </div>

            {/* AWS AI Practitioner */}
            <div
              style={{ boxShadow: "#48AFDE -5px 10px 20px 0px" }}
              className="px-6 py-4 lg:px-10 lg:py-4 rounded-xl bg-white transition-all transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <button
                    onClick={() => openModal("/images/certifications/aws-aip.png")}
                    className="transition-transform hover:scale-105 focus:outline-none"
                    aria-label="View full size AWS AI Practitioner certification"
                  >
                    <Image
                      src="/images/certifications/aws-aip.png"
                      alt="AWS AI Practitioner Badge"
                      width={200}
                      height={120}
                      className="object-contain"
                    />
                  </button>
                </div>
                <h2 className="text-4xl font-semibold text-[#48AFDE] mb-4">AWS AI Practitioner</h2>
                <p className={`text-[#223740] text-center ${hind.className} text-[16px] leading-7`}>
                  {t("awsAIPractitionerDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-4xl hover:text-gray-300 focus:outline-none"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={modalImage}
                alt="Full size certification"
                width={800}
                height={480}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
