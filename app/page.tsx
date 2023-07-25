import Hero from "@/components/Hero"
import CardA from "@/components/CardA"
import CardB from "@/components/CardB"

const content = {
  news: {
    title: '2023 First Half Results',
    date: '24 july 2023',
    imgSrc: 'https://r.lvmh-static.com/uploads/2014/09/gauche-resultat-2-louis-vuitton-mens-spring-summer-2024-final-2.jpeg',
    link: '/',
  },
  houses: {
    title: 'Houses',
    imgSrc: 'https://r.lvmh-static.com/uploads/2014/09/hp_maisons_site.jpg',
    description: 'LVMH is home to 75 distinguished Houses rooted in six different sectors. True to tradition, each of our brands builds on a specialty legacy while keeping an unwavering focus on the exquisite caliber of its products.',
    links: [
      {
        title: 'Learn more',
        href: '/houses',
      }
    ],
  },
  group: {
    title: 'Group',
    imgSrc: 'https://r.lvmh-static.com/uploads/2014/09/ok-groupe.jpg',
    description: 'A family-run group, LVMH strives to ensure the long-term development of each of its Houses in keeping with their identity, their heritage and their expertise.',
    links: [
      {
        title: 'Find out more',
        href: '/group',
      },
      {
        title: 'Documentation',
        href: '/documentation',
      }
    ]
  }
}

export default function Home() {
  return (
    <main>
      <Hero bg="https://r.lvmh-static.com/uploads/2023/07/cover-news-2023-07-24-ph-servent-lvmh-3.jpg">
        <h1>LVMH HAS BECOME A PREMIUM PARTNER OF THE PARIS 2024 OLYMPIC AND PARALYMPIC GAMES</h1>
      </Hero>
      <section className="p-20">
        <h2>News</h2>
        <CardA {...content.news} />
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="w-full ">
          <CardB {...content.houses} />
        </div>
        <div className="w-full ">
          <CardB {...content.group} />
        </div>
      </section>
    </main>
  )
}
