import { FC, ReactNode } from "react";
import Image from "next/image";

interface Props {
  title: string;
  img: string;
  date: ReactNode;
}

const CardE: FC<Props> = ({ title, img,  date }) => {
  return <div className='text-center'>
  <div className="h-56 relative mb-5">
    <Image src={img} alt={title} fill />
  </div>
  <h3>{title}</h3>
  <h4>{date}</h4>
</div>
}

export default CardE;
