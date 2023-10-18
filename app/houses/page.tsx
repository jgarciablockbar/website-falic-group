import HeroB from "@/components/HeroB";
import getHouse, { getHouses } from "../../lib/getHouse";
import Image from "next/image";
import ButtonA from "@/components/ButtonA";

const data = {
  hero: [
    {
      num: "9",
      text: "Houses",
    },
    {
      num: "50",
      text: "Businesses",
    },
  ],
};

const Houses = () => {
  const houses = getHouses();
  return (
    <main>
      <HeroB bg="/homepage/houses.webp">
        <h1 className="py-3 text-center w-screen -ml-10 md:-ml-20">Houses</h1>
        <p className="w-5/6 md:w-1/2 p-3 -ml-10 md:-ml-20">
          Our 9 global Houses encompass heritage, innovation and luxury.
        </p>
        <div className="flex place-content-around  w-5/6 -ml-10 md:-ml-20">
          {data.hero.map((item) => {
            return (
              <div key={item.num} className="py-3 px-5 text-center">
                <h2>{item.num}</h2>
                <h3>{item.text}</h3>
                <hr className="w-12 mt-3" />
              </div>
            );
          })}
        </div>
      </HeroB>
      <section>
        {houses &&
          houses.map((house, i) => {
            const houseDetails = getHouse(house.hid);
            return (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-white" : "bg-secondary"
                } flex flex-col gap-10 items-center w-full p-20`}
              >
                <h2>{house.title}</h2>
                <p className="text-center w-2/3">{house.since}</p>
                <ButtonA href={`house/${house.hid}`}>Discover</ButtonA>
                <ul className="flex w-full">
                  {houseDetails?.brands &&
                    houseDetails.brands.slice(0, 4).map((brand: any, j) => {
                      return (
                        <li key={j} className="w-full md:w-1/4 h-60 relative">
                          {brand.img && (
                            <Image src={brand.img} alt={brand.title} fill />
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Houses;
