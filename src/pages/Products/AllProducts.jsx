import Slider from "react-slick";
import AllProductCard from "../../components/AllProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AllProducts = () => {
  const allProduct = [
    {
      title: "Dog Foods",
      image: "/assets/allDog.png",
      link: "https://www.amazon.in/s?k=SmartHeart+Dog+Food&i=pets&crid=2SN4QBWU1K4DV&sprefix=smart+heart+dog+food%2Cpets%2C236&ref=nb_sb_noss_1",
    },
    {
      title: "Cat Foods",
      image: "/assets/allCat.png",
      link: "https://www.amazon.in/s?k=meo+cat+Food&i=pets&crid=18ASHDO4UP30S&sprefix=meo+cat+food%2Cpets%2C218&ref=nb_sb_noss_1",
    },
    {
      title: "Fish Foods",
      image: "/assets/allFish.png",
      link: "https://www.amazon.in/s?k=Optimum+fish+food&i=pets&rh=n%3A4771339031%2Cp_6%3AA2AL6IVND0I91F&dc&crid=1BKXNMWUNPS6K&qid=1735621981&rnid=1318474031&sprefix=optimum+fish+food%2Caps%2C320&ref=sr_nr_p_6_7&ds=v1%3AqaPc5jckLP%2F1ggGXfONo9oZcytbT7zxAHd1ouKFHfh8",
    },
    {
      title: "Rabbit Foods",
      image: "/assets/allRabbit.png",
      link: "https://www.amazon.in/Smart-Heart-Rabbit-Apple-Food/dp/B07JQCTF1W/ref=sr_1_1?dib=eyJ2IjoiMSJ9.zto-ZR16jI52GKoEk-XkgroP0yJzbyQNjSgZDh7rCWhNbogMtXV-cK0-CJfOHRlgpQphreXQs40GUwahMkKVy80OObh6mVk0C0e8ppVrlzJY-2abJYxYQS-GszvZ-1xCO5LejtN9ZS_GuSE23PvZM6FV5kNAiF18rgcis1m-X3hXl7iI0M0O_sB44eg-snEpnYtxgulcLSOALi96lQQSvE8YN3Drm3z0VnH-5jhg8hPoMEvWzgz3NZeiyScnXkyYTyrqloHhv64QlTZ2xCCXkPAfmEfHnwEVzmqt1jic7LgranL6NEZvI-EoBfDFSud0J9YTthTyQg9_-HEK1Vi1tWMYKNrmcDHZo0uWYuwNBuk.D6_BxSOZSa6n5OBRqIDSBnmDRSB5j6wNcTYbrL_Qc_Q&dib_tag=se&keywords=SmartHeart+Rabbit+Food&nsdOptOutParam=true&qid=1735622115&s=pet-supplies&sr=1-1",
    },
    {
      title: "Hamster Foods",
      image: "/assets/allHamster.png",
      link: "/shop/hamster-foods",
    },
    {
      title: "Litter",
      image: "/assets/petSupplies.png",
      link: "/shop/litter",
    },
  ].map((product) => ({
    ...product,
    path: `/products?category=${encodeURIComponent(
      product.title.replace(/s$/, "") 
    )}`,
  }));

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
    <div className="mb-5 py-10 bg-slate-100 px-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl text-sky-600 font-medium">All Products</h1>
        <h1 className="text-5xl tracking-wide text-[#19325b] font-semibold">
          Products for beloved pets
        </h1>
      </div>
      <Slider {...sliderSettings} className="mt-10">
        {allProduct.map((product, index) => (
          <div key={index} className="px-3">
            <AllProductCard
              title={product.title}
              image={product.image}
              path={product.path}
              link={product.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllProducts;
