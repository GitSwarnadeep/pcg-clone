import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import youtube from "/assets/youtube.png";
import facebook from "/assets/facebook.png";
import threads from "/assets/threads2.jpg";
import instagram from "/assets/instagram.png";

const SocialMediaSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const socialMediaLinks = [
    {
      platform: "Facebook",
      icon: facebook,
      name: "SmartHeart",
      url: "https://www.facebook.com/smartheart.india",
    },
    {
      platform: "Instagram",
      icon: instagram,
      name: "SmartHeart",
      url: "https://www.instagram.com/smartheart_india/",
    },
    {
      platform: "Twitter",
      icon: threads,
      name: "SmartHeart",
      url: "https://www.threads.net/@smartheart_india",
    },
    {
      platform: "Facebook",
      icon: facebook,
      name: "SmartHeart Gold",
      url: "https://www.facebook.com/@SmartHeartGoldIndiaa/",
    },
    {
      platform: "Instagram",
      icon: instagram,
      name: "SmartHeart Gold",
      url: "https://www.instagram.com/smartheart_gold_india/",
    },
    {
      platform: "Threads",
      icon: threads,
      name: "SmartHeart Gold",
      url: "https://www.threads.net/@smartheart_gold_india",
    },
    {
      platform: "Facebook",
      icon: facebook,
      name: "Me-O",
      url: "https://www.facebook.com/MeOIndiaCatFood",
    },
    {
      platform: "Twitter",
      icon: threads,
      name: "Me-O",
      url: "https://www.threads.net/@meo.india1",
    },
    {
      platform: "Instagram",
      icon: instagram,
      name: "Me-O",
      url: "https://www.instagram.com/meo.india1/",
    },
    // {
    //   platform: "Facebook",
    //   icon: facebook,
    //   name: "Me-O Gold",
    //   url: "https://www.facebook.com/MeoGoldTH",
    // },

    // {
    //   platform: "Facebook",
    //   icon: facebook,
    //   name: "Optimum",
    //   url: "https://www.facebook.com/optimumclubthailand?ref=hl",
    // },
    // {
    //   platform: "Facebook",
    //   icon: facebook,
    //   name: "APro I.Q. Formula",
    //   url: "https://www.facebook.com/AProIQFormula",
    // },

    // {
    //   platform: "Instagram",
    //   icon: instagram,
    //   name: "Me-O Gold",
    //   url: "https://www.instagram.com/meogold/",
    // },

    
  ];

  return (
    <div className="lg:sticky bottom-0 w-full bg-white z-20 overflow-hidden py-2">
      <div className="hidden lg:block pt-1">
        <Slider {...settings} className="flex items-center">
          {socialMediaLinks.map((link, index) => (
            <div key={index} className="text-center   px-4">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-1 items-center "
              >
                <div className="w-10 h-10">
                  <img
                    src={link.icon}
                    alt={`${link.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">{link.name}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="block lg:hidden">
        <div className="grid grid-cols-2 gap-4 text-center">
          {socialMediaLinks.map((link, index) => (
            <div key={index} className="flex items-center space-x-4">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <div className="w-10 h-10">
                  <img
                    src={link.icon}
                    alt={`${link.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="ml-2 text-sm font-medium text-gray-700">{link.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-6 transform -translate-y-1/2  text-black border rounded-full p-2 cursor-pointer z-10"
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
      className="absolute top-1/2 left-6 transform -translate-y-1/2 b text-black border rounded-full p-2 cursor-pointer z-10"
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default SocialMediaSlider;

