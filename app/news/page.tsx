import Link from "next/link";
import { getNews } from '../lib/getNews';
import ActiveImg from "@/components/ActiveImg";

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
      <section>
        {news.slice(1).map((article: any, i: number) => {
          return <Link className={`p-8 md:p-20 ${i % 2 ? 'bg-white' : 'bg-secondary'} flex flex-col gap-y-8`} href={`/news/${article.aid}`}key={article.aid}>
            <h2>{article.title}</h2>
            <p className="text-gray-500">{article.category}<br />{article.date}</p>
            <div className="w-full h-v30 md:h-v50 lg:h-v90 relative">
              <ActiveImg src={article.img} />
            </div>
          </Link>
        }, {start:1})}
      </section>
    </main>
  )
}
