import { FC, ReactNode } from "react";

interface Props {
  bgColor: string;
  bgImg: string;
  children: ReactNode;
}

const CardC: FC<Props> = ({ bgColor, bgImg,  children }) => {
  return <section className={`${bgColor} w-full md:h-screen flex flex-col gap-y-5 items-center relative`}>
    <div style={{ backgroundImage: `url('${bgImg}')`}} className="w-5/6 mt-20 h-96 bg-cover bg-center md:h-4/5" />
    <div className="w-full h-full bg-cover bg-center md:absolute flex flex-col gap-y-5 mb-20 justify-around items-center md:justify-center">
      {children}
    </div>
  </section>
}

export default CardC;
