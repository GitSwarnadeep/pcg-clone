import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import blogs from "../../constants/blogs.json";

const BlogList = () => {
  const extractedBlogs = blogs.blogs.map((blog) => {
    return {
      id: blog.id,
      image: blog.image,
      date: blog.date,
      title: blog.title,
      description: blog.description,
    };
  });

  console.log(extractedBlogs);

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
        ></div>

        <div className=" px-10 md:py-20 md:px-28">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[#295eba] text-lg md:text-xl font-medium tracking-wide">
                News & Events
              </p>
              <h2 className="text-[#19325b] text-3xl md:text-4xl tracking-wide mb-5">
                Update stories, news, events, every movement
              </h2>

              <div className=" flex flex-col md:flex-row gap-3">
                <div className="">
                  <select
                    id="category"
                    className="border w-full px-2 py-3 text-[#19325b] font-medium border-[#19325b] focus:border-2 focus:outline-none rounded-lg"
                  >
                    <option value="blog" className="text-[#19325b] font-medium">
                      Blog
                    </option>
                    <option
                      value="awards"
                      className="text-[#19325b] font-medium"
                    >
                      Awards and Achievements
                    </option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Type the word you want to seach"
                  className="border border-[#19325b] px-5 py-3 rounded-lg w-full md:w-1/3"
                />
                <button className="bg-[#19325b] px-14 py-3 rounded-lg text-white ">
                  Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {extractedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
