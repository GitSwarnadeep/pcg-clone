import React from "react";
import ContactForm from "./ContactForm";
import bgcontact from "/assets/bgcontact.png";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Line from "../../components/Line";
import youtube from "/assets/youtube.png";
import facebook from "/assets/facebook.png";
import twitter from "/assets/twitter.png";
import instagram from "/assets/instagram.png";
import threads from "/assets/threads2.jpg";


function ContactMain() {
  const socialMediaLinks = [
    {
      platform: "Facebook",
      icon: facebook,
      name: "SmartHeart",
      url: "https://www.facebook.com/smartheart.india",
    },
    {
      platform: "Facebook",
      icon: facebook,
      name: "SmartHeart Gold",
      url: "https://www.facebook.com/@SmartHeartGoldIndiaa/",
    },
    
    {
      platform: "Facebook",
      icon: facebook,
      name: "Me-O",
      url: "https://www.facebook.com/MeOIndiaCatFood",
    },
    // {
    //   platform: "Facebook",
    //   icon: facebook,
    //   name: "Meo Gold",
    //   url: "https://www.facebook.com/MeoGoldTH",
    // },
    // {
    //   platform: "Facebook",
    //   icon: facebook,
    //   name: "Optimum",
    //   url: "https://www.facebook.com/optimumclubthailand?ref=hl",
    // },
    // {
    //   platform: "Facebook",
    //   icon: facebook,
    //   name: "APro I.Q. Formula",
    //   url: "https://www.facebook.com/AProIQFormula",
    // },
    {
      platform: "Instagram",
      icon: instagram,
      name: "SmartHeart",
      url: "https://www.instagram.com/smartheart_india/",
    },
    {
      platform: "Instagram",
      icon: instagram,
      name: "SmartHeart Gold",
      url: "https://www.instagram.com/smartheart_gold_india/",
    },
    {
      platform: "Instagram",
      icon: instagram,
      name: "Me-O",
      url: "https://www.instagram.com/meo.india1/",
    },
    // {
    //   platform: "Instagram",
    //   icon: instagram,
    //   name: "Me-O Gold",
    //   url: "https://www.instagram.com/meogold/",
    // },
    {
      platform: "Threads",
      icon: threads,
      name: "SmartHeart",
      url: "https://www.threads.net/@smartheart_india",
    },
    {
      platform: "Threads",
      icon: threads,
      name: "SmartHeart Gold",
      url: "https://www.threads.net/@smartheart_gold_india",
    },
    {
      platform: "Threads",
      icon: threads,
      name: "Me-O",
      url: "https://www.threads.net/@meo.india1",
    },
    
    // {
    //   platform: "YouTube",
    //   icon: youtube,
    //   name: "YouTube",
    //   url: "https://www.youtube.com/user/PCGperfectcompanion",
    // },
  ];

  return (
    <main>
      <section
        className="bg-cover bg-center bg-no-repeat  py-16"
        style={{
          backgroundImage: `url(${bgcontact})`,
        }}
      >
        <div className="container py-8 bg-white rounded-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl mb-4 text-gray-800">
              Contact us
            </h2>
            <p className="text-xl font-semibold text-blue-900">
              Perfect Companion India
            </p>
            <p className="lg:text-3xl text-xl text-gray-700 mt-4">
              Consumer Service Center Perfect Companion Pet Care
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <button className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-full flex items-center space-x-2">
              <FaPhone />
              <span>+91 9940625518</span>
            </button>
          </div>

          <div className="text-center flex justify-center text-gray-400 mb-8 px-6">
            <p className="lg:max-w-4xl text-xl ">
              Your valuable feedback will be shared with various departments at Perfect Companion India, to continuously improve our pet food products and services. We welcome your insights about your pets and experiences with our brands. For any specific health concerns or questions about your dog or cat, we strongly recommend consulting your trusted veterinarian for expert advice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-white border-2 rounded-lg p-8  flex flex-col items-center">
              <FaLocationDot className="w-24 h-24" />
              <p className="mt-4 text-center text-xl text-gray-800">
                Plot No 26, Industrial Area, Kasna, Ecotech 1 Extn, GREATER
                NOIDA, Gautam Buddha Nagar, Uttar Pradesh, 201308
                <br />
                {/* +91 9940625518 */}
              </p>
            </div>

            <div className="bg-white border-2 rounded-lg p-6 flex flex-col items-center">
              <IoIosMail className="w-24 h-24" />
              <p className="mt-4 text-center text-xl text-gray-800">
                care.smartheart@gmail.com
              </p>
              <p className="mt-4 text-center text-xl text-gray-800">
              care.meoindia@gmail.com 
              </p>
            </div>
          </div>

          {/* New Section - Our Brand Tracking */}

          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-4xl text-gray-800">
              Our brand tracking
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl text-xl mx-auto items-start">
            {socialMediaLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center justify-start space-x-2"
              >
                <img
                  src={link.icon}
                  alt={`${link.platform} icon`}
                  className="w-6 h-6"
                />
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />

        <Line />
      </section>
    </main>
  );
}

export default ContactMain;
