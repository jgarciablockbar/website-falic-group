import { FC, ReactNode } from "react";
import Image from "next/image";

interface Props {
  title: string;
  img: string;
}

const CardE: FC<Props> = ({ title, img }) => {
  return <div className='text-center'>
  <div className="h-56 relative mb-5">
    <Image src={img} alt={title} fill style={{objectFit: 'cover'}} />
  </div>
  <h3>{title}</h3>
</div>
}

export default CardE;
