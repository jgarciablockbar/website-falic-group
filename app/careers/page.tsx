const positions = [
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
  {
    title: 'Data Science Engineer, Geospatial',
    location: 'Boston',
  },
]

const Careers = () => {
  return (
    <main>
      <section className="h-v40 w-screen flex flex-row items-center justify-center bg-center" style={{ backgroundImage: "url(https://loremflickr.com/1300/900/careers)" }}>
        <h1 className="text-white">Open Positions</h1>
      </section>
      <section className="bg-secondary p-10 md:p20">
        <ul className="flex flex-row flex-wrap">
          {positions.map((position, i) => <li key={i} className="md:w-1/2 lg:w-1/3 mb-3">
            <div className="bg-white p-5 mx-3 border-primary border-l-4">
              <h3>{position.title}</h3>
              <p className="text-primary">{position.location}</p>
            </div>
          </li>)}
        </ul>
      </section>
    </main>
  )
}

export default Careers;
