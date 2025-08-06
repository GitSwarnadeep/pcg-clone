import { useState } from "react";
// import Modal from "react-modal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IoPlaySharp } from "react-icons/io5";
import "./modal.css";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

// Modal.setAppElement("#root");

const Tvc = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const videos = [
    {
      id: 1,
      name: "SmartHeart Gold Salmon meal and rice",
      link: "https://youtu.be/OX4YbbHUBLI",
    },
    {
      id: 2,
      name: "SmartHeart Power Pack Dog food for adult and puppy.",
      link: "https://youtu.be/wSotMoPRMBY",
    },
    {
      id: 3,
      name: "Me-O Creamy Treats for Cats and Kittens",
      link: "https://youtu.be/4iIyDHVVPNY",
    },
  ];

  function addThumbnailsToVideos(videoArray) {
    return videoArray.map((video) => {
      const videoIdMatch = video.link.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;

      const thumbnailUrl = videoId
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : null;

      return {
        ...video,
        thumbnail: thumbnailUrl,
      };
    });
  }

  const updatedVideos = addThumbnailsToVideos(videos);

  const openModal = (videoLink) => {
    const videoIdMatch = videoLink.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      setVideoUrl(embedUrl); // Set the embed URL for the modal
      setIsModalOpen(true); // Open the modal
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
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
            TV Commercials
          </h2>
        </div>

        <div className="block lg:hidden mb-10">
          <div
            className="block lg:hidden mb-10"
            style={{
              backgroundImage: "url('/assets/blogs-head-img-mob.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "350px",
            }}
          ></div>
        </div>

        <div className="px-10 py-5">
          <div className="flex flex-col gap-3 mb-5">
            <p className="text-[#295eba] text-lg md:text-xl font-medium tracking-wide">
              TV Commercials
            </p>
            <h1 className="text-[#19325b] text-3xl md:text-4xl tracking-wide mb-5">
              {" "}
              PCG TV Commercials
            </h1>
            <div className="flex flex-col md:flex-row gap-5 ">
              <input
                type="text"
                placeholder="Type the word you want to search"
                className="border border-[#19325b] px-5 py-3 rounded-lg w-full md:w-1/3"
              />
              <button className="bg-[#19325b] px-14 py-3 rounded-lg text-white">
                Search
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {updatedVideos.map((video) => (
              <div
                key={video.id}
                className="group w-full relative hover:cursor-pointer"
                onClick={() => openModal(video.link)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-1"></div>
                <h3 className="text-2xl font-semibold absolute bottom-3 left-5 text-white">
                  {video.name}
                </h3>
                <IoPlaySharp className="absolute left-[35%] top-[30%] opacity-50 text-white group-hover:opacity-100  transition-opacity duration-300 size-32" />
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <div className="border border-red-500">
            <Popup
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              // modal
              nested
              className=""
            >
              <div className="relative">
                <button
                  className="absolute text-white right-0 -top-[60px] text-5xl close"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div
                    className="iframe-container"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      overflow: "hidden",
                      maxWidth: "150%",
                    }}
                  >
                <iframe
                height={420}
                  src={videoUrl}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // style={{ position: "absolute", top: 0, left: 0 }}
                  className="w-full"
                ></iframe>
                </div>
              </div>
            </Popup>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Tvc;
