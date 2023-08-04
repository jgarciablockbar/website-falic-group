import Link from "next/link";
import ActiveImg from "./ActiveImg";
import { FC } from "react";

interface Props {
  title: string;
  date: string;
  imgSrc: string;
  link: string;
}

const CardA: FC<Props> = ({title, date, imgSrc, link}) => {

  return <div className="flex flex-col gap-y-10">
    <h4>{date}</h4>
    <h3>{title}</h3>
    <Link href={link} target="_blank" className="block w-full h-screen">
      <ActiveImg src={imgSrc} />
    </Link>
  </div>
}

export default CardA;
