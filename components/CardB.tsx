import Link from "next/link";
import ActiveImg from "./ActiveImg";
import { FC } from "react";
import ButtonA from "./ButtonA";

interface link {
  title: string;
  href: string;
}

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  links: link[];
  bgClass?: string;
}

const NewsCardA: FC<Props> = ({title, description, imgSrc, links, bgClass}) => {

  return <div className={`${bgClass || ''} p-20 flex flex-col gap-y-10 items-start`}>
    <Link href={links[0].href} target="_blank" className="block h-80 self-stretch">
      <ActiveImg src={imgSrc} />
    </Link>
    <h2>{title}</h2>
    <p>{description}</p>
    {links.map(link => <ButtonA key={link.title} href={link.href}>{link.title}</ButtonA>)}
  </div>
}

export default NewsCardA;
