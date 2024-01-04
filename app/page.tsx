import Hero from "@/components/Hero";
import Image from "next/image";
import CardB from "@/components/CardB";
import NewsCard from "@/components/NewsCard";
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
                <NewsCard {...props} />
              </div>
            );
          },
          { start: 1 }
        )}
      </section>
      <div className="w-full bg-primary p-8 md:p-20 flex flex-col items-center">
        <div className="relative w-full h-v20 -mt-12 md:h-v40">
          <Image src="/homepage/Dior.webp" alt="" fill className="object-contain" />
        </div>
      </div>
      <section className="flex flex-col md:flex-row">
        <div className="w-full flex bg-secondary">
          <NewsCard {...content.houses} />
        </div>
        <div className="w-full flex bg-white">
          <NewsCard {...content.group} />
        </div>
      </section>
    </main>
  );
}
