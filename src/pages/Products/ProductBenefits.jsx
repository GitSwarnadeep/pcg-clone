import React, { useState } from "react";

const ProductBenefits = ({ Benefits, Other_Info }) => {
  const [filter, setFilter] = useState("Benefit");

  const data = [
    {
      type: "Benefit",
      title: "Benefit",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil et, qui saepe quidem incidunt nobis pariatur, corporis nisi rem aliquam aspernatur? At, laborum unde porro ex quidem iusto velit dignissimos!",
    },
    {
      type: "OtherInfo",
      title: "Other Info",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu et neque cursus, vitae tincidunt felis lacinia. Duis at lectus vitae magna sollicitudin iaculis.",
    },
  ];

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  // Splitting Benefits into individual points and filtering out empty values
  const benefitsList = Benefits
    ? Benefits.split(/[\r\n]+|(?<=\.)\s*|•\s*/).filter((point) => point.trim() !== "")
    : [];

  // Splitting Other_Info into individual points and filtering out empty values
  const otherInfoList = Other_Info
    ? Other_Info.split(/[\r\n]+|(?<=\.)\s*|•\s*/).filter((point) => point.trim() !== "")
    : [];

  const filteredContent = data.find((item) => item.type === filter);
  return (
    <div className="flex flex-col p-6 lg:p-10 lg:px-32">
      {/* Filter Tabs */}
      <div className="flex flex-row mb-9 justify-center items-center gap-4 lg:gap-0">
        {data.map((item) => (
          <button
            key={item.type}
            className={`p-2 w-full sm:w-1/3 px-4 sm:px-16 border-b-2 border-blue-500 rounded text-xs lg:text-lg ${
              filter === item.type
                ? "text-blue-500 border-t-2 border-r-2 border-l-2 border-blue-500"
                : "text-gray-700"
            } rounded-lg transition-colors`}
            onClick={() => handleFilterChange(item.type)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Filtered Content */}
      {filteredContent && (
        <div>
          {/* Conditional layout based on the selected filter */}
          {filter === "Benefit" && (
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Benefits of Our Pet Food
                </h2>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {benefitsList.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {filter === "OtherInfo" && (
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Other Important Information
                </h2>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {otherInfoList.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductBenefits;
