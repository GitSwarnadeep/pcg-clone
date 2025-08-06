import { Link } from "react-router-dom";
import logo from "/assets/logo.webp";
import youtube from "/assets/youtube.png";
import facebook from "/assets/facebook.png";
import twitter from "/assets/twitter.png";
import instagram from "/assets/instagram.png";
import linkedin from "/assets/linkedin.png";
import threads from "/assets/threads.png";
import products from "../constants/product_2.json";

function categories(jsonData) {
  const products = jsonData.products;
  const categoryList = new Set();

  products.forEach((product) => {
    const category = product.Category;
    categoryList.add(category);
  });

  return Array.from(categoryList);
}

const categoryList = categories(products);

function Footer() {
  return (
    <footer className="bg-[#19325b] text-white">
      <div className="container mx-auto px-16 py-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <div className="flex items-center mb-4">
            <div className="bg-white px-4">
              <img
                src={logo}
                alt="Company Logo"
                className="w-20 items-center object-cover"
              />
            </div>
          </div>
          <h2 className="text-lg font-bold mb-2">
            Perfect Companion India Private Limited
          </h2>
          <p className="mb-2">
            Plot No 26, Industrial Area, Kasna, Ecotech 1 Extn,
          </p>
          <p className="mb-2">GREATER NOIDA,</p>
          <p className="mb-2">Gautam Buddha Nagar, Uttar Pradesh, 201308</p>
          <p className="mb-2">Mob: +91 9940625518</p>
          {/* <p className="">Email: care.smartheart@gmail.com | care.meoindia@gmail.com</p> */}
          {/* <p className="ml-12">care.meoindia@gmail.com</p> */}
          <div className="flex gap-2">
            <p>Email : </p>
            <div>
              <p>care.smartheart@gmail.com</p>
              <p>care.meoindia@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <ul className="list-disc ml-4">
            <li>
              <Link to="/about#company" className="hover:underline">
                Company Background
              </Link>
            </li>
            <li>
              <Link to="/about#vision-mission" className="hover:underline">
                Vision and Mission
              </Link>
            </li>
            <li>
              <Link to="/about#manufacturing" className="hover:underline">
                Manufacturing Plant
              </Link>
            </li>
            <li>
              <Link to="/tvc" className="hover:underline">
                News & Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Office
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h2 className="text-lg font-bold mb-4">Products</h2>
          <ul className="list-disc ml-4">
            {categoryList.map((category) => (
              <li key={category}>
                <div className="relative">
                  <Link
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="flex items-center hover:underline justify-between w-full text-lg"
                  >
                    {category}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-lg font-bold mb-4">Follow News</h2>
            <div className="flex justify-center gap-4">
              {/* <a
                href="https://www.youtube.com/user/PCGperfectcompanion"
                className="size-14"
              >
                <img src={youtube} alt="Youtube" />
              </a> */}
              <a href="https://www.facebook.com/smartheart.india" target="_blank"
                rel="noopener noreferrer" className="size-9">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.threads.net/@smartheart_india" target="_blank"
                rel="noopener noreferrer" className="size-10">
                <img src={threads} alt="Threads" />
              </a>
              <a
                href="https://www.instagram.com/smartheart_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/perfect-companion-india-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] mb-2 bg-[#787e87]"></div>

      <div className="bg-[#19325b] text-white">
        <div className="container mx-auto text-center lg:flex justify-between items-center">
          <p>
            COPYRIGHT @ 2003 2021 PERFECT COMPANION GROUP ALL RIGHTS RESERVED
          </p>
          <div className="mt-2 flex justify-center items-center">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <div className="w-[2px] h-6 mx-2 bg-[#ffffff]"></div>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <div className="w-[2px] h-6 mx-2 bg-[#ffffff]"></div>
            <a href="#" className="hover:underline">
              International Network
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
