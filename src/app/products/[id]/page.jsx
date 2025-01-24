import React from "react";
import Link from "next/link";
import Error404 from "../../components/Error404"; // Make sure to correct the path
import Navbar from "../../components/Navbar"; // Make sure to correct the path
import { products } from "../../data"; // Make sure to correct the path
import ProductList from "../components/ProductList";

export async function generateMetadata({ params: { id } }) {
  if (!products[id].metadataTitle) return {};
  return {
    title: `${products[id].metadataTitle}`,
  };
}

export async function generateStaticParams() {
  return Object.keys(products);
}

const navigation = [
  { name: "Home", href: "/#home", exact: "true" },
  { name: "Features", href: "/#features", exact: "true" },
  { name: "Contact Us", href: "/#contactUs", exact: "true" },
];

function Page({ params }) {
  if (!products[params.id]) return <Error404 />;

  return (
    <div className="h-screen w-full flex flex-col bg-[#F5F5F5] overflow-hidden">
      <Navbar navigation={navigation} bgClass={true} />
      <div className="flex h-full flex-col w-full items-center justify-start text-black mt-12 overflow-auto p-4 sm:p-8">
        <h1 className="font-[Cormorant] text-[35px] md:text-[45px] font-semibold text-[#A97B50] mt-6">
          {products[params.id].title}
        </h1>
        <ProductList
          productList={products[params.id].productList}
          categoryId={params.id}
        />
      </div>
    </div>
  );
}

export default Page;
