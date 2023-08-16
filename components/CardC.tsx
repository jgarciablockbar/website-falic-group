import { FC } from "react";
import ActiveImg from "./ActiveImg";

interface Props {
  img: string;
  title: string;
}

const CardC: FC<Props> = ({ img, title }) => {
  return <div className="w-full flex flex-col md:flex-row">
    <div className="w-full h-48">
      <ActiveImg src={img} />
    </div>
    <h3 className="w-full flex items-center text-center justify-center py-12 px-8 bg-primary font-semibold text-white">{title}</h3>
  </div>
}

export default CardC;
