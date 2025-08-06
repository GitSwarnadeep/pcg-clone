import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSearch, IoMdClose } from "react-icons/io";

const StoreLocator = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  const handleLocation = () => {
    alert('Using current location');
  };

  return (
    <div className="flex flex-col justify-center items-center lg:py-32 py-8 px-2 bg-gray-100">
      <div className="bg-white  rounded-lg p-10 w-full lg:max-w-7xl  text-center border-2">
        <h2 className="lg:text-6xl text-3xl text-gray-800 my-4">
          Find a Veterinary Diet store
        </h2>
        <p className="text-blue-800 font-semibold lg:text-2xl my-6">
          Enter your postal code or address below.
        </p>
        
        {/* Search bar container with relative positioning */}
        <div className="relative my-4 max-w-3xl mx-auto">
  <input
    type="text"
    placeholder="Search by postal code, city, or area"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border-2 border-black rounded-md py-3 px-4 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  {/* Search button positioned inside the input field */}
  <button
    onClick={handleSearch}
    className="absolute top-0 right-0 h-full bg-blue-900 hover:bg-blue-800 text-white px-4 rounded-r-md flex items-center justify-center"
  >
    <IoMdSearch className="w-6 h-6" />
  </button>
</div>

        
        <div className="text-gray-500 mb-4">or</div>
        
        {/* Centering the location button below the search bar */}
        <button
          onClick={handleLocation}
          className="flex items-center justify-center mx-auto gap-2 px-6 py-2 border border-blue-900 text-blue-900 rounded-full"
        >
          <FaLocationDot />
          Use my current location
        </button>
      </div>
    </div>
  );
};

export default StoreLocator;
