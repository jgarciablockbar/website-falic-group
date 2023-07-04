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
    <div style={{ width: "100%", textAlign: "center" }}>
      <div style={{ marginTop: 20 }}>
        <Link href="/" style={{ display: "block", fontSize: 34 }}>
          Falic Group
        </Link>
        <nav
          style={{
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 640,
            margin: "20px auto 0",
          }}
        >
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              style={{
                borderBottom:
                  pathname === section.href ? "1px solid white" : "",
                paddingBottom: 2,
              }}
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
