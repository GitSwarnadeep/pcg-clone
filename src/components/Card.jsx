import React from "react";

function Card({ image, title, description }) {
  return (
    <div className="bg-white text-center shadow-md p-6 flex flex-col items-center justify-center h-[350px] w-[350px]">
      {image && (
        <img src={image} alt={title} className="w-24 h-24 object-cover mb-4" />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

export default Card;
