import Hero from "@/components/Hero";
import Image from "next/image";
import ColCard from "@/components/ColCard";
import RowCard from "@/components/RowCard";
import { getNews } from "@/lib/getNews";

const news = getNews();

const content = {
  hero: {
    title: "Falic Group",
  },
  we: {
    title: "Who we are",
    text: "Renowned for its unrivaled global expertise and commitment to excellence, the Falic Group founded in 2001 is a family run group and operates 50 prestigious businesses across 9 houses; retail, wines & spirits, fragrance & cosmetics, fashion & interiors, real estate & hospitality, media, distribution, tobacco & other activities. With over 6,000 employees spanning 21 countries, their global eco-system encompasses 250+ retail and e-Commerce stores.",
    img: "/homepage/we.webp",
  },
  houses: {
    title: "Houses",
    img: "/homepage/houses.webp",
    desc: "Across our 9 distinguished global Houses, we proudly encapsulate a rich tapestry of heritage, boundless innovation, and unparalleled luxury.",
    aid: '/group',
    btnText: "Learn more",
  },
  group: {
    title: "Falic Group",
    img: "/homepage/group.webp",
    desc: `Established in 2001, Falic Group is a family-owned and operated business home
    to a number of prestigious brands across nine Houses. Known for our unrivalled
    expertise in global markets and commitment to excellence, Falic Group is
    committed to growth and innovation in the name of our Houses and affiliated
    high quality producers.`,
    aid: 'houses',
    btnText: "Learn more",
  },
  foundation: {
    title: "FALIC FAMILY FOUNDATION",
    img: "/homepage/Foundation.webp",
    desc: "DFA Golf Day 2023 raising $1 million to fight cancer wins ‘Best Example of Community Engagement’ Award at The Moodies 2023 Travel Journey Omnichannel Awards",
    aid: "/foundation",
    btnText: "Learn more",
  }
};

export default function Home() {
  return (
    <main>
      <Hero bg="/homepage/hero.webp">
        <h1 className="uppercase">{content.hero.title}</h1>
      </Hero>
     <section className="text-white bg-primary w-full flex flex-col items-center p-8 pb-0 md:pb-0 md:p-20">
        <h2>{content.we.title}</h2>
        <p className="text-center text-lg pb-10">{content.we.text}</p>
        <div className="relative w-full h-v20 -mb-12 md:h-v50 md:-mb-60">
          <Image src="/homepage/we.webp" alt="" fill className="object-contain" />
        </div>
      </section>
      <section className="flex flex-wrap home-padded">
        {news.slice(0, 2).map(
          (article: any, i: number) => {
            const props = {
              title: article.title,
              img: article.img,
              desc: article.desc,
              aid: article.aid,
              padded: true,
            };
            return (
              <div
                key={i}
                className={`lg:w-1/2 ${
                  Math.floor(i / 2) + (i % 2) === 0
                    ? "bg-white"
                    : "bg-secondary"
                }`}
              >
                <ColCard {...props} />
              </div>
            );
          },
          { start: 1 }
        )}
      </section>
      <div className="w-full bg-primary p-8 md:p-20 flex flex-col items-center">
        <div className="relative w-full h-v30 -mt-44 md:h-v40">
          <Image src="/homepage/Dior.webp" alt="" fill className="object-contain" />
        </div>
      </div>
      <section className="flex flex-col md:flex-row">
        <div className="w-full flex bg-white">
          <ColCard {...content.group} />
        </div>
       <div className="w-full flex bg-secondary">
          <ColCard {...content.houses} />
        </div>
      </section>
      <section className="bg-primary">
        <RowCard {...content.foundation} />
      </section>
      <section className="text-center text-xl p-8 md:p-20 text-white" style={{ backgroundImage: 'url(/homepage/JeromeQuote.webp)' }}>
        <p className="mb-8">“As a group, we are committed to forging the best brand partnerships and delivering results at scale. Our experience founding Duty Free Americas has taught us a lot about fast growth and innovation, and we are committed to delivering the best deals and exposure for our partners. One of the great privileges we have is to be able to give back to causes close to our heart, and with the Falic Family Foundation we support a number of charitable organizations in the United States and internationally.”</p>
      <p className="uppercase">-Jerome Falic</p>
      <p className="font-montserrat font-thin text-sm">DFA CEO & PRINCIPAL OF FALIC FAMILY FOUNDATION</p>
      </section>
    </main>
  );
}
