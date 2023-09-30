"use client";

import Link from "next/link";
import Image from "next/image"
import localFont from 'next/font/local';
import { usePathname } from "next/navigation";
import { FC } from "react";

const caslon = localFont({ src: '../public/fonts/Caslon540LTStd-Roman.woff2' });

const Navbar: FC= () => {
  const pathname = usePathname();
  const sections = [
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
  ];
  const NavItems = () => sections.map((section) => (
      <Link
        key={section.href}
        href={section.href}
        className={`${caslon.className} font-semibold text-primary underline-offset-4 transition ease-in-out duration-300 ${pathname === section.href ? "" : "no-underline"} hover:underline`}
      >
        {section.title}
      </Link>
    ));

  return (
    <div className="relative bg-white pb-6 w-screen flex justify-center items-center flex-col z-20 pt-6">
      <Link href="/" style={{ display: "block", fontSize: 34 }}>
        <Image src="/logo.png" alt="Falic Group" width={300} height={100} />
      </Link>
      <nav className="uppercase mt-6 mb-0 gap-10 hidden md:flex">
        <NavItems />
      </nav>
    </div>
  );
}

export default Navbar;
