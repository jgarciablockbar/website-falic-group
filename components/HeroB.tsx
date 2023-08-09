import { FC, ReactNode } from "react";
import ActiveImg from "./ActiveImg";
interface Props {
  bg?: string;
  children?: ReactNode;
}
const HeroB: FC<Props> = ({bg, children}) => {
  return <section style={{backgroundImage: `url('${bg}')`}} className="w-full h-screen bg-cover z-10 flex flex-col justify-center items-center text-white gap-y-6">
    {children}
  </section>
}
export default HeroB;
