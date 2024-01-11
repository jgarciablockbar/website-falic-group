import Image from "next/image";
import Hero from "@/components/Hero";
import ButtonB from "@/components/ButtonB";
import Link from "next/link";

const positions = [
  {
    title: "Data Science Engineer, Geospatial",
    date: "09/25/2023",
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    btnText: "Coming soon"
  },
  {
    title: "Data Science Engineer, Geospatial",
    date: "09/25/2023",
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    btnText: "Coming soon"
  },
  {
    title: "Data Science Engineer, Geospatial",
    date: "09/25/2023",
    type: "Fixed Term",
    department: "Sales_Chepi_Channel",
    location: "Asia -  Mainland China - Beijing",
    btnText: "Coming soon"
  },
];

const Careers = () => {
  return (
    <>
      <Hero bg="/careers/hero.webp">
        <h1>Join us</h1>
      </Hero>

      <section className="bg-primary text-white flex flex-col gap-8 items-center py-20 justify-center">
        <h3>Fast-paced, disruptive and family-oriented.</h3>
        <p className="w-5/6 lg:w-2/3 text-lg text-center">
          That&apos;s how we describe ourselves at Falic Group. If you&apos;re a dynamic team player looking to exceed your potential, we want to hear from you.
        </p>
        <p className="w-5/6 lg:w-2/3 text-lg text-center">
          At Falic Group, we&apos;re committed to providing our employees with the best work-life experience and career development, which is why so many of our team members have been with us for years and decades. Ready to join our Falic Group family? Keep an eye out for exciting career opportunities in global and in-market operations, supply chain, retail, finance, creative, marketing, public relations and e-Commerce.
        </p>
      </section>

      <section className="bg-secondary p-10 pb-0 md:p-20 md:pb-0 flex flex-col items-center">
        <h3 className="flex text-center border-black border-b-2 leading-8 mb-8">Career opportunities</h3>
        <ul className="flex flex-col lg:flex-row gap-y-3">
          {positions.map((position, i) => (
            <li
              key={i}
              className="w-full lg:w-1/3 flex flex-col"
            >
              <div className="bg-primary text-white px-6 py-8 mx-2 text-center font-montserrat">
                <h3 className="text-sm" >{position.title}</h3>
                <hr className="mx-12 my-4" />
                <p className="text-xs mb-4 font-montserrat" style={{ fontSize: '12px'}}>
                  {position.type} - {position.department} - {position.location}
                </p>
                <ButtonB href="/careers">{position.btnText}</ButtonB>
                <p className="mt-4 font-montserrat" style={{ fontSize: '12px'}}>{position.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/careers" className="underline font-montserrat uppercase pt-8 font-semibold text-xs hover:text-primary">See more</Link>
      </section>
    </>
  );
};

export default Careers;
