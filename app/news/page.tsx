import Link from "next/link";
import { getNews } from "../lib/getNews";
import ActiveImg from "@/components/ActiveImg";

export default function News() {
  const news = getNews();

  return (
    <main>
      <section style={{ backgroundImage: `url('${news[0].img})` }} className='bg-cover w-screen flex flex-col justify-around text-center items-center pt-60 pb-32 gap-y-10'>
        <h1 className='text-white'>News</h1>
        <p className='text-white w-5/6 md:w-1/3'>{news[0].category} • {news[0].date}</p>
        <h2 className="text-white w-5/6 md:w-1/2">{news[0].title}</h2>
        <Link className="text-white underline"href={`/news/${news[0].aid}`}>Read the article</Link>
      </section>
      <section>
        {news.map((article, i) => {
          return <Link className={`p-20 ${i % 2 ? 'bg-white' : 'bg-secondary'} flex flex-col gap-y-8`} href={`/news/${article.aid}`}key={article.aid}>
            <h2>{article.title}</h2>
            <p className="text-gray-500">{article.category}<br />{article.date}</p>
            <div className="w-full h-screen relative">
            <ActiveImg src={article.img} />
            </div>
          </Link>
        }, {start:1})}
      </section>
    </main>
  )
}
