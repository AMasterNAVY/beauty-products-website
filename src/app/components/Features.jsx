import React from "react";
import SkinCare from "../../../public/skinCare.png";
import Makeup from "../../../public/makeup.png";
import Healthcare from "../../../public/healthcare.png";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const features = [
    {
      name: "Skin Care",
      text: `Nurture\nYour Natural\nGlow`,
      Img: SkinCare,
      href: "/products/skinCare",
    },
    {
      name: "Make Up",
      text: `Enhance Your\nBeauty\nEffortlessly`,
      Img: Makeup,
      href: "/products/makeUp",
    },
    {
      name: "Healthcare",
      text: `Prioritize\nYour Well-being\nDaily`,
      Img: Healthcare,
      href: "/products/healthcare",
    },
  ];
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div id="features" className="flex flex-col md:flex-row w-full h-full">
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="min-h-[500px] h-1/3 md:h-full md:w-1/3 relative feature-container cursor-pointer"
          >
            <div className="w-full h-full relative">
              <Image
                src={feature.Img}
                alt="homePicture"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 cover" />
            </div>
            <div className="absolute w-full bottom-[20%] flex flex-col items-center justify-start">
              <h2 className="text-[30px] font-[Bodoni] uppercase font-semibold">
                {feature.name}
              </h2>
              <p className="text-center text-[25px] font-[Bodoni] uppercase">
                {feature.text.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
