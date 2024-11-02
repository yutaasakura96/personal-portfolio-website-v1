"use client"; // Enables client-side rendering for this component

// React core imports
import React, { useEffect, useState } from "react";

// Next.js specific imports
import { usePathname } from "next/navigation"; // Hook to get current URL path
import Image from "next/image";
import Link from "next/link";

// Utility libraries and hooks
import { useTranslations } from "next-intl"; // Translation hook

// Internal project components and styles
import Drawer from "./DiagonalDrawer"; // Custom drawer component
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"; // Language switching component
import "../Header/DiagonalDrawer.css"; // Styling for Drawer component

export default function Header() {
  const t = useTranslations("Header"); // Translations for the Header

  const pathname = usePathname(); // Get current path to highlight menu items
  const [selectedIndex1, setSelectedIndex1] = useState(0); // Active menu item index
  const [isOpen, setIsOpen] = useState(false); // Drawer open/close state
  const [isScrolled, setIsScrolled] = useState(false); // Header scroll state for styling

  // Update selectedIndex1 based on pathname and Y scroll position to highlight active menu item

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (pathname === "/#home" || (scrollY < 900 && pathname !== "/page/contactme")) {
        setSelectedIndex1(0);
      } else if (pathname === "/#portfolio" || (scrollY >= 900 && scrollY < 1700)) {
        setSelectedIndex1(1);
      } else if (pathname === "/#about-me-component" || (scrollY >= 1700 && scrollY < 2500)) {
        setSelectedIndex1(2);
      } else if (pathname === "/page/contactme") {
        setSelectedIndex1(3);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [pathname]);

  //  log the scroll position (this will be kept for future reference)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition =
  //       window.scrollY || document.documentElement.scrollTop;
  //     console.log("Current scroll position:", scrollPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Toggle `isScrolled` based on page scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0); // Set true if page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Open Drawer
  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        {/* Drawer component with dynamic open state */}
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } w-full fixed top-0 z-50 transition-all duration-500`}
      >
        {/* Drawer toggle button */}
        <div className="relative">
          <div
            onClick={openDrawer}
            className="z-30 absolute cursor-pointer w-14 h-14 xl:hidden lg:w-24 lg:h-24 bg-[#48afde] flex justify-center items-center rounded-br-3xl"
          >
            <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
              <Image
                height={100}
                width={100}
                src="/drawer.png"
                alt="drawer item"
                className="w-[150px] h-10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="invisible xl:visible flex justify-center">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            {/* Home menu item */}
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#home"
                onClick={() => setSelectedIndex1(0)}
              >
                {t("home")}
              </a>
            </li>
            {/* Other menu items */}
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 1 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 1 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#portfolio"
                onClick={() => setSelectedIndex1(1)}
              >
                {t("portfolio")}
              </a>
            </li>
            {/* About Me menu item */}
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 2 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 2 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#about-me-component"
                onClick={() => setSelectedIndex1(2)}
              >
                {t("aboutMe")}
              </a>
            </li>
            {/* Hire Me menu item */}
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 3 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <Link
                className={`menu-item ${
                  selectedIndex1 === 3 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/page/contactme"
                onClick={() => setSelectedIndex1(3)}
              >
                {t("hireMe")}
              </Link>
            </li>
            {/* Language switcher */}
            <li className="group text-2xl relative font-bold mr-20">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
