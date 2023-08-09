import CardD from "@/components/CardD";
import HeroB from "@/components/HeroB";
import ButtonA from "@/components/ButtonA";
import { getHouses } from "../lib/getHouse";

const data = {
  hero: [
    {
      num: '31',
      text: 'Lorem Ipsum'
    },
    {
      num: '75',
      text: 'Ipsum'
    },
    {
      num: '6',
      text: 'consectetur adipiscing elit'
    },
  ],
}

const Houses = () => {
  const houses = getHouses();
  return (
    <main>
      <HeroB bg="https://loremflickr.com/1000/720/newyork">
        <h1 className="bg-black/75 py-3 text-center w-full">Houses</h1>
        <p className="w-5/6 md:w-1/2 bg-black/75 p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className="flex place-content-around  w-5/6">
          {data.hero.map(item => {
            return <div key={item.num} className="bg-black/75 py-3 px-5 text-center">
              <h2>{item.num}</h2>
              <h3>item.text</h3>
              <hr className="w-12 mt-3" />
            </div>
          })}
        </div>
      </HeroB>
      {houses && houses.map((house, i) => {
        return <div key={house.hid}>
        <CardD  bgColor={i % 2 === 0 ? 'bg-primary' : 'bg-secondary'} bgImg={house.heroBg}>
          <h2 className="text-center text-white bg-black/75 py-3 w-5/6 md:py-5 md:w-full">{house.title}</h2>
          <p className="text-center text-white bg-black/75 py-3 w-5/6 p-3 md:w-1/3">{house.desc}</p>
          <ButtonA href={`/houses/${house.hid}`} colors="border-black text-black bg-secondary hover:bg-black hover:text-white md:justify-self-end">Discover the Sector and Houses</ButtonA>
        </CardD>
        </div>
      })}
    </main>
  )
}

export default Houses;
