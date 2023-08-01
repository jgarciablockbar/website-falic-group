import ButtonA from "@/components/ButtonA";
import CardC from "@/components/CardC";
import Hero from "@/components/Hero";

const stats = [
  {
    stat: '75',
    desc: 'Houses',
    year: '',
  },
  {
    stat: '$79.2bn',
    desc: 'Revenues',
    year: '2022',
  },
  {
    stat: '+ 196,000',
    desc: 'Employees',
    year: '2022',
  }
]

const values = [
  {
    img: 'https://loremflickr.com/400/200/newyork',
    title: 'Collaborative & Global'
  },
  {
    img: 'https://loremflickr.com/400/200/brooklyn',
    title: 'Visionary & Growth'
  },
  {
    img: 'https://loremflickr.com/400/200/chicago',
    title: 'Commitment to Excellence'
  }
]

export default function Home() {
  return (
    <main>
      <Hero bg="https://loremflickr.com/1000/720/newyork">
        <h1 className="mb-4 pt-32">Group</h1>
        <hr className="mb-4 w-12"/>
        <p className="w-4/5 text-center md:w-1/2 lg:w-1/3 mb-12">
          Renowned for its unrivaled global expertise and commitment to excellence,
          The Falic Group founded in 2001 is a family run group and operates 50 prestigious enterprises across 9 houses;
          retailing, wine & spirits, perfume & cosmetics, fashion & interiors, real estate & hospitality, media, distribution, tobacco & other activities.
          With over 6,000 employees spanning 21 countries, their global eco-system encompasses 250+ retail and e-Commerce stores. 
        </p>
        <div className="flex place-content-evenly w-full">
          {stats.map(s => <div key={s.desc} className="flex flex-col items-center">
            <h2>{s.stat}</h2>
            <h3>{s.desc}</h3>
            {s.year &&<p>{s.year}</p>}
            <hr className="w-12 mt-3"/>
          </div>)}
        </div>
      </Hero>
      <section className="p-20 flex flex-col gap-y-4 items-center">
        <h2 className="text-center">3 Values of The Falic Group</h2>
        {values.map(value => <CardC key={value.title} {...value} />)}
      </section>
      <section className="bg-white p-20 flex flex-col gap-y-12 text-center items-center">
        <h3 className="font-semibold italic normal-case">Falic Foundation</h3>
        <hr className="w-12"/>
        <p className="w-4/5 text-center md:w-1/2 text-xl">&ldquo;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.&rdquo;</p>
        <p className="uppercase text-gray-600 text-xs"><b> blanditiis praesentium</b>, corrupti quos dolores et quas</p>
        <ButtonA href="/">Find out more</ButtonA>
      </section>
    </main>
  )
}
