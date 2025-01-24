import React from "react";
import { products } from "../../../data"; // Make sure to correct the path
import Image from "next/image";
import Error404 from "../../../components/Error404"; // Make sure to correct the path
import Navbar from "@/app/components/Navbar";
import { GrFormPrevious } from "react-icons/gr";
import Link from "next/link";

export async function generateMetadata({ params: { id, productId } }) {
  if (!products[id] || !products[id].productList[productId]) return {};
  return {
    title: `${products[id].productList[productId].name}`,
  };
}

export async function generateStaticParams() {
  const params = [];
  Object.keys(products).forEach((id) => {
    products[id].productList.forEach((product, index) => {
      params.push({ id, productId: index.toString() });
    });
  });
  return params;
}

function ProductDetail({ params }) {
  const { id, productId } = params;

  console.log("Params:", params);
  console.log("Product Data:", products[id]?.productList[productId]);

  if (!products[id] || !products[id].productList[productId])
    return <Error404 />;

  const product = products[id].productList[productId];

  const navigation = [
    { name: "Home", href: "/#home", exact: "true" },
    { name: "Features", href: "/#features", exact: "true" },
    { name: "Contact Us", href: "/#contactUs", exact: "true" },
  ];

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F5F5] justify-start items-center">
      <Navbar navigation={navigation} bgClass={true} />
      <div className=" w-full flex-1 flex flex-col md:flex-row items-start justify-center mt-20 gap-8 lg:gap-16 p-10 pb-0 overflow-auto relative">
        <Link
          href={`/products/${params.id}`}
          className="absolute top-2 left-1 z-50 text-black cursor-pointer hover:text-[#A97B50]"
        >
          <GrFormPrevious size={25} />
        </Link>
        <div className="w-full md:w-1/2 lg:w-[40%] h-[600px] md:h-[448px] border border-[#EDDCCB] rounded-lg shadow-right mt-72 md:mt-0">
          {product.Img && (
            <Image
              src={product.Img}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
        <div className="flex flex-col md:flex-1 h-[400px] justify-start items-start text-black font-poppins shadow-right">
          <p className="text-2xl text-[#A97B50] font-semibold">
            {product.name}
          </p>
          <p className="text-xl my-4 font-semibold">
            <span>Price: </span>
            {product.price}
          </p>
          <p className="text-lg font-semibold">Description</p>
          <p className="text-lg mt-2 text-justify pb-10">
            {product.Description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
