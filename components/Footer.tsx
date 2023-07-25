import Image from "next/image";

const Footer = () => {

  const sm = [
    {
      href: "/",
      title: 'facebook',
      img: '/icons/facebook.svg'
    },
    {
      href: "/",
      title: 'twitter',
      img: '/icons/twitter.svg'
    },
    {
      href: "/",
      title: 'linkedIn',
      img: '/icons/linkedIn.svg'
    },
    {
      href: "/",
      title: 'youtube',
      img: '/icons/youtube.svg'
    },
    {
      href: "/",
      title: 'pinterest',
      img: '/icons/pinterest.svg'
    },
    {
      href: "/",
      title: 'instagram',
      img: '/icons/instagram.svg'
    },
    {
      href: "/",
      title: 'tiktok',
      img: '/icons/tiktok.svg'
    },
  ]

  return <section className="flex flex-col items-center py-20 bg-black">
    <h2>LVMH</h2>
    <div className="flex gap-4">Follow LVMH on:
      {sm.map(n => <a key={n.title} href={n.href} title={n.title}><Image src={n.img} alt={n.title} width={30} height={30} /></a>)}
    </div>
  </section>
}

export default Footer;
