"use client";
import React, { useState, useEffect, useRef } from "react";
import HomeSection from "./components/HomeSection";
import Features from "./components/Features";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

export default function Home() {
  const navigation = [
    { name: "Home", href: "#home", exact: "true" },
    { name: "Features", href: "#features" },
    { name: "Contact Us", href: "#contactUs" },
  ];

  return (
    <main className="h-screen w-full bg-[#0d0d0d]">
      <Navbar navigation={navigation} />
      <HomeSection />
      <Features />
    </main>
  );
}
