import Hero from "@/components/Hero";
import Image from "next/image";

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
  houses: [
    {
      title: "Retail",
      desc: "Combining legacy and innovation, Duty Free Americas is our mothership. As the leading and largest luxury travel retailer in the Western Hemisphere, DFA operates e-Commerce and over 250 stores in the United States and internationally at major airports, seaports and borders. Our future is our digital retail innovations BlockBar, a global blockchain based wines and spirits marketplace and Paneco, the largest e-commerce delivery platform in Singapore and Israel.",
      images: [
        "/houses/retail-1.webp",
        "/houses/retail-2.webp",
        "/houses/retail-3.webp",
      ]
    },
    {
      title: "Wines & Spirits",
      desc: "Expertise and exceptional terroir are the hallmarks of our own prestigious estates from Psagot Winery to Bearhug and Gila Tequila. We are also the trusted distribution and retail partner for the world’s most recognised wine and spirits producers, all of whom encompass exceptional craftsmanship, taste and storytelling.",
      images: [
        "/houses/wines-1.webp",
        "/houses/wines-2.webp",
        "/houses/wines-3.webp",
      ]
    },
    {
      title: "Fragance & cosmetics",
      desc: "Heritage meets vogue with our collection of owned iconic fragrance, cosmetics and hair care brands including Perry Ellis, Hard Candy and HeadKandy. We are renowned for developing fragrances for fashion, celebrity and lifestyle brands, and delivering an expert beauty concierge in our retail stores. We also collaborate with historic houses and emerging niche cosmetics brands to grow their distribution worldwide.",
      images: [
        "/houses/fragance-1.webp",
        "/houses/fragance-2.webp",
        "/houses/fragance-3.webp",
      ]
    },
    {
      title: "Fashion & interiors",
      desc: "Home to legacy names, from Christian Lacroix and Reebok LATAM to Divano Mobilia, our Fashion & Interiors house is focused on exceptional craftsmanship, innovation and high-end design. From red carpets to designer home furnishings, partners of Falic Group in the fashion and interior space offer refinement and undisputed style. ",
      images: [
        "/houses/fashion-1.webp",
        "/houses/fashion-2.webp",
        "/houses/fashion-3.webp",
      ]
    },
    {
      title: "Real Estate & Hospitality",
      desc: "Falic Group owns a number of regional hotels, bars and restaurants in the United States and Latin America including the W Hotel Panama and Condado Plaza Hotel, Puerto Rico. A place to meet, rest and play.",
      images: [
        "/houses/re-1.webp",
        "/houses/re-2.webp",
        "/houses/re-3.webp",
      ]
    },
    {
      title: "Media",
      desc: "Falic Group proudly operates a number of leading regional news networks that connect people, place and business. The largest network includes Bloomberg Línea partnering with the world’s largest lifestyle brands to share their campaigns to 5 million+ users and 1M +social media followers across LATAM.",
      images: [
        "/houses/media-1.webp",
        "/houses/media-2.webp",
        "/houses/media-3.webp",
      ]
    },
    {
      title: "Distribution",
      desc: "Leaders in innovative distribution solutions for the United States and Latin American markets, Falic Group offers a network that delivers speed, efficiency and reliability as standard. The distribution group includes UETA Ship Supply, bringing together suppliers and cruise line operators.",
      images: [
        "/houses/distribution-1.webp",
        "/houses/distribution-2.webp",
        "/houses/distribution-3.webp",
      ]
    },
    {
      title: "Tobacco",
      desc: "Through Duty Free Americas, Falic Group has become a major player in the tobacco industry in the United States and Latin America.",
      images: [
        "/houses/tobacco-1.webp",
        "/houses/tobacco-2.webp",
        "/houses/tobacco-3.webp",
      ]
    },
    {
      title: "Other activities",
      desc: "Falic Group proudly operates a number of diverse businesses including medical supplies, payment cards and gas stations.",
      images: [
        "/houses/other-1.webp",
        "/houses/other-2.webp",
        "/houses/other-3.webp",
      ]
    },
  ]
};

const Houses = () => {
  return (
    <>
      <Hero bg="/homepage/hero.webp">
        <h1 className="py-3 text-center w-full">Houses</h1>
        <p className="w-full md:w-5/6 lg:w-1/2 p-3 text-center">
          Falic Group owns a portfolio of brands and serves as the trusted partner for world-leading luxury groups. These prestigious groups, including LVMH, Richemont, Chanel, Edrington, and more, have chosen Falic Group to represent and drive their international growth in key markets.
        </p>
        <div className="hidden md:flex justify-around flex-wrap gap-10 px-10 absolute w-1/2 bottom-10">
          {data.hero.map((s) => (
            <div key={s.text} className="flex flex-col items-center">
              <h2 className="pb-2">{s.num}</h2>
              <h4 className="uppercase text-lg">{s.text}</h4>
              <hr className="w-12 mt-3" />
            </div>
          ))}
        </div>
      </Hero>
      <div className="flex md:hidden justify-around gap-10 p-10 w-full bg-accent text-white">
          {data.hero.map((s) => (
            <div key={s.text} className="flex flex-col items-center">
              <h2 className="pb-2">{s.num}</h2>
              <h4 className="uppercase text-lg">{s.text}</h4>
              <hr className="w-12 mt-3" />
            </div>
          ))}
        </div>
      <section>
        {data?.houses &&
          data.houses.map((house, i) => {
            return (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-secondary" : "bg-primary"
                } flex flex-col gap-6 items-center text-center w-full p-8 md:p-20 md:py-10`}
              >
                <div className="w-4/5 max-w-screen-xl">
                  <h2 className="font-montserrat font-semibold">{house.title}</h2>
                  <p>{house.desc}</p>
                </div>
                <ul className="flex flex-col md:flex-row w-full max-w-screen-lg">
                  {house.images.map((img: string, j) => {
                      return (
                        <li key={j} className="w-full lg:w-1/3 px-2 pb-4 md:pb-0 relative">
                          <Image className="w-full h-auto" src={img} alt={house.title} height="236" width="335" />
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Houses;
