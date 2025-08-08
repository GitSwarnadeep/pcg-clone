import React from 'react'

function MissionCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 lg:w-[350px] space-y-4">
      <div className="flex flex-col items-start">
        <img src={icon} alt="ICON" className=" mb-4" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default MissionCard;
