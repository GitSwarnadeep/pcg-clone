import about_bg from "/Banner/About us.jpg";

function AboutHero() {
  return (
    <section>
      <div
        className="relative bg-cover bg-center text-white p-10 flex items-center justify-center lg:justify-between h-[300px] lg:h-[48vh]"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#19325b] to-transparent pointer-events-none"></div>

        <div className="relative text-white max-w-lg text-center lg:text-left lg:ml-[10%] z-10">
          <h1 className="text-4xl lg:text-6xl">About Us</h1>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
