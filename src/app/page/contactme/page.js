"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { Hind } from "next/font/google";
import { ToastClassName, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations } from "next-intl";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  const t = useTranslations("ContactPage");

  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setState({ ...state, phoneNumber: numericValue });
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      ...state,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        setLoading(false);
        const response = await res.json();
        if (!response.error) {
          clearState();
          toast(response.message);
        } else {
          clearState();
          toast(t('successMessage'));
        }
      })
      .catch((e) => {
        setLoading(false);
        clearState();
        toast(t('errorMessage'));
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
        <div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
          <div className="flex flex-col items-center justify-center  w-full h-full bg-[#223740]/70 backdrop-brightness-50 p-special">
            <div className="text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg hover:translate-y-1 hover:bg-[#223740]">
              <a href="#contact" className="cursor-pointer">
              {t('contactForm')}
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide">
              {t('hireMeTitle')}
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px] ">
              <p className="text-white font-[300] text-cener text-xl">
              {t('introParagraph')}
              </p>
            </div>
          </div>
        </div>

        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div
                  className="flex items-center gap-[15px] pb-2
                "
                >
                  <div>
                    <FaLocationDot size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>{t('letsMeet')}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">{t('location')}</p>
                </div>
              </div>

              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px] pb-2">
                  <div>
                    <FiPhoneCall size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>{t('reachMeAt')}</p>
                    </div>
                  </div>
                </div>
                <p className="text-[#666666]">{t('mobileNumber')}</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row gap-[20px] mt-special">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px] pb-2">
                  <div>
                    <AiFillMail size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>{t('emailAddress')}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">yuta.asakura.se@gmail.com</p>
                </div>
              </div>

              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px] pb-2">
                  <div>
                    <AiOutlineFieldTime size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>{t('activeHours')}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">{t('workingHours')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10"
      >
        <div className="hidden md:block relative w-[50%] xl:w-[50%] h-[550px] md:w-full lg:w-[50%] overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('/customer-care2.png')` }}
          />
          <div className="absolute h-full w-full bg-gradient-to-t from-[#223740] via-[#223740] shadow-inner opacity-70"></div>
          <div className="absolute inset-0 flex flex-col gap-[20px] items-center justify-end text-white shadow-lg p-6">
            <div className="font-semibold text-[24px]">{t('letsConnect')}</div>
            <div>
              <p className="text-center font-[200] text-xl">
              {t('connectParagraph')}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="">
            <p className="text-[30px] text-[#48AFDE]"> {t('contactMe')}</p>
          </div>
          <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
            <div
              className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            >
              <input
                type="text"
                name="name"
                placeholder={t('yourName')}
                required
                onChange={handleChange}
                value={state.name}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="email"
                name="email"
                placeholder={t('yourEmail')}
                required
                onChange={handleChange}
                value={state.email}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            >
              <input
                type="text"
                name="phoneNumber"
                placeholder={t('yourNumber')}
                required
                onChange={handlePhoneChange}
                value={state.phoneNumber}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="text"
                name="subject"
                placeholder={t('yourSubject')}
                required
                onChange={handleChange}
                value={state.subject}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div className={`${hind.className}`}>
              <textarea
                required
                name="message"
                placeholder={t('yourMessage')}
                onChange={handleChange}
                value={state.message}
                className="px-[12px] outline-none h-[180px] w-full rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div>
              {loading && (
                <div className="mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full"></div>
              )}
              <button className="bg-[#48AFDE] w-full sm:w-auto px-[30px] py-[12px] hover:bg-[#223740] transition-colors duration-300 font-semibold rounded-lg text-white">
              {t('sendMessage')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
