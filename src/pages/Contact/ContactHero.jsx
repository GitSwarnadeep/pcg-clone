import store from "/assets/store.png";

function ContactHero() {
  return (
    <section>
      <div
        className="relative bg-cover bg-center text-white p-10 flex items-center justify-center lg:justify-between h-[250px] lg:h-[48vh]"
        style={{
          backgroundImage: `url(${store})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#19325b] to-transparent pointer-events-none"></div>

        <div className="relative text-white lg:max-w-4xl max-w-xs text-center lg:text-left lg:ml-[10%] z-10">
          <h1 className="text-4xl lg:text-6xl">Contact Us</h1>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
