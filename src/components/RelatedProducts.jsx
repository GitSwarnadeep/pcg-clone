import { useParams } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../pages/Products/ProductCard";
import productsData from "../constants/products.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function RelatedProducts() {
  const { id } = useParams();
  const products = productsData.products;

  console.log("productsData:", productsData);
  console.log("productsData.product:", products);

  if (!Array.isArray(products)) {
    console.error("productsData.product is not an array:", products);
    return <p>Invalid product data</p>;
  }

  console.log("Page ID from useParams:", id);
  const product = products.find(
    (p) => p["PRODUCTS CODE"]?.trim().toLowerCase() === id.trim().toLowerCase()
  );
  console.log("Current Product:", product);

  if (!product) {
    console.error("Product not found for the given ID:", id);
    return <p>Product not found</p>;
  }

  const category = product["Category"];
  console.log("Current Product Category:", category);

  let relatedProducts = products.filter(
    (p) => p["Category"] === category && p["PRODUCTS CODE"] !== product["PRODUCTS CODE"]
  );
  console.log("Filtered Related Products:", relatedProducts);

  if (relatedProducts.length < 4) {
    console.warn("Less than 4 related products found. Shuffling all products.");
    relatedProducts = shuffleArray(products).slice(0, 10);
    console.log("Shuffled Products:", relatedProducts);
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
    ],
  };

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg"
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg"
        style={{ fontSize: "24px", color: "#4A4A4A" }}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  }

  return (
    <div className="my-8 px-[5%] text-center">
      <h2 className="text-3xl font-semibold mb-4">Related Products</h2>
      <div className="w-full h-[2px] bg-[#c0c5d9] mx-auto mb-6"></div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl pl-[10%] lg:pl-0">
          <Slider {...sliderSettings}>
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct["PRODUCTS CODE"]}
                className="px-2 text-center"
              >
                <ProductCard product={relatedProduct} />
                <p className="mt-2 text-sm text-gray-500">
                  {relatedProduct.size}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
