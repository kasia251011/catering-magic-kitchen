"use client";

import { ROUTES, Url } from "@/utils/routes";
import Link from "next/link";
import HamburgerNav from "./HamburgerNav";
import Logo from "../Logo";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [bgColored, setBgColored] = useState(false);

  const handleScroll = () => {
    setBgColored(window.scrollY > 40);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed z-100 ${
        bgColored ? "bg-white" : "bg-transparent"
      } transition-all duration-500`}
    >
      <div className="container hidden md:flex flex-row justify-between py-4 ">
        <Link href={Url.HOME}>
          <Logo variant={bgColored ? "dark" : "light"} size="sm" />
        </Link>
        <ul className="text-sm flex items-center gap-6 ">
          {ROUTES.map(({ url, label }) => (
            <Link
              key={url}
              href={url}
              className={bgColored ? "nav-link-dark" : "nav-link"}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
      <HamburgerNav />
    </nav>
  );
};

export default Navbar;
