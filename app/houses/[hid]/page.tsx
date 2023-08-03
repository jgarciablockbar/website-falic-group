import getHouse from "@/app/lib/getHouse";
import Image from "next/image";

interface Params {
  params: {
    hid: string;
  }
}

const House = ({ params: { hid }}: Params) => {
  const house = getHouse(hid);
  return <main>
    {house ? <>
      <section style={{ backgroundImage: `url('${house.heroBg})` }} className='bg-cover w-screen h-screen flex flex-col justify-center text-center items-center'>
        <h1 className='text-white'>{house.title}</h1>
        <hr className="mb-12 mt-6 w-12 border-white"/>
        <p className='text-white w-5/6 md:w-1/3'>{house.desc}</p>
      </section>
      <section className='bg-white flex flex-col items-center py-20 justify-center'>
        <p className="w-5/6 md:w-1/2 text-xl pb-16 text-center font-semibold">{house.quote}</p>
        <h3 className="pb-20">{house.author}</h3>
        <div className="w-5/6 flex flex-wrap md:w-2/3">
          {house.brands.map(brand => {
            return <div key={brand.title} className='basis-full md:basis-1/3 p-5 text-center'>
              <div className="h-56 relative mb-5">
                <Image src={brand.img} alt={brand.title} fill />
              </div>
              <h3>{brand.title}</h3>
              <h4>{brand.date}</h4>
            </div>
          })}
        </div>
      </section>
      <section className="bg-secondary flex flex-col items-center py-20 justify-center">
        <h2 className="mb-5">{house.otherSectors.title}</h2>
        <div className="w-5/6 flex flex-wrap md:w-2/3">
          {house.otherSectors.brands.map(brand => {
            return <div key={brand.title} className='basis-full md:basis-1/3 p-5 text-center'>
              <div className="h-56 relative mb-5">
                <Image src={brand.img} alt={brand.title} fill />
              </div>
              <h3>{brand.title}</h3>
              <h4>{brand.date}</h4>
            </div>
          })}
        </div>
      </section>
    </>:
    <div>Nothing to see here</div>}
  </main>
}

export default House;