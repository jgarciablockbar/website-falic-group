"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const sections = [
    {
      href: "/group",
      title: "Lorem",
    },
    {
      href: "/houses",
      title: "ipsum ",
    },
    {
      href: "/news",
      title: "dolor",
    },
    {
      href: "/falic-foundation",
      title: "consectetur",
    },
    {
      href: "/offices",
      title: "adipiscing",
    },
    {
      href: "/hr",
      title: "eiusmod",
    },
  ];
  const NavItems = () => sections.map((section) => (
      <Link
        key={section.href}
        href={section.href}
        className={`font-semibold text-white underline-offset-4 transition ease-in-out duration-300 ${pathname === section.href ? "" : "no-underline"} hover:underline`}
      >
        {section.title}
      </Link>
    ));

  return (
    <div className="absolute w-screen flex justify-center items-center flex-col z-20 pt-6">
      <Link href="/" style={{ display: "block", fontSize: 34 }}>
        <h1>Lorem</h1>
      </Link>
      <nav className="uppercase mt-6 mb-0 gap-10 hidden md:flex">
        <NavItems />
      </nav>
    </div>
  );
}

export default Navbar;
