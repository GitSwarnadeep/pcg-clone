const Action = () => {
  const actions = [
    {
      title:
        "Information and documents for public relations of the natural gas distribution pipeline project Theparak Industrial City (Mthai) ",
      desc: "Project InformationMeeting Attendance Response Form",
      image: "/assets/action1.png",
    },
    {
      title:
        "Announcement of the Lucky Winners from the PCG WonderPets WonderPrizes Activity",
      desc: "",
      image: "/assets/action2.png",
    },
    {
      title:
        "Presenting prizes to the lucky winners from the PCG WonderPets WonderPrizes activity.",
      desc: "Today (January 23), Ms. Chantima Chaiwatthanachai, Deputy Managing Director of Marketing at Perfect Companion Group Co., Ltd., represented the company in presenting an MG VS HEV X model car, valued at 919,000 baht, to Ms. Chayanan Jürgens, the lucky winner of the grand prize from the PCG WonderPets WonderPrizes activity.",
      image: "/assets/action3.png",
    },
    {
      title: "Considerations for Shipping Pet Products",
      desc: "",
      image: "/assets/action4.png",
    },
    {
      title:
        "Community service activity under the Volunteer Spirit Project “We Do Good with Our Hearts” on Friday, November 26, 2021, at Khlong Charoen Rat School, Samut Prakan Province.",
      desc: "As part of Charoen Pokphand Group's policy to encourage employees to express loyalty to the monarchy and to honor the benevolence of His Majesty King Bhumibol Adulyadej The Great, the group organized community service activities in collaboration with government agencies under the royal initiative volunteer project We Do Good with Our Hearts.Perfect Companion Group Co., Ltd., representing the pet business group, held a community service activity in 2021 focusing on landscape improvement, building repainting, and school grounds cleaning. The event took place at Khlong Charoen Rat School, Bang Sao Thong District, Samut Prakan Province, with the participation of 120 volunteers dedicated to the cause.",
      image: "/assets/action5.png",
    },
    {
      title:
        "Community service activity under the Volunteer Spirit Project “We Do Good with Our Hearts” on Friday, November 25, 2022, at Khlong Charoen Rat School, Samut Prakan Province.",
      desc: "In line with Charoen Pokphand Group's policy encouraging employees to demonstrate loyalty to the monarchy and honor the benevolence of His Majesty King Bhumibol Adulyadej The Great, community service activities were organized in collaboration with government agencies under the royal initiative volunteer project We Do Good with Our Hearts.Perfect Companion Group Co., Ltd., part of the pet business group, hosted a community service activity in 2022. The initiatives included landscape improvements, repainting buildings affected by flooding, providing lunch for students, and installing air conditioning in the school library. The event took place at Khlong Charoen Rat School, Bang Sao Thong District, Samut Prakan Province, with the participation of 142 dedicated volunteers.",
      image: "/assets/action6.png",
    },
  ];
  return (
    <div className="flex flex-col gap-5 justify-center items-center lg:px-28 bg-slate-100 py-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-wide font-bold text-[#19325b]">
        Sustainability Actions
      </h1>
      <p className="text-[#19325b] text-sm lg:text-xl font-medium text-center text-balance">
        Follow up project and interesting news to be one of the Create
        sustainability for the world with us.
      </p>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {actions.map((action, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[250px] md:w-[400px] md:h-[350px] flex flex-col gap-1 justify-end  px-5  text-white items-center pb-6"
              style={{
                backgroundImage: `url(${action.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-1"></div>
              <h1 className="z-10 overflow-hidden text-ellipsis line-clamp-1">
                {action.title}
              </h1>
              <p className="z-10 overflow-hidden line-clamp-1">{action.desc}</p>
              <button className="border-2 border-slate-50 py-4 text-xl w-3/4 z-10 rounded-sm font-semibold">
                Read more <span>&gt;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="border-2 mt-5 text-[#19325b] border-[#19325b] py-4 text-xl w-[300px] z-10 rounded-sm font-semibold">
        Read More <span>&gt;</span>
      </button>
    </div>
  );
};

export default Action;
