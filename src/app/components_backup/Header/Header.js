"use client";
// Purpose: The Header component is responsible for rendering the navigation menu and the drawer component for mobile devices. It also handles the active menu item based on the current path and scroll position.

// React core imports
import React, { useEffect, useState } from "react";

// Next.js specific imports
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Utility libraries and hooks
import { useTranslations } from "next-intl"; // Hook for handling translations

// Internal project components and styles
import Drawer from "./DiagonalDrawer"; // Custom drawer component
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"; // Language switcher component
import "../Header/DiagonalDrawer.css"; // Styles for the drawer component

export default function Header() {
  const t = useTranslations("Header"); // Translations for the Header component

  const pathname = usePathname(); // Gets the current path to highlight active menu items
  const [selectedIndex1, setSelectedIndex1] = useState(0); // Stores the index of the active menu item
  const [isOpen, setIsOpen] = useState(false); // Controls the open/close state of the drawer
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if the page is scrolled for header styling

  // Update active menu item based on the current path and scroll position
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (pathname === "/#home" || (scrollY < 900 && pathname !== "/page/contactme")) {
        setSelectedIndex1(0); // Highlight "Home"
      } else if (pathname === "/#portfolio" || (scrollY >= 900 && scrollY < 1700)) {
        setSelectedIndex1(1); // Highlight "Portfolio"
      } else if (pathname === "/#about-me-component" || (scrollY >= 1700 && scrollY < 2500)) {
        setSelectedIndex1(2); // Highlight "About Me"
      } else if (pathname === "/page/contactme") {
        setSelectedIndex1(3); // Highlight "Hire Me"
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [pathname]);

  // Toggle `isScrolled` based on the page scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0); // Set to true if the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to open the Drawer component
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
        aria-label="Main Header Navigation"
      >
        {/* Drawer toggle button */}
        <div className="relative">
          <button
            onClick={openDrawer}
            aria-label="Open navigation drawer"
            className="z-30 absolute cursor-pointer w-14 h-14 xl:hidden lg:w-24 lg:h-24 bg-[#48afde] flex justify-center items-center rounded-br-3xl"
          >
            <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
              <Image
                height={100}
                width={100}
                src="/drawer.png"
                alt="Open navigation drawer"
                className="w-[150px] h-10"
                priority
              />
            </div>
          </button>
        </div>

        {/* Navigation menu visible on larger screens */}
        <nav
          className="invisible xl:visible flex justify-center"
          aria-label="Primary navigation"
        >
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            {/* Home menu item */}
            <li className="group text-2xl relative font-bold mr-20">
              <a
                href="/#home"
                onClick={() => setSelectedIndex1(0)}
                aria-current={selectedIndex1 === 0 ? "page" : undefined}
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
              >
                {t("home")}
              </a>
              <span
                className={`menu-effect transform ${
                  selectedIndex1 === 0 ? "opacity-100 -rotate-12" : "opacity-0 rotate-12"
                } group-hover:-rotate-12 group-hover:opacity-100`}
                aria-hidden="true"
              ></span>
            </li>

            {/* Portfolio menu item */}
            <li className="group text-2xl relative font-bold mr-20">
              <a
                href="/#portfolio"
                onClick={() => setSelectedIndex1(1)}
                aria-current={selectedIndex1 === 1 ? "page" : undefined}
                className={`menu-item ${
                  selectedIndex1 === 1 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
              >
                {t("portfolio")}
              </a>
              <span
                className={`menu-effect transform ${
                  selectedIndex1 === 1 ? "opacity-100 -rotate-12" : "opacity-0 rotate-12"
                } group-hover:-rotate-12 group-hover:opacity-100`}
                aria-hidden="true"
              ></span>
            </li>

            {/* About Me menu item */}
            <li className="group text-2xl relative font-bold mr-20">
              <a
                href="/#about-me-component"
                onClick={() => setSelectedIndex1(2)}
                aria-current={selectedIndex1 === 2 ? "page" : undefined}
                className={`menu-item ${
                  selectedIndex1 === 2 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
              >
                {t("aboutMe")}
              </a>
              <span
                className={`menu-effect transform ${
                  selectedIndex1 === 2 ? "opacity-100 -rotate-12" : "opacity-0 rotate-12"
                } group-hover:-rotate-12 group-hover:opacity-100`}
                aria-hidden="true"
              ></span>
            </li>

            {/* Hire Me menu item */}
            <li className="group text-2xl relative font-bold mr-20">
              <Link
                href="/page/contactme"
                onClick={() => setSelectedIndex1(3)}
                aria-current={selectedIndex1 === 3 ? "page" : undefined}
                className={`menu-item ${
                  selectedIndex1 === 3 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
              >
                {t("hireMe")}
              </Link>
              <span
                className={`menu-effect transform ${
                  selectedIndex1 === 3 ? "opacity-100 -rotate-12" : "opacity-0 rotate-12"
                } group-hover:-rotate-12 group-hover:opacity-100`}
                aria-hidden="true"
              ></span>
            </li>

            {/* Language Switcher component */}
            <li className="group text-2xl relative font-bold mr-20">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
