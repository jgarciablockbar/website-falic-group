import Image from "next/image";

const Footer = () => {

  const sm = [
    {
      href: "/",
      title: 'linkedIn',
      img: '/icons/linkedIn.svg'
    },
  ]

  return <section className="flex flex-col items-center py-20 bg-black text-white">
    <h2 className="mb-4 text-secondary">Falic Group</h2>
    <div className="flex gap-4">Follow Lorem on:
      {sm.map(n => <a key={n.title} href={n.href} title={n.title}><Image src={n.img} alt={n.title} width={30} height={30} /></a>)}
    </div>
  </section>
}

export default Footer;
