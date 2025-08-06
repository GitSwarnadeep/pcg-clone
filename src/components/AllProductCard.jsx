import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllProductCard = ({ title, image, path, link }) => {
  return (
    <div className="border w-fit h-fit px-4 py-5 bg-slate-50">
      <img src={image} alt={title} />
      <h1 className="text-xl text-center py-2 text-[#19325b] font-semibold">
        {title}
      </h1>
      <div className="flex flex-col gap-2 font-medium">
        <Link
          to={path}
          className="flex justify-center gap-2 border-2 border-[#19325b] w-full py-3 rounded-lg text-center hover:bg-[#19325b] hover:text-white transition duration-300"
        >
          See More <span className="font-bold">&gt;</span>
        </Link>
        {/* <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center gap-2 border-2 border-[#19325b] w-full py-3 rounded-lg hover:bg-[#19325b] hover:text-white transition duration-300">
            Shop Online{" "}
            <span>
              <FaShoppingCart />
            </span>
          </button>
        </a> */}
      </div>

    </div>
  );
};

export default AllProductCard;
