import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaShare } from "react-icons/fa";
import BlogCard1 from "./BlogCard1";
import BlogCard2 from "./BlogCard2";
import BlogCard3 from "./BlogCard3";
import BlogCard4 from "./BlogCard4";

const blogs = [
  {
    id: 1,
    image: "/assets/blog-pic1.png",
    date: "May 8, 2024",
    title:
      "Introducing 30 cat breeds, both Thai and foreign breeds, cute and worth raising.",
  },
  {
    id: 2,
    image: "/assets/blog-pic2.png",
    date: "May 8, 2024",
    title:
      "Cat hair loss is a serious problem for cat owners. In addition to making the house dirty It may also affect the cat. Let's see what causes cat hair loss to occur.",
  },
  {
    id: 3,
    image: "/assets/blog-pic3.png",
    date: "May 8, 2024",
    title: "When a cat wags its tail What signal is he sending?",
  },
  {
    id: 4,
    image: "/assets/blog-pic3.png",
    date: "May 8, 2024",
    title: "How to Choose the Best Dog Food for Your Pet's Breed and Age",
  },
];

const BlogDetail = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const blog = blogs.find((blog) => blog.id === parseInt(id)); // Find the matching blog
  const navigate = useNavigate();

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // Current page title
          url: window.location.href, // Current page URL
        });
      } catch (error) {
        console.error("Error sharing the URL:", error);
      }
    } else {
      alert("Your browser does not support the Web Share API.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div
          className="hidden relative lg:block"
          style={{
            backgroundImage: "url('/assets/blogs-head-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <h2 className="text-white text-5xl font-medium absolute left-40 bottom-40">
            Blog
          </h2>
        </div>
        {/* Mobile Hero  */}
        <div
          className="block lg:hidden mb-10"
          style={{
            backgroundImage: "url('/assets/blogs-head-img-mob.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        ></div>{" "}
        <div className=" px-10 lg:px-44  py-10 text-[#19325b]">
          <div className="flex flex-col">
            <p className="md:text-lg font-medium mb-5">Home / Blog</p>
            <div className="flex">
              <p className="border  px-3 py-1 rounded-full">Blog</p>
              <h1 className="border  px-3 py-1 rounded-full">{blog.date}</h1>
            </div>

            <div className="mt-5">
              {id === "1" && <BlogCard1 />} {/* Render BlogCard1 if ID is 1 */}
              {id === "2" && <BlogCard2 />} {/* Render BlogCard2 if ID is 2 */}
              {id === "3" && <BlogCard3 />} {/* Render BlogCard2 if ID is 2 */}
              {id === "4" && <BlogCard4 />} {/* Render BlogCard2 if ID is 2 */}
              <button
                onClick={handleShare}
                className="flex items-center border bg-gray-100 text-black font-medium rounded-md py-2 px-5 gap-3 mt-5 mb-10"
              >
                <span>
                  <FaShare />
                </span>
                Share
              </button>
              <button
                className="border border-[#19325b] px-5 py-3 rounded-lg font-medium"
                onClick={() => navigate("/blogs")}
              >
                <span className="font-bold">&lt;</span> Back to Blog Page
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
