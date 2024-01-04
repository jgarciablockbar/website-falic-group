import Link from "next/link";
import { FC } from 'react';
import ActiveImg from "./ActiveImg";
import ButtonA from "./ButtonA";

interface Props {
  title: string,
  img: string,
  aid: string,
  category?: string,
  date?: string,
  desc?: string,
  btnText?: string,
}

const NewsCard: FC<Props> = ({title, category, date, img, aid, desc, btnText, padded = false}: Props) => {
  const link = `/news/${aid}`;

  return (
    <Link className="p-8 md:p-20 flex flex-col gap-y-4" href={link}>
      <div className="w-full h-v30 md:h-v60 relative">
        <ActiveImg src={img} />
      </div>
      <h3>{title}</h3>
      {category && date && <p className="text-gray-500">{category}<br />{date}</p>}
      {desc && <p>{desc}</p>}
      {btnText && <ButtonA  href={link}>{btnText}</ButtonA>}
    </Link>
  );
}

export default NewsCard;
