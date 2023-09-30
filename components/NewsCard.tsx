import Link from "next/link";
import { FC } from 'react';
import ActiveImg from "./ActiveImg";

interface Props {
  title: string,
  category: string,
  date: string,
  img: string,
  aid: string,
}

const NewsCard: FC<Props> = ({title, category, date, img, aid}: Props) => {
  return <Link className={`p-8 md:p-20 flex flex-col gap-y-8`} href={`/news/${aid}`}key={aid}>
      <h2>{title}</h2>
      <p className="text-gray-500">{category}<br />{date}</p>
      <div className="w-full h-v30 md:h-v60 relative">
        <ActiveImg src={img} />
      </div>
    </Link>
}

export default NewsCard;
