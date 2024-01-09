import getArticle, { getNews } from "@/lib/getNews";
import Image from "next/image";

export async function generateStaticParams() {
  const news = getNews();
  return news.map(article => ({aid: article.aid}));
}

interface Params {
  params: {
    aid: string;
  }
}

const Article = ({ params: { aid }}: Params) => {
  const article = getArticle(aid);

  if (!article) return <div>Nothing to see here</div>

  return <>
    <section className='flex flex-col text-center items-center'>
      <h1 className="w-3/4 mt-20">{article.title}</h1>
      <h2 className="text-gray-500 mb-20">{article.category} • {article.date}</h2>
      <div className="w-5/6 h-screen relative">
        <Image src={article.img} fill alt={article.title} className="object-cover"/>
      </div>
      <div className="w-5/6 bg-white p-20 flex flex-col gap-y-20 items-center text-left font-xl" dangerouslySetInnerHTML={{__html: article.desc}}>
      </div>
    </section>
  </>
}

export default Article;
