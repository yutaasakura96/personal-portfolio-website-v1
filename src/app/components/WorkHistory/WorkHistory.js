"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function WorkHistory() {
  const t = useTranslations("WorkHistory");
  const workExperiences = t.raw("experiences");

  return (
    <section
      id="work-history-component"
      className="bg-[##eef7fb] lg:h-100 pt-24 pb-24"
      style={{
        backgroundImage: "linear-gradient(90deg, #eef7fb 0 50%, #E0F3FD 0% 100%)",
        width: "100%",
      }}
      aria-labelledby="work-history-title"
    >
      <div className="container m-auto">
        <h1 id="work-history-title" className="text-5xl text-[#48AFDE] mb-10 md:px-24 px-5">
          {t("title")}
        </h1>
        <div>
          {workExperiences.map((experience, index) => (
            <article
              key={index}
              style={{ boxShadow: "#48AFDE -5px 10px 20px 0px" }}
              className="p-6 lg:p-10 rounded-xl bg-white mb-10 transition-all transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              aria-labelledby={`work-experience-${index}-title`}
            >
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Learn more about ${experience.company}`}
              >
                <div className="flex flex-col mb-4">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={112}
                    height={112}
                    className="w-28 h-28 mr-4 mb-5"
                  />
                  <h2
                    id={`work-experience-${index}-title`}
                    className="text-3xl font-semibold text-[#48AFDE]"
                  >
                    {experience.company}
                  </h2>
                  {experience.position ? (
                    <>
                      <p className="text-lg font-normal">{experience.position}</p>
                      <p className="text-sm font-normal text-[#223740]">
                        {experience.start} - {experience.end}
                      </p>
                      <p className="text-sm font-normal text-[#223740]">
                        {experience.location}
                      </p>
                      <p
                        className={`mt-2 text-[#223740] mr-0 mb-5 lg:mr-4 font-[500] ${hind.className} text-[16px] leading-7`}
                      >
                        {experience.description.join(" ")}
                      </p>
                      <h3>
                        <strong>{experience.techStackTitle}:</strong>
                      </h3>
                      {experience.techStack && experience.techStack.length > 0 && (
                        <p
                          className={`mt-2 text-[#223740] mr-0 mb-5 lg:mr-4 font-[500] ${hind.className} text-[16px] leading-7`}
                        >
                          {experience.techStack.join(", ")}
                        </p>
                      )}
                    </>
                  ) : (
                    experience.positions.map((position, posIndex) => (
                      <div key={posIndex} className="mt-4">
                        <h3 className="text-lg font-normal">{position.title}</h3>
                        <p className="text-sm font-normal text-[#223740]">
                          {position.start} - {position.end}
                        </p>
                        <p
                          className={`mt-2 text-[#223740] mr-0 mb-5 lg:mr-4 font-[500] ${hind.className} text-[16px] leading-7`}
                        >
                          {position.description.join(" ")}
                        </p>
                        {position.techStack && position.techStack.length > 0 && (
                          <p className="mt-4 font-[500]">
                            <strong>Tech Stack: </strong>
                            {position.techStack.join(", ")}
                          </p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
