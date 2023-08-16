import HeroB from "@/components/HeroB";
import { getHouses } from "../lib/getHouse";
import ActiveImg from "@/components/ActiveImg";

const data = {
  hero: [
    {
      num: '9',
      text: 'Houses'
    },
    {
      num: '50',
      text: 'Enterprices'
    },
  ],
}

const Houses = () => {
  const houses = getHouses();
  return (
    <main>
      <HeroB bg="https://loremflickr.com/1000/720/newyork">
        <h1 className="bg-black/75 py-3 text-center w-screen -ml-10 md:-ml-20">Houses</h1>
        <p className="w-5/6 md:w-1/2 bg-black/75 p-3 -ml-10 md:-ml-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className="flex place-content-around  w-5/6 -ml-10 md:-ml-20">
          {data.hero.map(item => {
            return <div key={item.num} className="bg-black/75 py-3 px-5 text-center">
              <h2>{item.num}</h2>
              <h3>{item.text}</h3>
              <hr className="w-12 mt-3" />
            </div>
          })}
        </div>
      </HeroB>
      <section className='bg-white flex flex-col items-center py-20 justify-center'>
        <div className="w-5/6 flex flex-wrap lg:w-2/3">
        {houses && houses.map((house, i) => {
          return <a href={`/houses/${house.hid}`} key={house.title} className='basis-full md:basis-1/3 p-5 text-center text-primary'>
            <div className="h-80 md:h-40 relative mb-5">
              <ActiveImg src={house.heroBg} />
            </div>
            <h3>{house.title}</h3>
            <p>{house.since}</p>
          </a>
        })}
        </div>
      </section>

    </main>
  )
}

export default Houses;
