"use client";
// Purpose: Settings and configuration for the slider component.

// External Libraries
import React from "react";
import Slider from "react-slick";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import SliderCard from "./SliderCard";

// Hooks
import { useTranslations } from "next-intl";

export default function MySlider() {
  // Initialize translations and get data from translation files
  const tGlobal = useTranslations();
  const dataArray = tGlobal.raw("DataArray");

  // Core slider configuration
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    centerMode: true,
    centerPadding: "400px", // Default padding for largest screens
    dots: true,

    // Responsive breakpoints for different screen sizes
    responsive: [
      // Desktop breakpoints (1700px - 1150px)
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "400px",
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "350px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "170px",
        },
      },
      // Tablet breakpoints (1024px - 780px)
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "230px",
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "170px",
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "130px",
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "170px",
        },
      },
      // Mobile breakpoint
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false, // Disable center mode for mobile
          centerPadding: "0",
        },
      },
    ],
  };

  // Render slider with mapped data items
  return (
    <Slider {...settings}>
      {dataArray.map((item, index) => (
        <div key={index} className="my-slider">
          <SliderCard item={item} index={index} />
        </div>
      ))}
    </Slider>
  );
}
