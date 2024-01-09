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

const EventCard: FC<Props> = ({title, category, date, img, aid, desc, btnText}: Props) => {
  const link = `/news/${aid}`;

  return (
    <div className="md:px-6 lg:px-10">
      <Link className="flex flex-col gap-y-4 mb-10" href={link}>
        <div className="w-full h-v30 md:h-v30 relative">
          <ActiveImg src={img} />
        </div>
        <h3 className="text-sm">{title}</h3>
        {category && date && <p className="text-gray-500">{category}<br />{date}</p>}
        {desc && <p className="text-xs">{desc}</p>}
      </Link>
      {btnText && <ButtonA  href={link}>{btnText}</ButtonA>}
    </div>
  );
}

export default EventCard;
