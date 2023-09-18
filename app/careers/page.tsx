const positions = [
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
  {
    title: "Data Science Engineer, Geospatial",
    location: "Boston",
  },
];

const Careers = () => {
  return (
    <main>
      <section
        className="h-v40 w-screen flex flex-row items-center justify-center bg-center"
        style={{
          backgroundImage: "url(https://loremflickr.com/1300/900/careers)",
        }}
      >
        <h1 className="text-white">Join Us</h1>
      </section>

      <section className="bg-white flex flex-col items-center py-20 justify-center">
        <p className="w-5/6 md:w-1/2 text-xl pb-16 text-center font-semibold">
          Fast-paced, disruptive, and family-oriented—that&#39;s how we describe
          ourselves at Falic Group. If you&#39;re a dynamic team player looking
          to exceed your potential, we want to hear from you. At Falic Group,
          we&#39;re committed to providing our employees with the best work-
          life experience and career development, which is why so many of our
          team members have been with us for years and decades. Ready to join
          our Falic Group family? Keep an eye out for exciting career
          opportunities in global and in-market operations, supply chain,
          retail, finance, creative, marketing, public relations and e-Commerce.
        </p>
      </section>

      <section className="bg-secondary p-10 md:p20">
        <h2 className="p-10">Open Positions</h2>
        <ul className="flex flex-row flex-wrap">
          {positions.map((position, i) => (
            <li key={i} className="md:w-1/2 lg:w-1/3 mb-3">
              <div className="bg-white p-5 mx-3 border-primary border-l-4">
                <h3>{position.title}</h3>
                <p className="text-primary">{position.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Careers;
