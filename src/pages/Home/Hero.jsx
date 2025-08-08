import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import bgPic1 from "/Banner/SH - 2.jpg"
import bgPic2 from "/Banner/Me-O 1.jpg"
import Slider from '../../components/Slider';
import "../../App.css";

const slidesData = [
  {
    bgpic: bgPic1,
    heading: "SmartHeart | Best nutrition for a Healthy, Happy Dog",
    text: "Trusted brand for premium dog food designed to boost health and vitality. SmartHeart delivers complete and balanced nutrition for your furry friend",
    button: "See More Details",
    link: "/about", 
  },
  {
    bgpic: bgPic2,
    heading: "Me-O | Premium Nutrition for Cats",
    text: "Discover Me-O cat food, a trusted brand for delicious and nutritious meals. Ensure your cat’s health, energy, and happiness with every bite.",
    button: "See More Details",
    link: "/about",
  },
  
  
];

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[40%] lg:top-1/2 right-6 transform -translate-y-1/2 text-white border rounded-full p-2 cursor-pointer z-10"
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[40%] lg:top-1/2 left-6 transform -translate-y-1/2 text-white border rounded-full p-2 cursor-pointer z-10"
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

function Hero() {
  return (
    <div>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <SampleNextArrow onClick={onClickHandler} />
        }
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <SamplePrevArrow onClick={onClickHandler} />
        }
      >
        {slidesData.map((slide, index) => (
          <div key={index}>
            <Slider
              bgpic={slide.bgpic}
              heading={slide.heading}
              text={slide.text}
              button={
                <Link
                  to={slide.link}
                >
                  {slide.button}
                </Link>
              }
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
