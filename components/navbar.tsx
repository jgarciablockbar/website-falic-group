"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
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

  return (
    <div className="absolute w-screen flex justify-center items-center flex-col z-20 pt-6">
      <Link href="/" style={{ display: "block", fontSize: 34 }}>
        Falic Group
      </Link>
      <nav className="uppercase flex mt-6 mb-0 gap-10">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={`text-white underline-offset-4 transition ease-in-out duration-300 ${pathname === section.href ? "" : "no-underline"} hover:underline`}
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
