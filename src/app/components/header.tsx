"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const navItems = [
    "News",
    "Events",
    "Resources",
    "Careers",
    "Showcase",
    "Blog",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <header className="container bg-body flex py-6 justify-between items-center text-lg text-grayHeaderText font-medium sticky top-0 ">
      <Link href="/">
        <h1 className="text-4xl font-bold text-primary">GeekQuest</h1>
      </Link>

      <ul className="hidden lg:flex text-grayText space-x-12 items-centre">
        {navItems.map((navItem, index) => (
          <li
            className={selectedIndex === index ? "text-selectedText" : ""}
            key={navItem}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            <Link href={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}>
              {navItem}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
