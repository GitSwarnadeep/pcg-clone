import React from "react";
import Card from "../../components/Card";
import cloud from "/assets/cloud.png";
import vission1 from "/assets/vission1.png";
import vission2 from "/assets/vission2.png";
import vission3 from "/assets/vission3.png";
import vission4 from "/assets/vission4.png";
import vission5 from "/assets/vission5.png";

function VisionAndMission() {
  return (
    <div
      className="relative bg-cover bg-center p-6 lg:mt-24"
      style={{ backgroundImage: `url(${cloud})` }}
    >
      <div className="absolute inset-0 bg-white opacity-30 "></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white "></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl lg:text-7xl font-bold mb-4 text-[#19325b] text-center">
          Vision and Mission
        </h2>
        <p className="text-lg text-[#19325b] font-semibold text-center w-full max-w-6xl mx-auto my-8">
          Perfect Companion Group Co., Ltd. was founded with the objective to
          take the quality of life of both the owners and the pets to the next
          level. By attentively creating and constantly developing our products,
          we are confident that our products and services will play a part in
          building a strong bond between you and your pets.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Card
            image={vission1}
            title="Our Organization"
            description="We are a leading company specializing in the development, production, and distribution of pet food and pet products."
          />
          <Card
            image={vission2}
            title="Products and Services"
            description="We will continue to innovate and develop quality products for customers, and we believe that our products and services will help customers achieve the highest satisfaction."
          />
          <Card
            image={vission3}
            title="Customer Service"
            description="Various breeds of equipment and pet food for you to choose from. Quality guarantee and safety from experts."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Card
            image={vission4}
            title="Our Staff"
            description="We are committed and ready to enhance the potential and knowledge of our employees to ensure maximum efficiency."
          />
          <Card
            image={vission5}
            title="Sustainability"
            description="We are dedicated to operating sustainably, with a foundation built on responsibility towards the economy, society, and the environment. Our goal is to creatively generate lasting benefits for the nation."
          />
        </div>
      </div>
    </div>
  );
}

export default VisionAndMission;
