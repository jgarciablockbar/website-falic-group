const offices = [
  {
    city: "Panama City, Panama",
  },
  {
    city: "Tel Aviv, Israel",
  },
  {
    city: "Bogota, Colombia",
  },
  {
    city: "Hollywood, Florida - USA",
  },
  {
    city: "Montevideo, Uruguay",
  },
  {
    city: "Punta cana, Dominican Republic",
  },
  {
    city: "Laredo, Texas - USA",
  },
  {
    city: "Rio de Janeiro, Brazil",
  },
  {
    city: "Mexico City, Mexico",
  },
  {
    city: "Singapore",
  },
  {
    city: "Macau, Asia",
  },
  {
    city: "Paris, France",
  },
  {
    city: "San Juan, Puerto Rico",
  },
  {
    city: "London, UK",
  },
];

const Offices = () => {
  return (
    <main>
      <section className="h-v40 bg-black w-screen flex flex-row items-center justify-center bg-center">
        <h1 className="text-white">Our Offices</h1>
      </section>
      <section className="bg-white flex flex-col items-center py-20 justify-center">
        <p className="w-5/6 md:w-1/2 text-xl pb-16 text-center font-semibold">
          Falic Group is headquartered in Miami, Florida, and has offices in New
          York, Los Angeles, London, Panama City, Singapore, San Juan, Macau,
          Rio de Janeiro, Montevideo, Tel Aviv, Bogota, Punta Cana, Mexico City
          and Paris. The company employs over 6,000 people worldwide.
        </p>
      </section>
      <section className="bg-primary flex justify-center overflow-hidden relative">
        <div
          className="mix-blend-overlay w-full absolute top-0 bottom-0 bg-center bg-cover opacity-30"
          style={{
            backgroundImage: "url(https://loremflickr.com/1300/900/worldmap)",
          }}
        ></div>
        <ul className="flex flex-wrap text-white w-5/6 lg:w-4/5 py-10 md:py-20">
          {offices.map((office, i) => (
            <li
              key="i"
              className="md:w-1/2 lg:w-1/3 h-16 md:h-20 text-center px-4"
            >
              <h3 className="font-semibold inline">{office.city}</h3>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Offices;
