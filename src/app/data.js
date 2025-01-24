import { MdPool } from "react-icons/md";
import {
  GiStonePath,
  GiWoodenFence,
  GiStoneWall,
  GiWoodBeam,
  GiFaucet,
} from "react-icons/gi";
import {
  FaBath,
  FaWheelchair,
  FaWrench,
  FaThLarge,
  FaHome,
  FaCarSide,
  FaPlusSquare,
  FaBuilding,
} from "react-icons/fa";

//product skin care
//product make up
import test from "../../public/testMakeUp.webp";
import test1 from "../../public/test1.jpg";
import test2 from "../../public/test2.webp";
import test3 from "../../public/test3.jpg";
//product healthcare

export const products = {
  skinCare: {
    title: "Skin Care",
    metadataTitle: "SkinCare",
    uses: ["eyes"],
    productList: [
      {
        name: "Product 1",
        Img: test,
        Description:
          "180 square meters of floor and wall stone work around the villa.",
        price: "12$",
        use: ["lips", "skin"],
        color: ["pink"],
      },
    ],
  },
  makeUp: {
    title: "Make Up",
    metadataTitle: "MakeUp",
    uses: ["eyes"],
    productList: [
      {
        name: "Product 1",
        Img: test,
        Description:
          "The Money Shot.Double Drawer, 42 Pan Palette.Less Counting Change, More Counting Blessings.In life it’s not always about securing the shot first time, sometimes it’s about taking a risk and capturing the memories we make in the process that become truly priceless…42 eyeshadow pans of rich green tones, from light reflective shimmers to deliciously deep mattes, this palette will have you feeling like you’ve hit the jackpot. Time to start developing from the negatives babe, adjust the focus on what’s important, fire off a few rounds of hustle and take that money shot!The more you learn, the more you earn.",
        price: "$12.00",
        use: ["lips", "skin"],
        color: ["pink"],
      },
      {
        name: "Product 2",
        Img: test1,
        Description:
          "The Money Shot.Double Drawer, 42 Pan Palette.Less Counting Change, More Counting Blessings.In life it’s not always about securing the shot first time, sometimes it’s about taking a risk and capturing the memories we make in the process that become truly priceless…\n42 eyeshadow pans of rich green tones, from light reflective shimmers to deliciously deep mattes, this palette will have you feeling like you’ve hit the jackpot. Time to start developing from the negatives babe, adjust the focus on what’s important, fire off a few rounds of hustle and take that money shot!The more you learn, the more you earn.",
        price: "$20.00",
        use: ["lips", "eyes"],
        color: ["black", "red"],
      },
      {
        name: "Product 3",
        Img: test2,
        Description:
          "180 square meters of floor and wall stone work around the villa.",
        price: "$12.50",
        use: ["the base", "eyes"],
        color: ["blue", "red"],
      },
      {
        name: "Product 4",
        Img: test3,
        Description:
          "180 square meters of floor and wall stone work around the villa.",
        price: "$17.00",
        use: ["lips", "eyes"],
        color: ["beige", "blue"],
      },
    ],
  },
  healthcare: {
    title: "Healthcare",
    metadataTitle: "Healthcare",
    uses: ["eyes"],
    productList: [
      {
        name: "Product 1",
        Description:
          "180 square meters of floor and wall stone work around the villa.",
        price: "12$",
        use: ["lips", "skin"],
        color: ["pink"],
      },
    ],
  },
};
