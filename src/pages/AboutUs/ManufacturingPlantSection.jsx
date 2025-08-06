import React from 'react';
import manufacture from '/assets/manufacture.png';

const ManufacturingPlantSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start  justify-between px-6 lg:px-[10%] py-12 lg:gap-12">
     
      <div className="lg:w-1/2">
        <h4 className="text-blue-600 lg:text-2xl text-xl font-semibold">Manufacturing Plant</h4>
        <h2 className="text-4xl lg:text-6xl text-gray-800 lg:my-6 mt-2">Perfect Companion Group</h2>
        <p className="text-gray-500 text-lg mt-4 leading-relaxed">
          The concept of pet food in the market nowadays is following that of human food. Modern pet owners carefully select food for their pets as they want to be certain that the food is safe, hygienic, and healthy for them. As we are fully aware of this important market trend, we thus always keep our production facility highly standardized. Continuous Investment to bring up and maintain our manufacturing establishment at international standard has become one of our key success factors in this severely competitive industry.
        </p>
        <p className="text-gray-500 mt-6 text-lg leading-relaxed">
          Not only the fact that we have been the first pet food manufacturer in Thailand who were awarded with the ISO 9002 certification, but because of the continuity in facility development we have also become the very first to be accredited with the internationally recognizable certifications of ISO9001:Version2000 from SGS, Good Manufacturing Practice (GMP), and Hazard Analysis and Critical Control Point System (HACCP) from Department of Livestock Development, Ministry of Agriculture and Cooperatives of Thailand. Additionally, in regard to the food, all pet food produced at our facility are formulated to meet or surpass the nutritional levels established by the US National Research Council (NRC) and the Association of American Feed Control Officials (AAFCO) Nutrient Profiles for each pet specie. From all of our credit, we are able to guarantee that quality ideals are strictly followed in every production process at our facility to ensure best practices and product excellence for our customers.
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
