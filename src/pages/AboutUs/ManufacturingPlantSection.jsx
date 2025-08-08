import React from 'react';
import manufacture from '/assets/manufacture.png';

const ManufacturingPlantSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start  justify-between px-6 lg:px-[10%] py-12 lg:gap-12">
     
      <div className="lg:w-1/2">
        <h4 className="text-blue-600 lg:text-2xl text-xl font-semibold">Manufacturing Plant</h4>
        <h2 className="text-4xl lg:text-6xl text-gray-800 lg:my-6 mt-2">Perfect Companion India (PCIN)</h2>
        <p className="text-gray-500 text-lg mt-4 leading-relaxed">
          At Perfect Companion India, we recognize that today’s pet owners expect pet food to meet the same high standards as human food. To meet these expectations, our manufacturing facilities are maintained at the highest international quality and safety standards, ensuring all pet food is safe, hygienic, and highly nutritious.
Our parent company pioneered the pet food industry in Thailand by becoming the first manufacturer awarded the ISO 9002 certification. We have since advanced to earn internationally recognized certifications including ISO 9001:2015 from SGS, Good Manufacturing Practice (GMP), and HACCP accreditation from Thailand’s Department of Livestock Development, Ministry of Agriculture and Cooperatives.
        </p>
        <p className="text-gray-500 mt-6 text-lg leading-relaxed">
          All pet food produced at our advanced facilities is formulated to meet or exceed the nutritional requirements set by the US National Research Council (NRC) and the Association of American Feed Control Officials (AAFCO) Nutrient Profiles. This rigorous adherence to quality and nutrition standards ensures that every product—whether SmartHeart, Me-O, or other brands—supports the health, happiness, and longevity of pets.
          Perfect Companion India is your trusted source for premium pet food crafted with global quality assurance and scientific nutrition for your beloved companions.
        </p>
      </div>

   
      <div className="lg:w-1/2  lg:mt-0 flex justify-center ">
        <img
          src={manufacture}
          alt="Manufacturing Plant"
          className="rounded-lg w-full lg:w-auto lg:h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ManufacturingPlantSection;
