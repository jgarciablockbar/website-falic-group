import Link from "next/link";
import { getNews } from '@/lib/getNews';
import ColCard from "@/components/ColCard";
import Hero from "@/components/Hero";

export default function News() {
  const news = getNews();

  const getBg = (i:number) => {
    const pattern = ['bg-secondary', 'bg-white', 'bg-primary', 'bg-secondary'];
    const patternIndex = i % pattern.length;
    return pattern[patternIndex];
  };

  const MAX_DESC_LENGTH = 200;

  const truncatedDesc = (desc: string) => {
    if (desc.length <= MAX_DESC_LENGTH) {
      return desc;
    }

    const truncated = desc.substr(0, MAX_DESC_LENGTH);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    return lastSpaceIndex > 0 ? `${truncated.substr(0, lastSpaceIndex)}...` : `${truncated}...`;
  };


  return (
    <>
      <Hero bg="/homepage/hero.webp">
        <h1>News</h1>
      </Hero>
      <section className="flex flex-wrap">
        {news.map((article: any, i: number) => {
          const props = {
            title: article.title,
            desc: truncatedDesc(article.desc),
            img: article.img,
            aid: article.aid,
          }
          return <div key={i} className={`w-full lg:w-1/2 ${getBg(i)}`}>
            <ColCard  {...props} />
          </div>
        }, {start:1})}
      </section>
    </>
  )
}
