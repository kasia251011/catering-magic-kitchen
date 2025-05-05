"use client";

import HamburgerNavItems from "../HamburgerNavItems";
import Hamburger from "@/components/Hamburger";
import { useState } from "react";
import Logo from "@/components/Logo";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white py-2 px-1 md:hidden shadow-xs">
        <div className="container flex justify-between items-center ">
          <Logo variant="dark" size="sm" />
          <Hamburger
            toggleMenu={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
          />
        </div>
      </div>
      {isOpen && <HamburgerNavItems closeNav={() => setIsOpen(false)} />}
    </>
  );
};
export default HamburgerNav;
