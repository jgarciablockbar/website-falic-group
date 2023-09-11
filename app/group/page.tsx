import CardC from "@/components/CardC";
import HeroB from "@/components/HeroB";

const stats = [
  {
    stat: '9',
    desc: 'Houses',
    year: '',
  },
  {
    stat: '50+',
    desc: 'Enterprises',
    year: '2023',
  },
  {
    stat: '+ 250',
    desc: 'Stores',
    year: '2023',
  },
  {
    stat: '+ 5',
    desc: 'Ecommerce',
    year: '2023',
  },
  {
    stat: '+ 6,000',
    desc: 'Employees',
    year: '2023',
  }
]

const values = [
  {
    img: 'https://loremflickr.com/400/300/newyork',
    title: 'A collaborative approach',
    description: `Falic Group’s experienced team works hard to forge partnerships that achieve 
    results, working collaboratively with producers to achieve success at every turn. 
    From logistics and operations, to sales, marketing, product innovation and client 
    support, Falic Group’s collaborative, forward-thinking approach is renowned 
    worldwide.`
  },
  {
    img: 'https://loremflickr.com/400/300/brooklyn',
    title: 'Visionary & Growth',
    description: `Combining visionary spirit with a fast-paced growth mindset, Falic Group is 
    focused on developing future-proof business strategies and new revenue 
    streams. Our business strategies are carefully designed to target a new breed of 
    young luxury consumers, a group that is projected to make up 80% of global 
    purchases by 2030.`
  },
  {
    img: 'https://loremflickr.com/400/300/chicago',
    title: 'Commitment to Excellence',
    description: `
      By making strategic developments in modern technology and digital innovations,
      Falic Group aims to always be one step ahead to disrupt traditional markets. 
      Omnichannel experiences and partnerships with world-class retailers, distributors
      and talent is part of our commitment to excellence.
    `
  }
]

export default function Group() {
  return (<>
      <HeroB bg="/homepage/group.webp">
          <h1>Falic Group</h1>
          <hr className="w-12"/>
          <p className="w-4/5 text-center md:w-1/2 lg:w-1/3 mb-12">
            Renowned for its unrivaled global expertise and commitment to excellence,
            The Falic Group founded in 2001 is a family run group and operates 50 prestigious enterprises across 9 houses;
            retailing, wine & spirits, perfume & cosmetics, fashion & interiors, real estate & hospitality, media, distribution, tobacco & other activities.
            With over 6,000 employees spanning 21 countries, their global eco-system encompasses 250+ retail and e-Commerce stores.
          </p>
          <div className="flex justify-around w-full flex-wrap gap-10 px-10">
            {stats.map(s => <div key={s.desc} className="flex flex-col items-center">
              <h2>{s.stat}</h2>
              <h3>{s.desc}</h3>
              {s.year &&<p>{s.year}</p>}
              <hr className="w-12 mt-3"/>
            </div>)}
          </div>
      </HeroB>
      <section className="p-10 md:p-20 flex flex-col gap-y-4 items-center">
        <h2 className="text-center text-primary mb-4 font-semibold">3 Values of The Falic Group</h2>
        {values.map(value => <CardC key={value.title} {...value} />)}
      </section>
      <section className="bg-secondary p-10 md:p-20 flex flex-col gap-y-12 text-center items-center">
        <h3 className="font-semibold text-primary uppercase">Falic Foundation</h3>
        <hr className="w-12 border-primary"/>
        <p className="w-4/5 text-center md:w-1/2 text-xl">&ldquo;As a group, we are committed to forging the best producer partnerships and 
          delivering results at scale. Our experience founding Duty Free Americas has 
          taught us a lot about fast growth and innovation, and we are committed to 
          delivering the best deals and exposure for our partners. One of the great 
          privileges we have is to be able to give back to causes close to our heart, and 
          with the Falic Family Foundation we support a number of charitable organisations
          in the United States and interntionally.&rdquo;
        </p>
        <p className="uppercase text-gray-600 text-xs"><b>Leon Falic</b>, Falic Group President</p>
      </section>
    </>
  )
}
