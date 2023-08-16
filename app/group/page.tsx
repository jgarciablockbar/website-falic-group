import ButtonA from "@/components/ButtonA";
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
    desc: 'Enterprices',
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

export default function Group() {
  return (<>
      <HeroB>
          <h1>Group</h1>
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
        <p className="w-4/5 text-center md:w-1/2 text-xl">&ldquo;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.&rdquo;</p>
        <p className="uppercase text-gray-600 text-xs"><b> blanditiis praesentium</b>, corrupti quos dolores et quas</p>
      </section>
    </>
  )
}
