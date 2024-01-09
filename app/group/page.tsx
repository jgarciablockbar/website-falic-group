import RowCardFW from "@/components/RowCardFW";
import Hero from "@/components/Hero";

const stats = [
  {
    stat: "9",
    desc: "Houses",
    year: "",
  },
  {
    stat: "50+",
    desc: "Enterprises",
    year: "",
  },
  {
    stat: "+250",
    desc: "Stores",
    year: "",
  },
  {
    stat: "+5",
    desc: "Ecommerce",
    year: "",
  },
  {
    stat: "+6,000",
    desc: "Employees",
    year: "",
  },
];

const values = [
  {
    img: "/group/collaborative.webp",
    title: "A collaborative approach",
    description: `Falic Group’s experienced team works hard to forge partnerships that achieve results, working collaboratively with brands to achieve success at every turn. From logistics and operations, to sales, marketing, product innovation and client support, Falic Group’s collaborative, forward-thinking approach is renowned worldwide.`,
  },
  {
    img: "/group/visionary.webp",
    title: "Visionary & Growth",
    description: `Combining visionary spirit with a fast-paced growth mindset, Falic Group is focused on developing future-proof business strategies and new revenue streams. Our business strategies are carefully designed to target a new breed of young luxury consumers, a group that is projected to make up 80% of global purchases by 2030.`,
  },
  {
    img: "/group/excellence.webp",
    title: "Commitment to Excellence",
    description: `By making strategic developments in modern technology and digital innovations, Falic Group aims to always be one step ahead to disrupt traditional markets. Omnichannel experiences and partnerships with world-class retailers, distributors and talent is part of our commitment to excellence.`,
  },
];

export default function Group() {
  return (
    <>
      <Hero bg="/homepage/hero.webp">
        <h1>The Group</h1>
        <div className="hidden lg:flex justify-around flex-wrap gap-10 px-10 absolute w-full bottom-10">
          {stats.map((s) => (
            <div key={s.desc} className="flex flex-col items-center">
              <h2 className="pb-2">{s.stat}</h2>
              <h4 className="uppercase text-lg">{s.desc}</h4>
              {s.year && <p>{s.year}</p>}
              <hr className="w-12 mt-3" />
            </div>
          ))}
        </div>
      </Hero>
      <div className="flex text-white lg:hidden justify-around flex-wrap gap-10 px-10 w-full bg-accent py-8">
        {stats.map((s) => (
          <div key={s.desc} className="flex flex-col items-center">
            <h2 className="pb-2">{s.stat}</h2>
            <h4 className="uppercase text-lg">{s.desc}</h4>
            {s.year && <p>{s.year}</p>}
            <hr className="w-12 mt-3" />
          </div>
        ))}
      </div>
      <section className="py-10 md:py-20 flex flex-col items-center bg-primary">
        <h2 className="text-center text-white mb-4 font-semibold">
          Our Values
        </h2>
        {values.map((value, i) => (
          <RowCardFW key={value.title} {...value} alignment={i % 2}/>
        ))}
      </section>
    </>
  );
}
