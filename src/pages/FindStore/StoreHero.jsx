import React from 'react'
import store from "/assets/store.png";

function StoreHero() {
  return (
    <section>
    <div
      className="relative bg-cover bg-center text-white p-10 flex items-center justify-center lg:justify-between lg:h-[48vh]"
      style={{
        backgroundImage: `url(${store})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#19325b] to-transparent"></div> */}
      
      <div className="text-white lg:max-w-4xl max-w-xs text-center lg:text-left lg:ml-[10%]">
        <h1 className="text-4xl lg:text-6xl">Find a Veterinary Diet store</h1>
      </div>
    </div>
  </section>
  )
}

export default StoreHero