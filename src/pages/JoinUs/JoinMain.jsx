import React from 'react'
import factory from "/assets/factory.png"
import bonus from "/assets/bonus.png"
import help from "/assets/help.png"
import salary from "/assets/salary.png"
import heal from "/assets/heal.png"

function JoinMain() {
  return (
    <main>
        <section>
        <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
            <p className='mb-4 text-blue-400 text-xl ml-4'>Join Us</p>
          <h1 className="lg:text-6xl text-4xl  lg:mb-6 mb-4 text-blue-900">Join Our Family</h1>
          <div className=' text-xl max-w-2xl '>
          <p className=" text-zinc-600 mb-6">
              At Perfect Companion India, We value personal resources because they are the cornerstone of economic, social and corporate mobility. Let's move forward and grow sustainably.
          </p>
          <p className=" text-blue-900 mb-6">
            To be able to work efficiently in the ever-changing world of technology and prepare for the rapid expansion of the company's business to work in Thailand and all regions of the world.
          </p>
          <p className=" text-zinc-600">
            Employees are an important part of making the company strong, growing and successful.
          </p>
          </div>
        </div>
        <div>
          <img
            src={factory}
            alt="Office building"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
</section>
            <section>
            <div className="container mx-auto lg:px-20 px-8 py-8">
  <h2 className="text-3xl lg:text-5xl text-blue-900 mb-8">Benefits in return</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="bg-white border-2 shadow-md px-6 py-4 text-center flex flex-col items-center">
      <img src={bonus} alt="PCIN" className="mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Annual Bonus</h3>
      
    </div>
    <div className="bg-white border-2 shadow-md px-6 py-4 text-center flex flex-col items-center">
      <img src={salary} alt="PCIN" className="mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Annual adjustment</h3>
      
    </div>
    <div className="bg-white border-2 shadow-md px-6 py-4 text-center flex flex-col items-center">
      <img src={heal} alt="PCIN" className="mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Medical Expenses</h3>
     
    </div>
    <div className="bg-white border-2 shadow-md px-6 py-4 text-center flex flex-col items-center">
      <img src={help} alt="PCIN" className="mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Employee grants</h3>
      
    </div>
  </div>
</div>

            </section>
    </main>
  )
}

export default JoinMain