import useCategoryStore from "../../utils/store";
import bgAllProducts from "/assets/bgAllProducts.png";
import bgDogFood from "/Banner/Dog Food Category Banner.jpeg.jpg";
import bgCatFood from "/Banner/Cat Food Category Banner.jpeg.jpg";
import bgRabbitFood from "/Banner/1940 X 400 Rabbit Food.jpg";
import bgHamsterFood from "/Banner/1940 X 400 Hamester Food.jpg";
import bgFishFood from "/Banner/1940 X 400 Fish Food.jpg";
import bgBirdFood from "/Banner/1940 X 400 Bird Food.jpg";
import bgLitter from "/Banner/1940 X 400 Cat Litter.jpg";
import bgRodent from "/Banner/1940 X 400 Rodent Food.jpg";
import defaultBg from "/Banner/1940 X 400 Dog Food.jpg";

const ProductHero = () => {
  const category = useCategoryStore((state) => state.category);

  const bgImage =
    category === ""
      ? bgAllProducts
      : category === "Dog Food"
      ? bgDogFood
      : category === "Cat Food"
      ? bgCatFood
      : category === "Rabbit Food"
      ? bgRabbitFood
      : category === "Hamster Food"
      ? bgHamsterFood
      : category === "Fish Food"
      ? bgFishFood
      : category === "Bird Food"
      ? bgBirdFood
      : category === "Litter"
      ? bgLitter
      : category === "Rodent Food"
      ? bgRodent
      : defaultBg;

  return (
    <section>
      <div
        className="relative bg-cover bg-center text-white p-10 flex items-center justify-center lg:justify-between h-[300px] lg:h-[300px]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="text-white max-w-lg text-center lg:text-left lg:ml-[10%]"></div>
      </div>
    </section>
  );
};

export default ProductHero;
