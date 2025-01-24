"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
// import Logo from "../../../public/MainLogo.png";

function Navbar({ navigation, bgClass }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className={`absolute top-0 right-0 left-0 navbar flex justify-center navbar-bg items-center bg-transparent text-white py-[1.5rem] z-50 uppercase font-[Bodoni]`}
      style={{ background: bgClass ? "#0d0d0d" : "#0d0d0d33" }}
    >
      <div className="w-11/12 xl:w-4/5 flex flex-row items-center justify-between">
        {/* <Image src={Logo} alt="" width={200} height={43} /> */}
        <div></div>
        <nav className="flex gap-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hidden md:flex text-white border-b-2 border-b-solid border-b-transparent hover:border-b-white px-[10px] py-[10px] duration-[0.2s] leading-3"
            >
              {item.name}
            </Link>
          ))}
          <div className="md:hidden flex">
            <button className="ml-4 text-[20px]" onClick={toggleSidebar}>
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed p-[1rem] flex flex-col justify-start items-start inset-y-0 right-0 bg-[#0d0d0d] text-[#B08A5E] w-56 transition-transform duration-700 transform md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="w-full flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">Menu</h1>
          <button onClick={toggleSidebar}>
            <IoIosClose size={30} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-[#B08A5E] px-2 py-1 rounded duration-[0.2s]"
              onClick={toggleSidebar}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
