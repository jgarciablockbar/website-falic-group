import Hero from "@/components/Hero"
import CardA from "@/components/CardA"
import CardB from "@/components/CardB"

const content = {
  hero: {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit',
  },
  news: {
    title: 'iusto odio dignissimos ducimus ',
    date: '24 july 2023',
    imgSrc: 'https://loremflickr.com/1000/720/amsterdam',
    link: '/',
  },
  houses: {
    title: 'Houses',
    imgSrc: 'https://loremflickr.com/1000/720/mexico',
    description: 't vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    links: [
      {
        title: 'Learn more',
        href: '/houses',
      }
    ],
    bgClass: 'bg-yellow-600'
  },
  group: {
    title: 'Group',
    imgSrc: 'https://loremflickr.com/1000/720/washington',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis.',
    links: [
      {
        title: 'Find out more',
        href: '/group',
      },
    ]
  }
}

export default function Home() {
  return (
    <main>
      <Hero bg="https://loremflickr.com/1000/720/newyork">
        <h1 className="text-center">{content.hero.title}</h1>
      </Hero>
      <section className="p-20">
        <h2>News</h2>
        <CardA {...content.news} />
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="w-full flex">
          <CardB {...content.houses} />
        </div>
        <div className="w-full flex">
          <CardB {...content.group} />
        </div>
      </section>
    </main>
  )
}
