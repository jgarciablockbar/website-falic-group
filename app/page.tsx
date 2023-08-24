import Hero from "@/components/Hero"
import CardA from "@/components/CardA"
import CardB from "@/components/CardB"

const content = {
  hero: {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit',
  },
  news: {
    title: 'The Magallan',
    date: '24 july 2023',
    imgSrc: '/homepage/news.webp',
    link: '/',
  },
  houses: {
    title: 'Houses',
    imgSrc: '/homepage/houses.webp',
    description: 'Our 9 global Houses encompass heritage, innovation and luxury.',
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
      <section className="p-20">
        <h2 className="text-primary">News</h2>
        <CardA {...content.news} />
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
