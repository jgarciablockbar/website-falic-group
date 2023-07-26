import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const ButtonA:FC<Props> = ({href, children}) => <Link href={href} target="_self" className="flex py-3 px-7 border-2 border-solid border-white hover:bg-white hover:text-black">{children}</Link>

export default ButtonA;
