"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 h-[95px] w-full left-1/2 rounded-none border border-white border-opacity-40 bg-[#EBD5D5] bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex items-center justify-between md:justify-center gap-4 fixed top-[0.15rem] left-1/2 h-[80px] md:h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-full px-4 md:px-0">
        <motion.div
          className="flex items-center justify-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </motion.div>

        <div className="flex items-center justify-around md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-2 gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className={clsx("h-3/4 flex items-center justify-center relative hover:text-gray-950 py-1 px-2 rounded-3xl", { "text-gray-950 bg-[#e7caca]": activeSection === link.name })}
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link href={link.hash} scroll={true} onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); closeMenu(); }}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 h-[400px] w-full float-right bg-[#EBD5D5] bg-opacity-95 dark:bg-gray-950 dark:bg-opacity-95 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-950 dark:text-gray-100">
              {links.map((link) => (
                <motion.li
                  className={clsx("py-2 px-4 rounded-3xl", { "text-gray-950 bg-[#e7caca]": activeSection === link.name })}
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link href={link.hash} scroll={true} onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); closeMenu(); }}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
