import Image from "next/image";

const positions = [
  {
    title: 'Data Science Engineer, Geospatial',
    img: 'https://loremflickr.com/400/400/cats',
    date: '09/25/2023',
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    fb: 'https://facebook.com',
    tw: 'https://twitter.com',
    li: 'http://linkedin.com'
  },
  {
    title: 'Data Science Engineer, Geospatial',
    img: 'https://loremflickr.com/400/400/cats',
    date: '09/25/2023',
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    fb: 'https://facebook.com',
    tw: 'https://twitter.com',
    li: 'http://linkedin.com'
  },
]

const Careers = () => {
  return (
    <main>
      <section className="h-v40 w-screen flex flex-row items-center justify-center bg-center" style={{ backgroundImage: "url(https://loremflickr.com/1300/900/careers)" }}>
        <h1 className="text-white">Open Positions</h1>
      </section>
      <section className="bg-secondary p-10 md:p20">
        <ul className="flex flex-col">
          {positions.map((position, i) => <li key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-secondary'} w-full flex items-stretch justify-between`}>
            <Image src={position.img} width="400" height="400" alt={position.title} />
            <div className={`flex flex-col justify-between w-3/4 p-10`}>
              <div>
                <p>{position.date}</p>
                <h3>{position.title}</h3>
              </div>
              <div>
                 <p>
                  {position.type}<br />
                  {position.department}<br />
                  {position.location}
                 </p>
              </div>
            </div>
            <div className="w-1/4 flex p-10 justify-end">
              <a href={position.fb} title="facebook"><Image src='/icons/facebook_black.svg' alt='facebook' width={30} height={30} /></a>
              <a href={position.tw} title="twitter"><Image src='/icons/twitter_black.svg' alt='twitter' width={30} height={30} /></a>
              <a href={position.li} title="linkedIn"><Image src='/icons/linkedIn_black.svg' alt='linkedin' width={30} height={30} /></a>
            </div>
          </li>)}
        </ul>
      </section>
    </main>
  )
}

export default Careers;
