import Hero from "@/components/Hero"
import CardB from "@/components/CardB"
import NewsCard from "@/components/NewsCard";
import { getNews } from '@/lib/getNews';

const news = getNews();

const content = {
  hero: {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit',
  },
  houses: {
    title: 'Houses',
    imgSrc: '/homepage/houses.webp',
    description: 'Across our 9 distinguished global Houses, we proudly encapsulate a rich tapestry of heritage, boundless innovation, and unparalleled luxury.',
    links: [
      {
        title: 'Learn more',
        href: '/houses',
      }
    ],
  },
  group: {
    title: 'Group',
    imgSrc: '/homepage/group.webp',
    description: `Established in 2001, Falic Group is a family-owned and operated business home
    to a number of prestigious brands across nine Houses. Known for our unrivalled
    expertise in global markets and commitment to excellence, Falic Group is
    committed to growth and innovation in the name of our Houses and affiliated
    high quality producers.`,
    links: [
      {
        title: 'Find out more',
        href: '/group',
      },
    ],
    linkColors: 'text-secondary border-secondary hover:text-primary hover:bg-secondary',
  }
}

export default function Home() {
  return (
    <main>
      <Hero bg="/homepage/hero.webp">
        <h1 className="text-center">{content.hero.title}</h1>
      </Hero>
      <section className="flex flex-wrap">
        {news.slice(0, 2).map((article: any, i: number) => {
          const props = {
            title: article.title,
            category: article.category,
            date: article.date,
            img: article.img,
            aid: article.aid,
          }
          return <div key={i} className={`lg:w-1/2 ${Math.floor(i / 2) + i % 2 === 0 ? 'bg-white' : 'bg-secondary'}`}>
            <NewsCard  {...props} />
          </div>
        }, {start:1})}
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="w-full flex bg-secondary">
          <CardB {...content.houses} />
        </div>
        <div className="w-full flex bg-primary text-secondary">
          <CardB {...content.group} />
        </div>
      </section>
    </main>
  )
}
