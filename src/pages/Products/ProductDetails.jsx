import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductBenefits from "./ProductBenefits";
import AllProducts from "./AllProducts";
import Slider from "react-slick";
import productsData from "../../constants/products.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedProducts from "../../components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();

  const products = productsData.products;

  if (!Array.isArray(products)) {
    console.error("productsData.products is not an array:", products);
    return <p>Invalid product data</p>;
  }

  const product = products.find((p) => p["PRODUCTS CODE"] === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const relatedProducts = products
    .filter((p) => p["PRODUCTS CODE"] !== product["PRODUCTS CODE"])
    .slice(0, 4);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  const productImages = Object.keys(product)
    .filter((key) => key.startsWith("Image"))
    .map((key) => product[key])
    .filter(Boolean);

  const convertImage = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      const fileId = match[1];
      const link = `https://drive.google.com/thumbnail?id=${fileId}&sz=s4000`;
      console.log(link);
      return link
    }
    return url;
  };

  const transformedImages =
    productImages.length > 0
      ? productImages.map((image) => convertImage(image))
      : [product["Website Link"]];

  const productImageSliderSettings = {
    dots: true,
    infinite: productImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <Navbar />
      <div
        className="py-16 px-14 pb-[150px] lg:flex lg:justify-between lg:items-end h-[600px] bg-no-repeat bg-center lg:bg-contain lg:-mt-5"
        style={{
          backgroundImage: `url("/assets/bg.png")`,
        }}
      >
        <div className="lg:w-1/2 h-[120%] lg:-my-[90px]">
          <div>
            <h1 className="text-[#284c72]">
              Products / {product["Category"]} /{" "}
              {product["PRODUCTS DISCRIPTION"]}
            </h1>
            <Slider {...productImageSliderSettings}>
              {transformedImages.map((image, index) => (
                <img
                  key={`${product["PRODUCTS CODE"]}-${index}`}
                  src={image}
                  alt={product["PRODUCTS CODE"]}
                  className="rounded mt-[75px] lg:mt-[50px] size-[400px] object-contain"
                />
              ))}
            </Slider>
          </div>
        </div>

        <div className="lg:w-1/2 lg:ml-8 mt-6 lg:mt-8 hidden lg:flex flex-col justify-center h-full px-5 -my-16">
          <h1 className="text-3xl font-bold mb-4 text-[#19325b]">
            {product["PRODUCTS DISCRIPTION"]}
          </h1>

          {product["Product Description"] && (
            <div className="mt-3">
              <p className="text-gray-600">{product["Product Description"]}</p>
            </div>
          )}

          <div className="flex mt-5 mb-3 gap-12 font-semibold text-[#284c72]">
            <div>
              <div className="flex flex-col gap-2">
                <p>Recipe/Flavor</p>
                <p className="text-sm text-gray-500">{product["Flavor"]}</p>
              </div>
              <div className="h-[0.5px] bg-gray-400 mt-2"></div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <p>Type</p>
                <p className="text-sm text-gray-500">
                  {product["Sub Category"]}
                </p>
              </div>
              <div className="h-[0.5px] bg-gray-400 mt-2"></div>
            </div>
            <div>
              <div className="flex flex-col gap-2 ">
                <p>Weight</p>
                <div className="text-sm text-gray-500 flex">
                  {product["Weights"] ? (
                    product["Weights"].map((weight, index) => (
                      <p key={weight} className="mr-1">
                        {weight < 1 ? `${weight * 1000} g` : `${weight} kg`}
                        {index === product["Weights"].length - 1 ? "." : ","}
                      </p>
                    ))
                  ) : (
                    <p>
                      {product["Weight (Kg's)"] && product["Weight (Kg's)"] < 1
                        ? `${product["Weight (Kg's)"] * 1000} g`
                        : `${product["Weight (Kg's)"]} kg`}
                    </p>
                  )}
                </div>
              </div>

              <div className="h-[0.5px] bg-gray-400 mt-2"></div>
            </div>
          </div>

          {/* <div className="flex mt-5 items-center gap-3">
            <h1 className="text-lg font-semibold">Buy this on : </h1>
            <div className="flex justify-center items-center gap-5">
              <a
                href={
                  product["Brand Name"]?.toLowerCase().includes("smartheart")
                    ? "https://www.amazon.in/stores/page/E5497ECC-AE5B-4529-821B-24CA16EFE747?ingress=0&visitId=99cf1ca7-c56b-449c-97e4-9503f8a8affa"
                    : product["Brand Name"]?.toLowerCase().includes("me-o")
                    ? "https://www.amazon.in/stores/page/67322618-9384-47AF-8F88-C82E1E0EA3CD?ingress=0&visitId=1137950c-67fc-4bf0-abcc-0cc18ece13f6"
                    : "https://www.amazon.in"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/amazon-full-logo.svg"
                  alt="Amazon"
                  className="w-24 h-auto transition-transform hover:scale-110 -mb-2"
                />
              </a>
              <a
                href={
                  product["Brand Name"]?.toLowerCase().includes("smartheart")
                    ? "https://www.flipkart.com/search?q=pet+food&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3Dsmart%2Bheart"
                    : product["Brand Name"]?.toLowerCase().includes("me-o")
                    ? "https://www.flipkart.com/search?q=Me-O+Cat+Food&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3DMe-O"
                    : "https://www.flipkart.com"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/flipkart.png"
                  alt="Amazon"
                  className="w-36 -mt-1 -ml-3 h-auto transition-transform hover:scale-110 "
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* Mobile View  */}
      <div className="mt-6 lg:hidden px-10 py-5">
        <h1 className="text-3xl font-bold text-[#19325b] mb-4">
          {product["PRODUCTS DISCRIPTION"]}
        </h1>

        {product["Product Description"] && (
          <div className="mt-3">
            <p className="text-gray-600">{product["Product Description"]}</p>
          </div>
        )}

        <div className="flex flex-col mt-5 gap-8 font-semibold text-[#284c72]">
          <div>
            <div className="flex flex-col gap-2">
              <p>Recipe / Flavor</p>
              <p className="text-sm text-gray-500">{product["Flavor"]}</p>
            </div>
            <div className="h-[0.5px] w-1/2 bg-gray-400 mt-2"></div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <p>Type</p>
              <p className="text-sm text-gray-500">{product["Sub Category"]}</p>
            </div>
            <div className="h-[0.5px] w-2/4 bg-gray-400 mt-2"></div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Weight</p>
            <div className="text-sm text-gray-500 flex">
              {product["Weights"] ? (
                product["Weights"].map((weight, index) => (
                  <p key={weight} className="mr-1">
                    {weight < 1 ? `${weight * 1000} g` : `${weight} kg`}
                    {index === product["Weights"].length - 1 ? "." : ","}
                  </p>
                ))
              ) : (
                <p>
                  {product["Weight (Kg's)"] && product["Weight (Kg's)"] < 1
                    ? `${product["Weight (Kg's)"] * 1000} g`
                    : `${product["Weight (Kg's)"]} kg`}
                </p>
              )}
            </div>
            <div className="h-[0.5px] w-2/4 bg-gray-400"></div>
          </div>
        </div>

        {/* <div className="flex mt-10 items-center gap-3">
          <h1 className="text-lg font-semibold">Buy this on : </h1>
          <div className="flex justify-center items-center gap-5">
            <a
              href={
                product["Brand Name"]?.toLowerCase().includes("smartheart")
                  ? "https://www.amazon.in/stores/page/E5497ECC-AE5B-4529-821B-24CA16EFE747?ingress=0&visitId=99cf1ca7-c56b-449c-97e4-9503f8a8affa"
                  : product["Brand Name"]?.toLowerCase().includes("me-o")
                  ? "https://www.amazon.in/stores/page/67322618-9384-47AF-8F88-C82E1E0EA3CD?ingress=0&visitId=1137950c-67fc-4bf0-abcc-0cc18ece13f6"
                  : "https://www.amazon.in"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/amazon-full-logo.svg"
                alt="Amazon"
                className="w-24 h-auto transition-transform hover:scale-110 -mb-2"
              />
            </a>
            <a
              href={
                product["Brand Name"]?.toLowerCase().includes("smartheart")
                  ? "https://www.flipkart.com/search?q=pet+food&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3Dsmart%2Bheart"
                  : product["Brand Name"]?.toLowerCase().includes("me-o")
                  ? "https://www.flipkart.com/search?q=Me-O+Cat+Food&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3DMe-O"
                  : "https://www.flipkart.com"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/flipkart.png"
                alt="Flipkart"
                className="w-28 h-auto -ml-2"
              />{" "}
            </a>
          </div>
        </div> */}
      </div>
      {/* Mobile View  */}

      <ProductBenefits
        Benefits={product["Benefits"]}
        Other_Info={product["Othe Info"]}
      />

      <RelatedProducts />

      <AllProducts />
      <Footer />
    </main>
  );
};

export default ProductDetails;
