"use client";

import Image from "next/image";
import React from "react";
import {useEffect, useState} from "react";

function LayoutNavbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 70) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);
  return (
    <nav
      className={`h-fit w-full flex flex-row justify-between  fixed z-[100] text-white ${
        showNav ? "bg-black/90" : "bg-none"
      } duration-700`}
    >
      <a href="/">
        <Image
          src="/Nimeflix logo.png"
          alt="Nimeflix"
          className="p-2 ml-4 sm:ml-5 hover:cursor-pointer sm:h-[70px] sm:w-[65px]"
          height={60}
          width={60}
        />
      </a>
      <ul
        className={`flex flex-row gap-5 items-center mr-1 sm:mr-0 justify-end w-[80%] sm:w-[30%] sm:max-xl:w-[70%]`}
      >
        <li>
          <Image
            src="/avatar.png"
            alt="avatar-icon"
            width={70}
            height={55}
            priority
          />
        </li>
      </ul>
    </nav>
  );
}

export default LayoutNavbar;
