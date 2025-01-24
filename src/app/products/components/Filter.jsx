import React from "react";
import InputRange from "react-input-range";
import "./slider.css";
import { IoIosClose } from "react-icons/io";

const Filter = ({
  filter,
  priceRange,
  setPriceRange,
  handleApplyFilters,
  setFilter,
  use,
  setUse,
  color,
  setColor,
  setCurrentPage,
}) => {
  const uses = ["the base", "eyes", "lips", "brows", "brushes", "skin", "face"];
  const colors = ["brown", "beige", "pink", "red", "black", "blue"];
  return (
    <div
      className={`flex fixed top-0 left-0 bottom-0 w-[300px] bg-[#D4C4B2] z-[1000] flex-col justify-start items-start p-4 transition-transform duration-700 transform ${
        filter ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-semibold">Menu</h1>
        <button
          onClick={() => setFilter(false)}
          className="hover:text-[#A97B50] duration-200"
        >
          <IoIosClose size={30} />
        </button>
      </div>
      <div className="w-full flex flex-col flex-1 overflow-auto">
        <p className="mt-8 text-lg font-semibold">Price</p>
        <div className="w-full flex flex-col justify-start items-start mb-4">
          <div className="w-full p-2">
            <InputRange
              maxValue={300}
              minValue={0}
              value={priceRange}
              onChange={setPriceRange}
              formatLabel={(value) => ``}
            />
          </div>
          <p>
            Price Range:{" "}
            <span className="font-semibold">
              ${priceRange.min} - ${priceRange.max}
            </span>
          </p>
          <button
            onClick={handleApplyFilters}
            className="flex justify-center items-center gap-2 cursor-pointer mr-2 p-2 border min-w-24 rounded-md border-[#A97B50] text-[#A97B50] duration-200 mt-4 hover:bg-[#A97B50] hover:text-white"
          >
            Filter
          </button>
        </div>

        <p className="text-lg font-semibold mb-2">Use</p>
        <div className="w-full flex flex-col justify-start items-center">
          {uses.map((element, i) => (
            <div
              onClick={() => {
                use === "" ? setUse(element) : setUse("");
                setFilter(false);
                setCurrentPage(1);
              }}
              key={i}
              className={`w-full flex justify-start items-center ${
                i === 0 && "border-t border-t-[#A97B50]"
              } border-b border-b-[#A97B50] p-2 cursor-pointer capitalize hover:bg-[#B08A5E] hover:text-white duration-200`}
              style={
                use === element
                  ? { backgroundColor: "#A97B50", color: "white" }
                  : {}
              }
            >
              <p>{element}</p>
            </div>
          ))}
        </div>
        <p className="text-lg font-semibold mb-2 mt-6">Color</p>
        <div className="w-full flex flex-col justify-start items-center">
          {colors.map((element, i) => (
            <div
              onClick={() => {
                color === "" ? setColor(element) : setColor("");
                setFilter(false);
                setCurrentPage(1);
              }}
              key={i}
              className={`w-full flex justify-start items-center ${
                i === 0 && "border-t border-t-[#A97B50]"
              } border-b border-b-[#A97B50] p-2 cursor-pointer capitalize hover:bg-[#B08A5E] hover:text-white duration-200`}
              style={
                color === element
                  ? { backgroundColor: "#A97B50", color: "white" }
                  : {}
              }
            >
              <p>{element}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
