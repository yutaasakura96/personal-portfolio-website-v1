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
        backgroundImage:
          "linear-gradient(90deg, #eef7fb 0 50%, #E0F3FD 0% 100%)",
        width: "100%",
      }}
      aria-labelledby="work-history-title"
    >
      <div className="container m-auto">
        <h1
          id="work-history-title"
          className="text-5xl text-[#48AFDE] mb-12 md:px-24 px-5"
        >
          {t("title")}
        </h1>
        <ul className="max-w-6xl mx-auto mb-24 p-6">
          {workExperiences.map((experience, index) => (
            <li
              key={index}
              style={{ boxShadow: "#48AFDE -5px 10px 20px 0px" }}
              className="px-6 py-4 lg:px-10 lg:py-4 rounded-xl bg-white mb-10 transition-all transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
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
                  <div className="flex items-center justify-between">
                    <h2
                      id={`work-experience-${index}-title`}
                      className="text-4xl font-semibold text-[#48AFDE]"
                    >
                      {experience.company}
                    </h2>
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={112}
                      height={112}
                      className="w-28 h-20"
                    />
                  </div>

                  {experience.position ? (
                    <>
                      <p className="text-xl font-recoletaBold text-[#47626D]">
                        {experience.position}
                      </p>
                      <p className="md font-normal text-[#223740]">
                        {experience.start} - {experience.end}
                      </p>
                      <p className="md font-normal text-[#223740]">
                        {experience.hq}
                      </p>
                      <p className="md font-normal mb-2 text-[#223740]">
                        {experience.location}
                      </p>
                      <ul className="list-disc ml-5">
                        {experience.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className={`mt-2 text-[#223740] mb-3 lg:mr-4 font-[500] ${hind.className} text-[16px] leading-7`}
                          >
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <h3 className="font-bold text-xl">
                        {experience.techStackTitle}:
                      </h3>
                      {experience.techStack && (
                        <div className="mt-2 mb-3 text-[#223740] text-[16px] leading-7">
                          {experience.techStack.frontEnd &&
                            experience.techStack.frontEnd.length > 0 && (
                              <p className={`mb-2 ${hind.className}`}>
                                <strong>Frontend:</strong>{" "}
                                {experience.techStack.frontEnd.join(", ")}
                              </p>
                            )}
                          {experience.techStack.backEnd &&
                            experience.techStack.backEnd.length > 0 && (
                              <p className={`mb-2 ${hind.className}`}>
                                <strong>Backend:</strong>{" "}
                                {experience.techStack.backEnd.join(", ")}
                              </p>
                            )}
                          {experience.techStack.tools &&
                            experience.techStack.tools.length > 0 && (
                              <p className={`mb-2 ${hind.className}`}>
                                <strong>Tools:</strong>{" "}
                                {experience.techStack.tools.join(", ")}
                              </p>
                            )}
                          {experience.techStack.deployment &&
                            experience.techStack.deployment.length > 0 && (
                              <p className={`mb-2 ${hind.className}`}>
                                <strong>Deployment:</strong>{" "}
                                {experience.techStack.deployment.join(", ")}
                              </p>
                            )}
                        </div>
                      )}
                    </>
                  ) : (
                    experience.positions.map((position, posIndex) => (
                      <div key={posIndex} className="mt-4">
                        <h3 className="text-xl font-recoletaBold text-[#47626D]">
                          {position.title}
                        </h3>
                        <p className="text-md font-normal text-[#223740]">
                          {position.start} - {position.end}
                        </p>
                        <p className="text-md font-normal mb-3 text-[#223740]">
                          {experience.hq}
                        </p>
                        <ul className="list-disc mb-3 ml-5">
                          {position.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className={`mt-2 text-[#223740] font-[500] ${hind.className} text-[16px] leading-7`}
                            >
                              {desc}
                            </li>
                          ))}
                        </ul>
                        {position.techStack &&
                          position.techStack.length > 0 && (
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
