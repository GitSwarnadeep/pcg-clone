import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ProductCard = ({ product }) => {
  const convertImage = (url) => {
    if (!url) {
      return "/fallback-image.png";
    }

    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      const fileId = match[1];
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=s4000`;
    }

    return url;
  };

  return (
    <Link
      to={`/products/${product["PRODUCTS CODE"]}`}
      className="block max-w-[95%] py-2 pb-3"
    >
      <div
        className={`border p-3 rounded-lg transition-shadow duration-200 bg-[#f8f9fd] text-center ${
          product["Category"]?.includes("Bird Food") ? "h-[500px]" : "h-[480px]"
        }`}
      >
        <h3 className="text-lg font-medium text-[#19325b] mb-4">
          {product["PRODUCTS DISCRIPTION"]}
        </h3>

        <img
          src={
            product["Image 1"]
              ? convertImage(product["Image 1"])
              : product["Website Link"]
          }
          alt={product["PRODUCTS CODE"]}
          className="h-[250px] object-contain mx-auto mb-4"
        />

        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-sm text-[#19325b] flex">
            {Array.isArray(product["Weights"]) &&
            product["Weights"].length > 0 ? (
              product["Weights"].map((weight, index) => (
                <p className="line-clamp-1 mr-1" key={index}>
                  {weight} {weight < 1 ? "g" : "kg"}
                  {index !== product["Weights"].length - 1 ? "," : "."}
                </p>
              ))
            ) : (
              <p>{product["Weight (Kg's)"]} Kg</p>
            )}
          </div>
        </div>

        <button className="flex items-center justify-center mx-auto mt-6 px-8 py-2 border border-[#19325b] text-[#19325b] font-medium rounded-lg transition ">
          See More <IoIosArrowForward className="ml-2" />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
