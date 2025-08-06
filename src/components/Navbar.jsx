import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "/assets/logo.webp";
import products from "../constants/products.json";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleDropdownToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const queryWords = query.toLowerCase().split(/\s+/);
      const results = products.products.filter((product) =>
        ["PRODUCTS DISCRIPTION", "Brand Name", "Sub Category", "Flavor"].some(
          (field) =>
            product[field] &&
            queryWords.every((word) =>
              product[field].toLowerCase().includes(word)
            )
        )
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  function brandsByCategory(jsonData) {
    const products = jsonData.products;
    const categoryBrands = {};

    products.forEach((product) => {
      const category = product.Category;
      const brand = product["Brand Name"];

      if (!categoryBrands[category]) {
        categoryBrands[category] = new Set();
      }

      categoryBrands[category].add(brand);
    });

    Object.keys(categoryBrands).forEach((category) => {
      categoryBrands[category] = Array.from(categoryBrands[category]);
    });

    return categoryBrands;
  }

  function dynamicMenuItems(menuItems, jsonData) {
    const categoryBrands = brandsByCategory(jsonData);

    return menuItems.map((item) => {
      if (item.label === "Products" && categoryBrands) {
        return {
          ...item,
          items: Object.entries(categoryBrands).map(([category, brands]) => ({
            label: category,
            path: `/products?category=${encodeURIComponent(category)}`,
            items: brands.map((brand) => ({
              label: brand,
              path: `/products?category=${encodeURIComponent(
                category
              )}&brand=${encodeURIComponent(brand)}`,
            })),
          })),
        };
      }
      return item;
    });
  }

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
      label: "Products",
    },
    // { label: "Find a Store", path: "/store" },
    {
      label: "News",
      items: [
        // { label: "News & Events", path: "/" },
        { label: "TV Commercials", path: "/tvc" },
      ],
    },
    { label: "Blogs", path: "/blogs" },
    {
      label: "Contact Us",
      items: [
        { label: "Contact Us", path: "/contact" },
        { label: "Join Us", path: "/join-us" },
        { label: "International Network", path: "/international-network" },
      ],
    },
    // {
    //   label: "Shop Online",
    //   items: [
    //     {
    //       label: "Amazon",
    //       items: [
    //         {
    //           label: "SmartHeart",
    //           path: "https://www.amazon.in/stores/page/E5497ECC-AE5B-4529-821B-24CA16EFE747?ingress=0&visitId=99cf1ca7-c56b-449c-97e4-9503f8a8affa",
    //           external: true,
    //         },
    //         {
    //           label: "Me-O",
    //           path: "https://www.amazon.in/stores/page/67322618-9384-47AF-8F88-C82E1E0EA3CD?ingress=0&visitId=1137950c-67fc-4bf0-abcc-0cc18ece13f6",
    //           external: true,
    //         },
    //       ],
    //     },
    //     {
    //       label: "Flipkart",
    //       items: [
    //         {
    //           label: "SmartHeart",
    //           path: "https://www.flipkart.com/search?q=pet+food&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3Dsmart%2Bheart",
    //           external: true,
    //         },
    //         {
    //           label: "Me-O",
    //           path: "https://www.flipkart.com/search?q=Me-O+Cat+Food&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3DMe-O",
    //           external: true,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  const updatedMenuItems = dynamicMenuItems(menuItems, products);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="text-[#19325b] sticky top-0 z-50 shadow-lg bg-white">
      <div className="container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="PCG Logo" className="size-24" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center relative">
          {updatedMenuItems.map((item, index) =>
            item.items ? (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center px-3 text-[#19325b]">
                  {item.label}
                  <FaAngleDown className="ml-2" />
                </button>
                <div
                  className={`absolute left-0 bg-white text-[#19325b] rounded-md shadow-lg py-4 w-64 ${
                    openDropdown === item.label ? "block" : "hidden"
                  }`}
                >
                  {item.items.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="group relative border-b border-gray-200"
                      onMouseEnter={() => setHoveredCategory(subItem.label)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      {subItem.external ? (
                        <a
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 px-4 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          to={subItem.path}
                          className="block py-2 px-4 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      )}
                      {subItem.items && (
                        <div
                          className={`absolute left-full top-0 bg-white text-[#19325b] rounded-md shadow-lg py-4 w-48 ${
                            hoveredCategory === subItem.label
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          {subItem.items.map((subSubItem, subSubIndex) =>
                            subSubItem.external ? (
                              <a
                                key={subSubIndex}
                                href={subSubItem.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-1 px-4 hover:bg-gray-100"
                              >
                                {subSubItem.label}
                              </a>
                            ) : (
                              <Link
                                key={subSubIndex}
                                to={subSubItem.path}
                                className="block py-1 px-4 hover:bg-gray-100"
                              >
                                {subSubItem.label}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={index} to={item.path} className="hover:underline">
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Search Products */}
        <div className="hidden md:flex items-center relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-[#19325b]"
            />
            <IoMdSearch className="absolute right-2 top-2.5 text-xl text-gray-400" />
            {searchResults.length > 0 && (
              <div className="absolute top-12 left-0 bg-white border border-gray-300 shadow-md rounded-md w-full max-h-64 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    to={`/products/${result["PRODUCTS CODE"]}`}
                    onClick={handleSearchResultClick}
                    className="block px-4 py-2 hover:bg-gray-100 border-b"
                  >
                    {result["PRODUCTS DISCRIPTION"]} - {result.Category}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-3xl">
          {isMenuOpen ? <IoMdClose /> : <FiMenu />}
        </button>
        {isMenuOpen && (
          <div className="bg-[#19325b] text-white fixed inset-0 z-50 flex flex-col items-center p-28 w-full ">
            <button
              onClick={toggleMenu}
              className="absolute top-10 right-8 text-3xl"
            >
              <IoMdClose />
            </button>

            {updatedMenuItems.map((item, index) => (
              <div
                key={index}
                className="relative  py-2 w-full text-center text-xl "
              >
                {item.items ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center gap-2  w-full justify-center py-2 "
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <FaAngleDown
                        className={` transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === item.label && (
                      <div className="bg-[#19325b] text-white  w-full  mt-2">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 hover:bg-[#19325b]/70"
                            onClick={toggleMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className="block w-full px-4 py-2 hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
