import { FC } from 'react';
import Image from 'next/image';
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

const ColCard: FC<Props> = ({title, category, date, img, aid, desc, btnText}: Props) => {
  const link = `/news/${aid}`;

  return (
    <div className="p-8 md:p-20 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 relative md-pr:20 pb-8 md:pb-0">
        <Image src={img} width="954" height="658" alt={title} className="w-full max-w-full h-auto"/>
      </div>
      <div className="text-white w-full md:w-1/2 md:pl-8">
        <h3>{title}</h3>
        {desc && <p>{desc}</p>}
        {btnText &&
          <div className="mt-10">
            <ButtonA href={link} colors="text-white hov:text-primary hov:bg-white">{btnText}</ButtonA>
          </div>}
      </div>
    </div>
  );
}

export default ColCard;
