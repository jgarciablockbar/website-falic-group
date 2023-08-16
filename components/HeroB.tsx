import { FC, ReactNode } from "react";
import ActiveImg from "./ActiveImg";
interface Props {
  bg?: string;
  children?: ReactNode;
}
const HeroB: FC<Props> = ({bg, children}) => {
  return <section style={{ backgroundImage: "url(https://loremflickr.com/1300/900/night)" }} className='bg-cover bg-center w-screen min-h-v70 h-fit flex items-center p-10 md:p-20'>
    <div className="text-white gap-y-8 flex flex-col justify-around items-center text-center">
      {children}
    </div>
  </section>
}
export default HeroB;
