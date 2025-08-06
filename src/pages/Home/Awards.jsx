import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../Slider.module.css";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// Custom Arrow Components
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg lg:right-8"
      onClick={onClick}
    >
      <FaChevronRight className="text-[#4A4A4A] text-xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg lg:left-8"
      onClick={onClick}
    >
      <FaChevronLeft className="text-[#4A4A4A] text-xl" />
    </div>
  );
}


const Awards = () => {
  const awards = [
    {
      title: "The Winner Bitch At Pomeranian national specialty 2023",
      description:
        "Karaket is the youngest Pomeranian in history to win the Best in Show All Breeds award at just 6 months old. Her most recent achievement is winning The Winner Bitch at the Pomeranian National Specialty 2023. She was recognized as the most beautiful female Pomeranian at the world's premier Pomeranian event, the Nationals of the American Pomeranian Club, which featured over 450 competitors, including multiple world champions from around the globe.",
      images: "/assets/awards1.png",
    },
    {
      title: "LKC All Breed Dog show  19 March 2023 at Louisville Kentucky USA",
      description:
        "At the LKC All Breed Dog Show in Louisville, Kentucky, USA, with over 40 competition rings and a total of 4000 dogs participating, Karaked achieved the awards of Best of Winner and Best Opposite Sex.",
      images: "/assets/awards2.png",
    },
    {
      title:
        "MUL.BIS.BISS.Gr.Am.Gr.Th.Int.APAC. Ch.Perfect Companion's Bruce Almighty “Bruce”",
      description:
        "Bruce, Thailand's number one Beagle for five consecutive years (2014, 2015, 2016, 2017, and 2018), is the first Beagle in history to become Thailand's Number 1 Dog of All Breeds. He held the top spot for all breeds in the country for two consecutive years (2015 and 2016). Bruce is a champion in nine countries, with over 50 Best in Show wins and more than 150 Best in Group awards. He represented Thailand at the World Challenge in 2015 (Amsterdam) and 2016 (Birmingham) and the World Dog Show in 2017 (Germany).",
      images: "/assets/awards3.png",
    },
    {
      title: "BIS.Grand.Am.Th.Ch.Perfect Companion's Lintas",
      description:
        "Lintas, America's Number 1 Beagle 13 in 2015, achieved the highest honors by winning Best in Show in the United States. He also earned multiple Best in Group awards and numerous Group placements across various competitions in the country, securing his position as the top-ranked 13 Beagle in the United States for 2015.",
      images: "/assets/awards4.png",
    },
    {
      title: "Grand.Am.Ch.Perfect Companion's SH Calls me Sam",
      description:
        "Sam, the Number 1 Toy Poodle of America in 2016, achieved the title from SmartHeart. Sam earned the American Champion title as a puppy, winning Best of Variety and Group Placements in the Toy group, a challenging feat for a young dog. Sam also won the 9-12 months category at the largest Poodle event in the United States, the Poodle Club of America show. Currently, Sam holds the Grand American Champion title and was the top Toy Poodle in America in 2016.",
      images: "/assets/awards5.png",
    },
    {
      title: "MUL.BIS.BISS.Indo.Phil.Th.Grand.Ch.Ewan",
      description:
        "Ivan, a Golden Retriever, was Thailand's Number 1 Sporting Dog in 2017, 2018, and 2019. Ivan also ranked in the Top 5 All Breeds across all categories, recognized by SmartHeart and Perfect Companion Group.",
      images: "/assets/awards6.png",
    },
    {
      title:
        "MUL. BIS.BISS.Grand Ch.Perfect Companion's SH Life and Destiny Karakate",
      description:
        "Karaked, the Number 1 Pomeranian in Thailand for 2020, achieved the highest honor of Back-to-Back Best in Show All Breeds at the prestigious SmartHeart presents Thailand's International Dog Show 2020 held at Impact Muang Thong Thani from November 5-8, 2020. Karaked is also the youngest Pomeranian in history to win Best in Show before reaching seven months old and earned the title of Grand Champion at just one year of age.",
      images: "/assets/awards7.png",
    },
    {
      title:
        "MUL.BIS.Grand.Th.Ch.Perfect Companion's SH You're My Everything “Byukin”",
      description:
        "Number 1 Beagle 2021-2022 , Number 1 Hound, Top 5 All Breeds , Billkin, the Number 1 Beagle in Thailand for 2021-2022, achieved the highest honor of Best in Show from highly regarded all-breed judges, along with Best in Specialty in Show awards at events held at Impact and Central Eastville. Billkin completed the Grand Champion title impressively by winning Best in Show, the highest accolade, before reaching the age of two. Billkin also earned the most Best of Breed wins in 2021 and 2022, making history as the Beagle with the most top honors of the year and solidifying the position as Thailand's Number 1 Beagle in both the Breed System and All Breed System.",
      images: "/assets/awards8.png",
    },
  ];

  const sliderSettings = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
    ],
  };

  return (
    <>
      {/* Desktop View  */}
      <div className="w-full py-12 px-5 text-center bg-white hidden lg:inline-block flex-col justify-center ">
        <h1 className="text-7xl font-bold text-[#19325b] mb-10">
          Awards and Achievements
        </h1>
        <div className="px-5">
          <Slider {...sliderSettings}>
            {awards.map((award, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${styles.slickSlideOverride}`}
              >
                <div className="flex items-center bg-[#19325b] shadow-lg overflow-hidden p-10 space-x-10 w-[600px] h-[500px]">
                  <div className="text-white text-center lg:text-left space-y-6 pr-10 ">
                    <h2 className="text-xl font-semibold break-words">
                      {award.title}
                    </h2>
                    <p className="">{award.description}</p>
                    <button className="border-2 border-white text-white font-medium py-3 px-8 hover:bg-white hover:text-[#19325b] transition duration-300">
                      Read More <span className="ml-4">&gt;</span>
                    </button>
                  </div>
                </div>
                <img
                  src={award.images}
                  alt={award.title}
                  className="w-[450px] h-auto object-cover -ml-12"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Desktop View  */}

      {/* Mobile View */}
      <div className="w-full py-12  text-center bg-white  block lg:hidden">
        <h1 className="text-5xl font-bold text-[#19325b] mb-10">
          Awards and Achievements
        </h1>

        <div className="max-w-7xl mx-auto px-5 relative">
          <Slider {...sliderSettings}>
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center bg-[#19325b] rounded-lg shadow-lg overflow-hidden p-10 lg:space-x-10"
              >
                <div className="lg:w-1/2 text-white text-center lg:text-left space-y-6">
                  <h2 className="text-3xl font-semibold break-words">
                    {award.title}
                  </h2>
                  <p className="text-lg leading-relaxed">{award.description}</p>
                  <button className="border-2 border-white text-white font-medium py-3 px-8 hover:bg-white hover:text-[#19325b] transition duration-300">
                    Read More <span className="ml-4">&gt;</span>
                  </button>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                  <img
                    src={award.images}
                    alt={award.title}
                    className="w-full h-auto object-cover rounded-lg py-5"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Mobile View */}
    </>
  );
};

export default Awards;
