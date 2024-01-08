import Link from "next/link";
import { getNews } from '@/lib/getNews';
import ColCard from "@/components/ColCard";

export default function News() {
  const news = getNews();

  return (
    <main>
      <section style={{ backgroundImage: `url(${news[0].img})` }} className='bg-cover bg-center w-screen min-h-v70 h-fit flex justify-center items-center text-white'>
        <div className="gap-y-10 flex flex-col justify-around items-center text-center">
          <h1>News</h1>
          <p className=' w-5/6 md:w-1/3'>{news[0].category} • {news[0].date}</p>
          <h2 className="w-5/6 md:w-1/2">{news[0].title}</h2>
          <Link className="underline"href={`/news/${news[0].aid}`}>Read the article</Link>
        </div>
      </section>
      <section className="flex flex-wrap">
        {news.slice(1).map((article: any, i: number) => {
          const props = {
            title: article.title,
            category: article.category,
            date: article.date,
            img: article.img,
            aid: article.aid,
          }
          return <div key={i} className={`lg:w-1/2 ${Math.floor(i / 2) + i % 2 === 0 ? 'bg-white' : 'bg-secondary'}`}>
            <ColCard  {...props} />
          </div>
        }, {start:1})}
      </section>
    </main>
  )
}
