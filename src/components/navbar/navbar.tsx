"use client";

import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/overview", label: "Overview" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white px-16 border border-[#DADCE0] min-h-[104px] flex items-center fixed w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div>
          <Image
            src="/navbar/LogoGDGoC.svg"
            alt="Logo"
            width={350}
            height={40}
          />
        </div>
        <div className="flex flex-row gap-2 text-[16px]">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className="group"
              >
                <div
                  className={`rounded-full px-5 py-[14px] transition-colors duration-200 group-hover:bg-[#EAF2FF] group-hover:font-bold group-hover:text-[#1967D2] ${
                    isActive
                      ? "bg-[#EAF2FF] font-bold text-[#1967D2]"
                      : "text-[#5F6368]"
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-[16px] text-white bg-blue-500 px-6 flex flex-row gap-4 rounded-[8px] items-center min-h-[52px]">
          <h1>Find your track</h1>
          <LuArrowRight />
        </div>
      </div>
    </nav>
  );
}