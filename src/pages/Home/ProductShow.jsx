import React from "react";
import Slider from "react-slick";
import productsData from "../../constants/products.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-8 top-[300px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg"
      style={{ fontSize: "24px", color: "#4A4A4A" }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-[300px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg"
      style={{ fontSize: "24px", color: "#4A4A4A" }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

function ProductShow() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
  };

  const convertImage = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      const fileId = match[1];
      const link = `https://drive.google.com/thumbnail?id=${fileId}&sz=s4000`;
      return link;
    }
    return url;
  };

  // Shuffle the products array
  const shuffledProducts = [...productsData.products].sort(
    () => Math.random() - 0.5
  );

  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="container mx-auto px-10 lg:px-4  pt-4 mb-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl lg:text-7xl tracking-wide font-bold text-[#19325b]">
          Products
        </h1>
        <p className="text-[#19325b] lg:text-xl font-medium text-center text-balance">
          High-Quality Ingredients for Your Pet's Health and Happiness
        </p>
      </div>

      <Slider {...sliderSettings}>
        {shuffledProducts.map((product, index) => {
          const benefitsList = product.Benefits
            ? product.Benefits.split(/[\r\n]+|(?<=\.)\s*/)
                .filter((point) => point.trim() !== "")
                .slice(0, 5)
            : [];

          return (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-semibold text-[#19325b] text-center mb-6">
                {product["PRODUCTS DISCRIPTION"]}
              </h2>

              <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
                <div className="w-full lg:w-1/3 flex justify-center">
                  <img
                    src={
                      product["Image 1"]
                        ? convertImage(product["Image 1"])
                        : product["Website Link"]
                    }
                    alt={product["Product Tittle for ecom"]}
                    className="size-[400px] object-contain hover:cursor-pointer my-5"
                    onClick={() => handleProductClick(product["PRODUCTS CODE"])}
                  />
                </div>

                <div className="w-full lg:w-2/3">
                  <p className="text-gray-600 mb-4">
                    {product["Product Description"]}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-[#19325b]">
                      Benefit
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      {benefitsList.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductShow;
