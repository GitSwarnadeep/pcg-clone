import React from 'react'
import bg3 from '/assets/bg3.png';

function AboutExperience() {
  return (
    <div
      className="text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="container mx-auto flex flex-col items-center gap-12 relative z-10 py-16">
        <div className="flex flex-wrap justify-center gap-10 md:gap-32">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl lg:text-9xl lg:mb-4 ">42</h1>
            <p className="text-sm lg:text-2xl font-medium">Years of Experience</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-6xl lg:text-9xl lg:mb-4 ">40</h1>
            <p className="text-sm lg:text-2xl font-medium">Network Countries</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-6xl lg:text-9xl lg:mb-4 ">20</h1>
            <p className="text-sm lg:text-2xl font-medium">Brands</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutExperience;
