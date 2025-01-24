"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";
import Filter from "./Filter";
import { products } from "@/app/data";

const ProductList = ({ productList, categoryId }) => {
  const [filter, setFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [use, setUse] = useState("");
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
  const [appliedPriceRange, setAppliedPriceRange] = useState({
    min: 0,
    max: 100,
  });
  const productsPerPage = 4;
  const pageWindowSize = 4;

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleApplyFilters = () => {
    setAppliedPriceRange(priceRange);
    setCurrentPage(1); // Reset to first page on new filter application
    setFilter(false);
  };

  const filteredProducts = productList
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => {
      const productPrice = parseFloat(product.price.replace("$", ""));
      return (
        productPrice >= appliedPriceRange.min &&
        productPrice <= appliedPriceRange.max
      );
    })
    .filter((product) =>
      product.use.some((u) => u.toLowerCase().includes(use.toLowerCase()))
    )
    .filter((product) =>
      product.color.some((u) => u.toLowerCase().includes(color.toLowerCase()))
    );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="bg-[#CBAE90]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - Math.floor(pageWindowSize / 2));
    const endPage = Math.min(totalPages, startPage + pageWindowSize - 1);
    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  };

  return (
    <div className="flex h-full flex-col w-full items-center justify-start text-black">
      <Filter
        filter={filter}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
        handleApplyFilters={handleApplyFilters}
        setFilter={setFilter}
        use={use}
        setUse={setUse}
        color={color}
        setColor={setColor}
        setCurrentPage={setCurrentPage}
      />
      <div className="w-full flex justify-start items-center mt-4 mb-8 font-poppins">
        <p
          onClick={() => setFilter(true)}
          className="flex justify-start items-center gap-2 cursor-pointer mr-2 p-2 border border-gray-400 rounded-md hover:border-[#A97B50] hover:text-[#A97B50] duration-200"
        >
          <MdFilterList />
          Filter
        </p>
        <input
          type="text"
          placeholder="Search for product name"
          className="w-full p-2 bg-transparent border border-gray-400 border-r-0 rounded-l-md outline-none focus:border-[#A97B50] duration-200"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="flex justify-center p-2 items-center border border-[#A97B50] bg-[#A97B50] min-w-0 sm:min-w-20 text-white font-poppins rounded-r-md hover:bg-[#8B4513] cursor-pointer duration-200"
        >
          <IoSearchOutline size={24} />
        </button>
      </div>
      <div className="flex-1 flex flex-col w-full justify-between items-center">
        <p
          className={`${
            filteredProducts.length > 0 ? "hidden" : "flex"
          } text-xl font-poppins font-semibold`}
        >
          No products found!
        </p>
        <div className="w-2/3 md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {currentProducts.map((product, i) => (
            <div
              key={i}
              className="flex flex-col justify-start items-center h-[350px] gap-2 font-semibold font-poppins mb-8"
            >
              <Link
                href={`/products/${categoryId}/${indexOfFirstProduct + i}`}
                className="w-full"
              >
                <div className="w-full h-[300px] border border-[#EDDCCB] rounded-lg overflow-hidden relative cursor-pointer">
                  {product.Img && (
                    <Image
                      src={product.Img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 coverDiv flex justify-center items-center cursor-pointer duration-200">
                    <p className="text-base md:text-lg">View Product</p>
                  </div>
                </div>
              </Link>
              <p className="bg-[#EDDCCB] w-full p-2 rounded-lg flex items-center justify-center text-base md:text-lg">
                {product.price}
              </p>
              <Link href={`/products/${categoryId}/${indexOfFirstProduct + i}`}>
                <p className="text-lg md:text-xl hover:text-[#8B4513] cursor-pointer duration-200">
                  {highlightText(product.name, searchTerm)}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div
          className={`items-center space-x-2 pb-10 ${
            filteredProducts.length > 0 ? "flex" : "hidden"
          }`}
        >
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#A97B50] text-white rounded-full hover:bg-[#8B4513] cursor-pointer duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-10 h-10 rounded-full ${
                currentPage === page
                  ? "bg-[#A97B50] text-white"
                  : "bg-[#EDDCCB]"
              } hover:bg-[#8B4513] cursor-pointer duration-200`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#A97B50] text-white rounded-full hover:bg-[#8B4513] cursor-pointer duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
