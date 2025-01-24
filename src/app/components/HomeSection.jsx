import React from "react";
import HomePicture from "../../../public/homePicture.png";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="flex height w-full h-full relative">
      <div className="bg-[#0d0d0d] w-0 sm:w-2/12 md:w-1/3 flex lg:hidden"></div>
      <div className="flex flex-col justify-end items-end pl-4 sm:pl-16 pb-0 lg:pb-32 z-10 absolute left-1/2 bottom-20 transform -translate-x-1/2 lg:relative md:translate-x-0 md:left-0 lg:top-auto lg:bottom-auto">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-[Cormorant] italic leading-[70px] text-center">
          If it makes
          <br />
          you feel
          <br />
          <span className="text-[75px] sm:text-[95px] md:text-[110px] font-semibold text-center">
            Beautiful
          </span>
          <br />
        </h1>
        <h1 className="text-[50px] font-[Cormorant] italic leading-[70px]">
          then do it.
        </h1>
      </div>

      <div className="image-container flex-1">
        <Image
          src={HomePicture}
          alt="homePicture"
          className="h-full w-full object-cover object-right-top md:object-top"
        />
      </div>
    </section>
  );
};

export default HomeSection;
