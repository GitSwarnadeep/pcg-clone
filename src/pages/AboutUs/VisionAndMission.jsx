import MissionCard from '../../components/MissionCard'
import vission from "/Banner/Vision.jpg";
import vission1 from "/assets/vission1.png";
import vission2 from "/assets/vission2.png";
import vission3 from "/assets/vission3.png";
import vission4 from "/assets/vission4.png";
import vission5 from "/assets/vission5.png";

function VisionAndMission() {
  return (
    <section className="py-16 px-8 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        {/* Vision Section */}
        <div>
          <h2 className="text-blue-600 text-xl  mb-6">Vision and Mission</h2>
          <h3 className="text-3xl lg:text-5xl  text-gray-900 mb-6">Vision</h3>
          <p className="text-gray-700 mb-6">
            Perfect Companion Group Co., Ltd. was founded with the objective to take the quality of life of both the
            owners and the pets to the next level. By attentively creating and constantly developing our products, we
            are confident that our products and services will play a part in building a strong bond between you and
            your pets.
          </p>
          <img
            src={vission}
            alt="Vision"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Mission Section */}
        <div>
          <h3 className="lg:text-5xl text-3xl lg:text-left text-center text-gray-900 mb-8">Mission</h3>

          {/* Reusable Card Components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center sm:justify-items-start">
            <MissionCard
              title="Our Organization"
              description="We are a leading company specializing in the development, production, and distribution of pet food and pet products."
              icon={vission1}
            />
            <MissionCard
              title="Products and Services"
              description="We will continue to innovate and develop quality products for customers, and we believe that our products and services will help customers achieve the highest satisfaction."
              icon={vission2}
            />
            <MissionCard
              title="Customer Service"
              description="Various breeds of equipment and pet food for you to choose from."
              icon={vission3}
            />
            <MissionCard
              title="Our Staff"
              description="We are committed and ready to help enhance the potential and well-being of pets."
              icon={vission4}
            />
            <MissionCard
              title="Our Staff"
              description="We are committed and ready to help enhance the potential and well-being of pets."
              icon={vission5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionAndMission;
