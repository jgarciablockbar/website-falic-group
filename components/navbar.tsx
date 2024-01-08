"use client";

import Link from "next/link";
import Image from "next/image"
import localFont from 'next/font/local';
import { usePathname } from "next/navigation";
import { FC } from "react";

  export const navItems = [
    {
      href: "/group",
      title: "Group",
    },
    {
      href: "/houses",
      title: "Houses ",
    },
    {
      href: "/news",
      title: "News",
    },
    {
      href: "/offices",
      title: "Offices",
    },
    {
      href: "/careers",
      title: "Careers",
    },
    {
      href: "/foundation",
      title: "Foundation",
    },
  ];

  interface NavItemsProps {
    href: string;
    title: string;
    current: boolean;
  }

  const NavItem = ({ href, title, current }: NavItemsProps) => (
    <Link
      key={href}
      href={href}
      className={`font-semibold text-white underline-offset-4 ${current ? "underline" : ""} hover:underline`}
    >
      {title}
    </Link>
  );


const Navbar: FC= () => {
  const pathname = usePathname();
  return (
    <div className="absolute w-screen flex justify-between items-start flex-row z-20 p-6">
      <Link href="/" style={{ display: "block", fontSize: 34 }}>
        <Image src="/logo_white.svg" alt="Falic Group" height={100} width={300}  />
      </Link>
      <nav className="uppercase gap-6 hidden md:flex">
        {navItems.map(navItem => <NavItem key={navItem.title} current={pathname === navItem.href} href={navItem.href} title={navItem.title}/>)}
      </nav>
    </div>
  );
}

export default Navbar;
