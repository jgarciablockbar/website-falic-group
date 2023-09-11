import { FC } from "react";
import ActiveImg from "./ActiveImg";

interface Props {
  img: string;
  title: string;
  description: string;
}

const CardC: FC<Props> = ({ img, title, description }) => {
  return <div className="w-full flex flex-col md:flex-row">
    <div className="w-full h-80">
      <ActiveImg src={img} />
    </div>
    <div className="w-full flex items-center text-center justify-center py-12 px-8 bg-primary text-white">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="py-4">{description}</p>
      </div>
    </div>
  </div>
}

export default CardC;
