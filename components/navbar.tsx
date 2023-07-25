"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const sections = [
    {
      href: "/group",
      title: "group",
    },
    {
      href: "/houses",
      title: "houses",
    },
    {
      href: "/news",
      title: "news",
    },
    {
      href: "/falic-foundation",
      title: "falic foundation",
    },
    {
      href: "/offices",
      title: "offices",
    },
    {
      href: "/hr",
      title: "hr",
    },
  ];
  const NavItems = () => sections.map((section) => (
      <Link
        key={section.href}
        href={section.href}
        className={`text-white underline-offset-4 transition ease-in-out duration-300 ${pathname === section.href ? "" : "no-underline"} hover:underline`}
      >
        {section.title}
      </Link>
    ));

  return (
    <div className="absolute w-screen flex justify-center items-center flex-col z-20 pt-6">
      <Link href="/" style={{ display: "block", fontSize: 34 }}>
        Falic Group
      </Link>
      <nav className="uppercase mt-6 mb-0 gap-10 hidden md:flex">
        <NavItems />
      </nav>
    </div>
  );
}

export default Navbar;
